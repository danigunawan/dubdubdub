from django.contrib.auth import login, authenticate, logout
from .models import User
from common.utils import render_to_json_response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions


class TestAuthenticatedView(APIView):
    authentication_classes = (authentication.TokenAuthentication, authentication.SessionAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        return Response({
            'logged_in_as': request.user.email
        })



@csrf_exempt #FIXME: here to make testing easier, remove.
def signup(request):
    email = request.POST.get("email", None)
    first_name = request.POST.get("first_name", "")
    last_name = request.POST.get("last_name", "")
    mobile_no = request.POST.get("mobile_no", None)
    password = request.POST.get("password", None)
    if not email or not password or not mobile_no:
        return render_to_json_response({'error': 'Insufficient data'})
    if User.objects.filter(email=email).count() > 0:
        return render_to_json_response({'error': 'Email exists'})
    user = User.objects.create_user(email, password, first_name=first_name, last_name=last_name,\
        mobile_no=mobile_no, type=typ)
    user = authenticate(username=email, password=password)
    login(request, user)
    token = Token.objects.get(user=user).key
    return render_to_json_response({'success': 'User logged in', 'token': token})


def signout(request):
    logout(request)
    return render_to_json_response({'success': 'User logged out'})


@csrf_exempt #FIXME
def signin(request):
    email = request.POST.get("email", "")
    password = request.POST.get("password", "")
    user = authenticate(username=email, password=password)
    if user is not None:
        login(request, user)
        token = Token.objects.get(user=user).key
        return render_to_json_response({'success': 'User logged in', 'token': token})
    return render_to_json_response({'error': 'Username / password do not match'})
