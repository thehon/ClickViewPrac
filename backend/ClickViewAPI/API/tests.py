from django.test import TestCase
from django.test.utils import setup_test_environment
from django.urls import reverse
from django.test import Client
from API.models import Video, PlayList
# Create your tests here.

class VideoModelTests(TestCase):
    def setUp(self):
        newvideo = Video(videoID=1, name="test viideo", duration=12, description="short desc",thumbnail="/url")
        newvideo.save()

    def testVideoList(self):

        #response = self.client.get(reverse('API:SingleVideos/'))
        client = Client()
        response = client.get('/api/videos/')
        
        numberofvideos = len(response.json()['videos'])
        #rint("response: ", response)
        self.assertEqual(1,numberofvideos)
    
    def testSingleVideo(self):
        client = Client()
        response = client.get('/api/video/1')
        self.assertTrue(response.status_code==200)

class PlaylistModelTests(TestCase):
    def setUp(self):
        newvideo = Video(videoID=1, name="test viideo", duration=12, description="short desc",thumbnail="/url")
        newvideo.save()

        newplaylist = PlayList(playlistID=1,name='test', description="")
        newplaylist.save()
        newplaylist.videos.add(newvideo)
        newplaylist.save()

    def testPlayList(self):
        client = Client()
        response = client.get('/api/playlists/')
        
        numberofplaylists = len(response.json()['playlists'])
        
        self.assertEqual(1,numberofplaylists)
    
    def testSinglePlayList(self):
        client = Client()
        response = client.get('/api/playlist/1')
        numberofvideos = len(response.json()['playlist']['videos'])
        self.assertTrue(response.status_code==200)
        self.assertEqual(1,numberofvideos)