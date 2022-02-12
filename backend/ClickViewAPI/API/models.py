from django.db import models
from django.db import models
from django.db.models.fields.related import ManyToManyField
import datetime

# Create your models here.


class Video(models.Model):
    videoID = models.IntegerField()
    name = models.CharField(max_length=200)
    duration = models.IntegerField()
    description = models.CharField(max_length=1000)
    dateCreated = models.DateField(max_length=100, default=str(datetime.datetime.now().date()))
    thumbnail = models.CharField(max_length=1000)

class PlayList(models.Model):
    playlistID = models.IntegerField()
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=1000)
    videos = models.ManyToManyField("Video", blank=True, default="")
    dateCreated = models.DateField(max_length=100, default=str(datetime.datetime.now().date()))
