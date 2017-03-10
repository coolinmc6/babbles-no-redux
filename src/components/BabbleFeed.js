import React, { Component } from 'react';


class BabbleFeed extends Component {

	render() {
		return (
			<div>
				{this.props.babbles.map((babble) => {
					return (
						<div key={babble.id}>
							{babble.text}
							<button onClick={(e) => this.props.toggleLike(babble.id)}>Liked</button>
						</div>
					)
				})}
			
			</div>
		);
	}
}

export default BabbleFeed;