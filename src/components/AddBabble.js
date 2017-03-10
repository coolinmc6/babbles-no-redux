import React, { Component } from 'react';

	// <BabbleFeed babbles={this.props.babbles} 
	// 						likes={this.props.likes}
	// 						likeToggle={this.onLikeToggle}
	// 						likeToggleBabble={this.onLikeToggleBabble}/>

class AddBabble extends Component {

	render() {
		return (
			
			<div className="col-xs-12 col-sm-4 babble-parent">
				<form onSubmit={this.props.submitBabble}>
					<textarea cols="40" rows="4" 
							type="text" 
							onChange={this.props.onInputChange}
							value={this.props.babbleText}/>
					<br />
					<button 
						type="submit" 
						className="btn btn-primary">
						babble
					</button>
				</form>
			
			</div>
		);
	}
}

export default AddBabble;