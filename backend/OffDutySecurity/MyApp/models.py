from os import name
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    pic = models.FileField(null=True, blank=True)
    houseNo = models.CharField(max_length=10, null=True, blank=True)
    noOfVehicles = models.CharField(max_length=10, null=True, blank=True)
    mobileNo = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.name

class RFIDDetails(models.Model):
    userDetails = models.ForeignKey(UserDetails, on_delete=models.CASCADE, null=True, blank=True)
    rfid = models.CharField(max_length=15, null=True, blank=True)
    carNo = models.CharField(max_length=15, null=True, blank=True)
    vehicleClass = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.rfid

class Entities(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    houseNo = models.CharField(max_length=10, null=True, blank=True)
    mobileNo = models.CharField(max_length=10, null=True, blank=True)
    rfid = models.CharField(max_length=15, null=True, blank=True)
    carNo = models.CharField(max_length=15, null=True, blank=True)
    vehicleClass = models.CharField(max_length=15, null=True, blank=True)
    date = models.CharField(max_length=10, null=True, blank=True)
    time = models.CharField(max_length=10, null=True, blank=True)
    visibility = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name