import React from 'react';
import PropTypes from 'prop-types-defined';

import styled from 'styled-components';

export const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const title = video.snippet.title;
	const description = video.snippet.description;
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<Wrapper className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe
					src={url}
					title={title}
					frameBorder="0"
					className="embed-responsive-item"
					allowFullScreen
				/>
			</div>
			<div className="details">
				<div className="video-title">{title}</div>
				<div className="video-description">{description}</div>
			</div>
		</Wrapper>
	);
};

VideoDetail.propTypes = {
	video : PropTypes.object.isDefined,
};

export default VideoDetail;

const Wrapper = styled.div`
	.details {
		margin-top: 10px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;

		.video-title {
			font-size: 1.25rem;
			font-weight: bold;
		}
	}
`;
