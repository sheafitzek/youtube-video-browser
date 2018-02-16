import React from 'react';

import styled from 'styled-components';

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

	return (
		<Ul className="col-md-4 list-group">
			{VideoItems}
		</Ul>
	);
};

export default VideoList;

const Ul = styled.ul`@media (max-width: 768px) {padding-left: 0.9375rem;}`;
