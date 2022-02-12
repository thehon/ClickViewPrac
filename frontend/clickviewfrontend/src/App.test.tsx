import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import VideosPanel from './components/VideosPanel';
import videos from '../../../backend/data/videos.json';
import PlaylistsPanel from './components/PlaylistsPanel';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


function GetVideosData() {
  return require('../../../backend/data/videos.json');
}

function GetPlaylistsData() {
  return require('../../../backend/data/playlists.json');
}
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
test('test videos length is correct', () => {
  //25 videos in test data
  const {container} = render(<VideosPanel videos={GetVideosData()} />);
  console.log('cont1; ', container.getElementsByClassName('videoCard').length);
  expect(container.getElementsByClassName('videoCard').length).toEqual(25);
  
})


test('test playlist length is correct', () => {
  //3 playlists in test data
  const {container} = render(<PlaylistsPanel playlists={GetPlaylistsData()} />);
  expect(container.getElementsByClassName('playlistrow').length).toEqual(3);
});

//Couldn't get the mock store test to work...
test('Clicking changes panel ', () => {
  const initialState = {api: { videos: [], playlists: [] }};
  const mockStore = configureStore();
  let store = mockStore(initialState);
  const {container} = render(<Provider store={store}>
    <App />
  </Provider>);

});