from django.urls import path
from . import views

urlpatterns = [
    path('playlists/', views.AllPlaylists.as_view()),
    path('playlist/<int:id>', views.SinglePlaylist.as_view()),

    path('videos/', views.AllVideos.as_view()),
    path('video/<int:id>', views.SingleVideo.as_view()),


]