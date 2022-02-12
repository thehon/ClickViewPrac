import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
//import { RootState, AppThunk } from '../../app/store';
import api from '../app/api';
import { RootState } from '../app/store';
import { Video, PlayList } from '../types';

export interface APIState {
    videos: Video[],
    playlists: PlayList[],
    video?: {},
    PlayList?: {},
}

export interface GetVideosAction {
    type: string,
    payload: {videos: Video[]}
}

export interface GetVideosPayload {
    videos: Video[];
}

export interface GetVideoAction {
    type: string,
    payload: {video: Video}
}


export interface GetPlaylistsAction {
    type: string,
    payload: {playlists: PlayList[]}
}

export interface GetPlayListAction {
    type: string,
    payload: {playlist: PlayList}
}

export interface GetPlaylistsPayload {
    playlists: PlayList[];
}

const initialState: APIState = {
    videos: [],
    playlists: [],
}

const fetchSingleVideo = (id?:string) => {
    return new Promise<{data: GetVideoAction}>((resolve) => {
        api.get("/video/"+id).then(function(payload) {
            resolve(payload);
        })
    });
}

export const GetSingleVideo = createAsyncThunk(
    'api/getsinglevideo',
    async (id?:string) => {
        const repsonse = await fetchSingleVideo(id);
        return repsonse;
    }
)


const fetchAllVideos = () => {
    return new Promise<{data: GetVideosPayload}>((resolve) => {
        api.get("/videos/").then(function(payload) {
            resolve(payload);
        })
    });
}

export const getAllVideos = createAsyncThunk(
    'api/getallvideos',
    async () => {
        const repsonse = await fetchAllVideos();
        return repsonse;
    }
)

const fetchAllPlaylists = () => {
    return new Promise<{data: GetPlaylistsPayload}>((resolve) => {
        api.get("/playlists/").then(function(payload) {
            resolve(payload);
        })
    });
}

export const getAllPlaylists = createAsyncThunk(
    'api/getallplaylists',
    async () => {
        const repsonse = await fetchAllPlaylists();
        return repsonse;
    }
)


export const apislice = createSlice({
    name: "api",
    initialState,
    reducers: {
        getVideo: (state, action: GetVideoAction) => {
            state.video = action.payload
        },
        getAllVideos: (state, action: GetVideosAction) => {
            state.videos = action.payload.videos;
        },
        getAllPlaylists: (state, action: GetPlaylistsAction) => {
            state.playlists = action.payload.playlists;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(GetSingleVideo.fulfilled, (state,action) =>{
            state.video = action.payload.data.payload.video;
        })
        .addCase(getAllVideos.fulfilled, (state,action) => {
            state.videos = action.payload.data.videos;
        })
        .addCase(getAllPlaylists.fulfilled, (state, action) => {
            state.playlists = action.payload.data.playlists;
        })
        ;
    }
});


export const selectAllVideos = (state:RootState ) => state.api.videos;

export const selectAllPlaylists = (state:RootState ) => state.api.playlists;

export default apislice.reducer;