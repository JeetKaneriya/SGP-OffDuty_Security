from django.urls import path
from .views import *

urlpatterns = [
    path('login/', Login),
    path('feed/', Feed)
]