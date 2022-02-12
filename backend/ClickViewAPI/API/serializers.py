from rest_framework import generics, serializers
from . import models
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Video
        fields = '__all__'

class PlayListSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True, read_only=True)
    class Meta:
        model = models.PlayList
        fields = ('playlistID', 'name', 'description', 'videos', 'dateCreated')