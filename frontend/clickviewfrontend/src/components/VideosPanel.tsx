import { ImageList, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Video } from '../types';
import styled from '@emotion/styled';

import VideoCard from '../components/VideoCard';

export interface VideoPanelProps {
    videos: Video[];
}



function VideosPanel({videos}:VideoPanelProps) {
    const rowcount:string = Math.ceil((videos.length /3 )).toString();
    const PaperGrid = styled(Paper)`
        display: grid;
        grid-template-rows: repeat(${rowcount}, 500px);
        grid-template-columns: repeat(3, 33%);
        grid-auto-flow: column;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;
    `
    return (<div style={{height: '80vh', overflowY: "scroll"}}>
        <PaperGrid>
            {videos.map(function(video) {
                return <VideoCard video={video} />
            })}
    </PaperGrid>
    </div>)
}

export default VideosPanel;