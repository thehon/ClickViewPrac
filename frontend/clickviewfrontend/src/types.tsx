export interface Video {
    videoID: string;
    name: string;
    duration: number;
    description: string;
    dateCreated: string;
    thumbnail: string;
}

export interface PlayList {
    playlistID: string;
    name: string;
    description: string;
    videos: Video[];
    dateCreated: string;   
}