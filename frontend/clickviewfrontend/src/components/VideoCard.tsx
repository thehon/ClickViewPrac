import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, ImageListItem, ImageListItemBar} from '@mui/material';
import { Video } from '../types';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from '@emotion/styled';



export interface VideoCardProps {
    video: Video;
}


function VideoCard({video}:VideoCardProps) {

    const [ expanded, setExpanded ] = useState(false);

    let displayduration:string = new Date(video.duration * 10000).toISOString().substr(11, 6);
    
    return <Card onClick={e => setExpanded(!expanded)} style={{display: "flex", flexDirection: "column", overflow: "scroll"}} className="videoCard">
        <CardMedia 
            image={video.thumbnail}
            alt={video.name}
            component="img"
        />
        <CardContent>
            <b>{video.name}</b>
            <p>{video.description}</p>
        </CardContent>
        <CardActions style={{marginTop: "auto"}}>
            <IconButton>
                <AccessTimeIcon />
            </IconButton>
            <i>{displayduration}</i>
        </CardActions>
        
    </Card>
}

export default VideoCard;
