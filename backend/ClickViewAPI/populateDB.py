import os
import json
os.environ.setdefault('DJANGO_SETTINGS_MODULE','ClickViewAPI.settings')

import django
django.setup()
from django.db.models import Avg, Sum
from API.models import Video, PlayList

inputvideos = open('videos.json')
inputplaylists = open("playlists.json")

videos = json.load(inputvideos)
playlists = json.load(inputplaylists)

for video in videos:
    newvideo = Video(videoID=video['id'], name=video['name'], duration=int(video['duration']), description=video['description'], dateCreated=video['dateCreated'].split("T")[0], thumbnail=video['thumbnail'])
    newvideo.save()
    print("Creating Video:", video['id'])

for playlist in playlists:
    newplaylist = PlayList(playlistID=playlist['id'], description=playlist['description'], name=playlist['name'],  dateCreated=playlist['dateCreated'].split("T")[0])
    newplaylist.save()
    print("playlist: ", playlist['videoIds'])
    playlistvideos = Video.objects.filter(videoID__in=playlist['videoIds'])
    for video in playlistvideos:
        newplaylist.videos.add(video)
    newplaylist.save()
