import os
import sys
import csv
import psycopg2
from django.core.management.base import BaseCommand
from django.core.files.images import ImageFile
from django.db import transaction
from stories.models import (Story, Answer, Question, Questiongroup, StoryImage)
from schools.models import School, Address
from users.models import User


class Command(BaseCommand):
    args = "<csvname imagepath>"
    help = """Import data from EMS

    ./manage.py importdata1 foobar.csv /path/to/images/"""

    @transaction.atomic
    def handle(self, *args, **options):
        filename, self.image_location = args
        file = open(filename, 'r')
        self.data = csv.DictReader(file)
        self.notfoundfile = open('not-in-dubdubdub.txt', 'w')
        dev_user = User.objects.get(email='dev@klp.org.in')

        for d in self.data:
            klpid = d['KLP ID']
            address = d['Address']
            landmark = d['Landmark #1']
            bus = d['Bus Details']
            pincode = d['PIN Code']
            lat = d['LAT_spotways']
            lon = d['LONG_spotways']
            coordinates = 'POINT ('+lon+' '+lat+')'

            connection, cursor = self.connectKlpCoord()

            if not (klpid.startswith('5')):
                try:
                    school = School.objects.get(id=klpid)
                    if address:
                        if school.address and (not school.address == address):
                            school_address = school.address
                            school_address.address = address
                        else:
                            school_address = Address.objects.create(
                                address=address
                            )
                            school.address = school_address

                    # Update address details.
                    if landmark:
                        school_address.landmark = landmark
                    if bus:
                        school_address.bus = bus
                    if pincode:
                        school_address.pincode = pincode

                    school_address.save()
                    school.save()

                    # Story
                    story = {
                        'date': d['Date'],
                        'user': dev_user,
                        'email': 'dev@klp.org.in',
                        'name': 'Team KLP',
                        'school': school
                    }

                    self.createStory(story, klpid, d)

                    self.updateCoord(cursor, klpid, coordinates)

                except Exception as e:
                    print(e)
                    self.notfoundfile.write(klpid+'\n')

            cursor.close()
            connection.commit()
            connection.close()

        self.notfoundfile.close()

    def createStory(self, story, klpid, d):
        group = Questiongroup.objects.get(id=1)
        new_story, created = Story.objects.get_or_create(
            user=story['user'], school=story['school'],
            group=group, is_verified=True, name=story['name'],
            email=story['email'], date=story['date']
        )
        if created:
            print 'Created new story for school id: %s' % klpid

        playground_question = Question.objects.get(text='Play ground')
        fence_question = Question.objects.get(text='Boundary wall/ Fencing')
        playground_answer, created = Answer.objects.get_or_create(
            story=new_story,
            question=playground_question,
            text=d['PlayGround?']
        )

        fence_answer, crerated = Answer.objects.get_or_create(
            story=new_story, question=fence_question, text=d['Fence?']
        )

        # Images
        images = []
        for i in xrange(1, 4):
            image_filename = '%d-%d.png' % (int(klpid), i)

            if StoryImage.objects.filter(story=new_story,
                                         filename=image_filename).count() > 0:
                continue

            image_path = os.path.join(self.image_location, image_filename)
            if os.path.isfile(image_path):
                images.append(
                    StoryImage(
                        story=new_story, image=ImageFile(
                            open(image_path)
                        ), is_verified=True, filename=image_filename
                    )
                )
                print 'Added image for school id: %d' % int(klpid)

        if images:
            StoryImage.objects.bulk_create(images)

    def connectKlpCoord(self):
        connection = psycopg2.connect("dbname=klp-coord user=klp")
        cursor = connection.cursor()
        return connection, cursor

    def updateCoord(self, cursor, klpid, coordinates):
        query = "UPDATE inst_coord SET coord=ST_PointFromText(%(coordinates)s, 4326) WHERE instid=%(klpid)s;"
        cursor.execute(query, {'coordinates': coordinates, 'klpid': klpid})
        print 'Added coordinates for school id: %s' % klpid
