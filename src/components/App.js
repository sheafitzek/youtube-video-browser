import React, {Component} from 'react';

import _ from 'lodash';

import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

import ytSearch from 'youtube-api-search';

const API_KEY = `AIzaSyAn3XUhE_fhPXxymsG-rnJo-7FpRiEBx1g`;

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos        : [],
			selectedVideo : null,
		};

		const storedTerm = localStorage.getItem(`youtube-video-browser-term`);

		this.videoSearch(storedTerm ? storedTerm : `texas`);
	}

	videoSearch(term) {
		ytSearch({key: API_KEY, term}, (videos) => {
			this.setState({
				videos,
				selectedVideo : videos[0],
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
			localStorage.setItem(`youtube-video-browser-term`, term);
		}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={(selectedVideo) =>
						this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
