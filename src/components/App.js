import React, {Component} from 'react';

import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos        : [],
			selectedVideo : null,
		};
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
