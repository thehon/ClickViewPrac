import { Paper, Box, Tabs, Tab} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectAllVideos, getAllVideos, selectAllPlaylists, getAllPlaylists } from '../reducers/APIReducer';
import { PlayList, Video } from '../types';
import VideosPanel from './VideosPanel';
import PlaylistsPanel from './PlaylistsPanel';

function HomePage() {
    const dispatch = useAppDispatch();
    const [ selectedTab, setSelectedTab ] = useState(0);

    let videos:Video[] = useAppSelector(selectAllVideos);
    let playlists: PlayList[] = useAppSelector(selectAllPlaylists);

    useEffect(() => {
        dispatch(getAllVideos());
        dispatch(getAllPlaylists());
    }, []);
    

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };
    return (<Box>
        <Paper style={{display: "flex", marginBottom: "1rem"}}>
            <img src="https://stubborn.fun/images/image-s-third-2.png" height="250px" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "1rem"}}>
                <h1 style={{marginBottom: "0"}}>Playlist Builder</h1>
                <h4 style={{marginTop: "0.5rem"}}>Build an education pathway</h4>
            </div>
        </Paper>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: "1rem" , display: "flex"}}>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Videos" />
                <Tab label="Playlists" />
            </Tabs>
        </Box>
        {selectedTab === 0 ? <VideosPanel videos={videos}/> : <PlaylistsPanel playlists={playlists} />}
    </Box>)
}

export default HomePage;