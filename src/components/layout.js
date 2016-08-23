import React, { Component } from 'react';
import PageNavBar from './page-navbar/container'

export default class App extends Component {
  render() {
    return (
			<div>
      	<PageNavBar />
				{this.props.children}
			</div>
    );
  }
}