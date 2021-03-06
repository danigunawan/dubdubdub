from rest_framework.response import Response
from schools.models import Boundary, AcademicYear
from schools.api_views.aggregations import BaseSchoolAggView
from . import BaseBoundaryReport
from common.views import KLPAPIView
from common.exceptions import APIError
from django.conf import settings


class DiseBoundaryDetails(KLPAPIView, BaseSchoolAggView, BaseBoundaryReport):

    reportInfo = {}

    def get_boundary_info(self, boundaryid):
        year = self.request.GET.get('year', settings.DEFAULT_ACADEMIC_YEAR)
        try:
            academic_year = AcademicYear.objects.get(name=year)
        except AcademicYear.DoesNotExist:
            raise APIError('Academic year is not valid.\
                    It should be in the form of 2011-2012.', 404)
        self.reportInfo["academic_year"] = year
        try:
            boundary = Boundary.objects.get(pk=boundaryid)
        except Exception:
            raise APIError('Boundary not found', 404)
        self.get_boundary_summary_data(boundary, self.reportInfo)
        if boundary.get_admin_level() == 1:
            self.reportInfo["neighbours"] = []
            boundaries = self.getDistrictNeighbours(boundary)
            for comparisonboundary in boundaries:
                self.reportInfo["neighbours"].append({
                    "dise": comparisonboundary.dise_slug, "type": "district"})

    def get(self, request):
        mandatoryparams = {'id': [], 'language': ["english", "kannada"]}
        self.check_mandatory_params(mandatoryparams)

        id = self.request.GET.get("id")
        reportlang = self.request.GET.get("language")

        self.reportInfo["report_info"] = {"report_lang": reportlang}
        self.get_boundary_info(id)
        return Response(self.reportInfo)
