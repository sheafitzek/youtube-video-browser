import React, {Component} from 'react';

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

		ytSearch({key: API_KEY, term: `surfboards`}, (videos) => {
			this.setState({
				videos,
				selectedVideo : videos[0],
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
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
