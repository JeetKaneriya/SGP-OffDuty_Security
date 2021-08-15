from django.db.models import fields
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class UserSer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class UserDetailsSer(serializers.ModelSerializer):
    user = UserSer()
    class Meta:
        model = UserDetails
        fields = "__all__"

class RFIDDetailsSer(serializers.ModelSerializer):
    userDetails = UserDetailsSer()
    class Meta:
        model = RFIDDetails
        fields = "__all__"

class EntitiesSer(serializers.ModelSerializer):
    class Meta:
        model = Entities
        fields = "__all__"