import React, { Component } from 'react';
import AddBabble from './AddBabble';
import BabbleFeed from './BabbleFeed';

import {generateID, timeStamp, addBabble, updateTodo} from '../lib/babbleHelpers';

class App extends Component {
	constructor() {
		super();
		this.state = {
			babbles: [],
			babble: ''
		}

		this.onInputChange = this.onInputChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
		this.toggleLike = this.toggleLike.bind(this)
	}

	onInputChange(e) {
		this.setState({ babble: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()
		const babble = {
			id: generateID(),
			text: this.state.babble,
			timestamp: timeStamp(),
			liked: false
		}
		const updatedFeed = addBabble(this.state.babbles, babble)
		this.setState({ babble: '', babbles: updatedFeed })
	}

	toggleLike(id) {
		const updatedBabble = this.state.babbles.filter((babble) => {
			if (babble.id === id) return babble;
		})
		const updatedFeed = updateTodo(this.state.babbles, updatedBabble)
		this.setState({ babbles: updatedFeed })

		
	}




	render() {
		return (
			<div>
			Hello App!
			<AddBabble onInputChange={this.onInputChange} submitBabble={this.onSubmit} babbleText={this.state.babble}/>
			<BabbleFeed babbles={this.state.babbles} toggleLike={this.toggleLike}/>
			</div>
		);
	}
}

export default App;