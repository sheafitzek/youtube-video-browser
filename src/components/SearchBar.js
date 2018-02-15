import React, {Component} from 'react';

import styled from 'styled-components';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ``};
	}
	render() {
		return (
			<Wrapper className="search-bar">
				<input
					value={this.state.term}
					onChange={(e) => this.setState({term: e.target.value})}
				/>
			</Wrapper>
		);
	}
}

export default SearchBar;

const Wrapper = styled.div`
	margin: 1.25rem;
	text-align: center;

	input {
		width: 75%;
	}
`;
