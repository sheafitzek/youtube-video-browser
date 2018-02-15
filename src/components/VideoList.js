import React from 'react';

import VideoListItem from './VideoListItem';

export const VideoList = ({videos, onVideoSelect}) => {
	const VideoItems = videos.map((video) => {
		return (
			<VideoListItem
				key={video.etag}
				video={video}
				onVideoSelect={onVideoSelect}
			/>
		);
	});

	return <ul className="col-md-4 list-group">{VideoItems}</ul>;
};

export default VideoList;
