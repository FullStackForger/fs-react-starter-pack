import React, { Component } from 'react';
import PageNavBar from '../layout/container'

export default class Layout extends Component {
	render() {
		return (
			<div>
				<PageNavBar />
				{this.props.children}
			</div>
		);
	}
}