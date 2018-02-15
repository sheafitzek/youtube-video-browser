import React from 'react';

import styled from 'styled-components';

export const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;

	return (
		<Li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div video-list media>
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{title}</div>
				</div>
			</div>
		</Li>
	);
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
