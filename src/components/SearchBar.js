import React, {Component} from 'react';
import PropTypes from 'prop-types-defined';

import styled from 'styled-components';

import logo from '../assets/images/logo.png';

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		const storedTerm = localStorage.getItem(`youtube-video-browser-term`);

		this.state = {term: storedTerm || ``};
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<Wrapper className="search-bar">
				<i className="fa fa-search" />
				<input
					placeholder="Search YouTube"
					value={this.state.term}
					onClick={(e) => e.target.select()}
					onChange={(e) => this.onInputChange(e.target.value)}
				/>
				<img src={logo} alt="logo" />
			</Wrapper>
		);
	}
}

SearchBar.propTypes = {
	onSearchTermChange : PropTypes.func.isRequired,
};

export default SearchBar;

const Wrapper = styled.div`
	margin: 2.5rem;
	text-align: center;

	i {
		font-size: 1.5rem;
		color: #e04006;
		margin-right: 0.5rem;
		vertical-align: top;
	}

	input {
		width: 75%;
		padding-left: 0.25rem;

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
