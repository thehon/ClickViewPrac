from django.shortcuts import render
from API import models, serializers
from rest_framework.response import Response
from rest_framework import generics, permissions, status
# Create your views here.

class AllPlaylists(generics.GenericAPIView):
    queryset = models.PlayList.objects.all()
    serializer_class = serializers.PlayListSerializer
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        playlists = models.PlayList.objects.all()
        return Response({"playlists": serializers.PlayListSerializer(playlists, many=True).data})
    
class SinglePlaylist(generics.GenericAPIView):
    queryset = models.PlayList.objects.all()
    serializer_class = serializers.PlayListSerializer
    permission_classes = (permissions.AllowAny,)
    def get(self, request, id):
        playlist = models.PlayList.objects.get(playlistID=id)
        if playlist:
            return Response({"playlist": serializers.PlayListSerializer(playlist, many=False).data})
        else:
            return Response({"playlist", "not found"}, status=status.HTTP_404_NOT_FOUND)

class AllVideos(generics.GenericAPIView):
    queryset = models.Video.objects.all()
    serializer_class = serializers.VideoSerializer
    permission_classes = (permissions.AllowAny,)
    def get(self, request):
        videos = models.Video.objects.all()
        return Response({"videos": serializers.VideoSerializer(videos,many=True).data})

class SingleVideo(generics.GenericAPIView):
    queryset = models.Video.objects.all()
    serializer_class = serializers.VideoSerializer
    permission_classes = (permissions.AllowAny,)
    def get(self, request, id):
        video = models.Video.objects.get(videoID=id)
        if video:
            return Response({"video": serializers.VideoSerializer(video, many=False).data})
        else:
            return Response({"video", "not found"}, status=status.HTTP_404_NOT_FOUND)