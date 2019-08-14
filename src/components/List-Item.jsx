import React from 'react';

const ListItem = ({video,onUserSelected}) => {

    //The videos thumbnails
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
    <li onClick={() => onUserSelected(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} alt="" />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default ListItem;