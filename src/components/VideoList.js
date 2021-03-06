import React from 'react';
import PropTypes from 'prop-types-defined';

import styled from 'styled-components';

import VideoListItem from './VideoListItem';

export const VideoList = ({videos, onVideoSelect, selectedVideo}) => {
	const VideoItems = videos.map((video) => {
		return (
			<VideoListItem
				key={video.etag}
				video={video}
				onVideoSelect={onVideoSelect}
				selectedVideo={selectedVideo}
			/>
		);
	});

	return <Ul className="col-md-4 list-group">{VideoItems}</Ul>;
};

VideoList.propTypes = {
	onVideoSelect : PropTypes.func.isRequired,
	videos        : PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedVideo : PropTypes.object.isDefined,
};

export default VideoList;

const Ul = styled.ul`@media (max-width: 768px) {padding-left: 0.9375rem;}`;
