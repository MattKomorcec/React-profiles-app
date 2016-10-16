import React, { Component } from 'react';

class Profile extends Component {
	render() {
		return(
			<div className="profile-holder">
				<h3 className="text-center">{ this.props.username }</h3>
				<p>
					{ this.props.description }
				</p>
				<hr className="profile-sep" />
				<a href="#" className="profile-show-more">Show more</a>
			</div>
		);
	}
}

export default Profile;