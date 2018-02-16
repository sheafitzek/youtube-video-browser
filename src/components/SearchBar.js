import React, {Component} from 'react';

import styled from 'styled-components';

import logo from '../assets/images/logo.png';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ``};
	}
	render() {
		return (
			<Wrapper className="search-bar">
				<i className="fa fa-search" />
				<input
					placeholder="Search YouTube"
					value={this.state.term}
					onChange={(e) => this.setState({term: e.target.value})}
				/>
				<img src={logo} alt="logo" />
			</Wrapper>
		);
	}
}

export default SearchBar;

const Wrapper = styled.div`
	margin: 1.25rem;
	text-align: center;

	i {
		height: 2.5rem;
		color: #df4309;
		margin-right: 0.5rem;
	}

	input {
		width: 75%;

		&:before {
			content: "\f072";
			font-family: "FontAwesome";
			font-size: 10rem;
			padding: 6px;
		}
	}

	img {
		height: 1.5rem;
		margin-left: 0.5rem;
		margin-bottom: 0.25rem;
	}
`;
