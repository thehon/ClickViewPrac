import React, { useEffect, useState } from 'react';
import { PlayList } from '../types';
import { Table, TableContainer, Paper, TableCell, TableRow, TableHead, TableBody, ImageListItem, ImageListItemBar} from '@mui/material';

export interface PlaylistsPanelProps {
    playlists: PlayList[];
}

function PlaylistsPanel({playlists}:PlaylistsPanelProps) {
    
    return <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Videos</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {playlists.map(function(playlist) {
                    let createdAt:Date = new Date(playlist.dateCreated);
                    let datestring:string = createdAt.toLocaleDateString('en-US', { day: "numeric", month: 'long'});

                    return <TableRow className="playlistrow">
                        <TableCell>
                            {playlist.name}
                        </TableCell>
                        <TableCell>
                            {playlist.description}
                        </TableCell>
                        <TableCell>
                            {datestring}
                        </TableCell>
                        <TableCell>
                            <div style={{display: "flex", overflow: "scroll", maxWidth: "600px"}}>
                                {playlist.videos?.map(function(video) {
                                    return <ImageListItem style={{ width: "unset", marginRight: "0.5rem"}}>
                                            <img src={video.thumbnail} style={{height: '150px', width: "unset"}} />
                                            <ImageListItemBar title={video.name} />
                                        </ImageListItem>
                                })}
                            </div>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}

export default PlaylistsPanel;