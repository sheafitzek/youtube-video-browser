import React from 'react';

export const VideoListItem = ({video, onVideoSelect}) => {
	return (
		<div className="list-group-item" onClick={() => onVideoSelect(video)}>
		</div>
	);
};

export default VideoListItem;
