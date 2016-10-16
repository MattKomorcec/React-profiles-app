import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends React.Component {
	render() {
		return (
			<Jumbotron className="test">
				<h1>React profiles app</h1>
			</Jumbotron>
		);
	}
}

export default Header;