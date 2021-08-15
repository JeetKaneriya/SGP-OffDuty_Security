from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import jwt
from .models import *
from .ser import *

# Create your views here.

@api_view(['GET', 'POST'])
def Login(request):
    if request.method == 'POST':
        data = request.data
        username = data['username']
        password = data['password']
        user = authenticate(username= username, password= password)
        if user:
            userDetails = UserDetails.objects.get(user= user)
            userJson = UserDetailsSer(userDetails)
            jwtToken = jwt.encode({"username": username}, "secret", algorithm="HS256")
            return Response(data={'status':'Logged In', 'token':jwtToken, 'user':userJson.data})
        return Response(data={'error':'Wrong username or password'})

    return Response(data={'name':'Jeet'})

@api_view(['GET'])
def Feed(request):
    if request.method == 'GET':
        entities = Entities.objects.all()

        entitiesJson = []

        for entity in entities:
            entitiesJson.append(EntitiesSer(entity).data)

        return Response(data={'entities':entitiesJson})

    return Response(data={'error':'some error occured'})