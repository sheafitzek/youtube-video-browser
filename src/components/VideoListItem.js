import React from 'react';
import PropTypes from 'prop-types-defined';

import styled from 'styled-components';

export const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<Li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img
						className="media-object"
						src={imageUrl}
						alt="thumbnail"
					/>
				</div>
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</Li>
	);
};

VideoListItem.propTypes = {
	video         : PropTypes.object.isDefined,
	onVideoSelect : PropTypes.func.isRequired,
};

export default VideoListItem;

const Li = styled.li`
	cursor: pointer;

	&:hover {
		background-color: #eee;
	}

	img {
		max-width: 4rem;
	}
`;
