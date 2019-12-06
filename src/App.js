import React, { Component } from 'react';
import './App.css';

let showValue = 0;	//Creo una variable para mostrar

class App extends Component {

	constructor() {
		super();
		this.state = { value: showValue }
	}

	increase() {
		showValue = showValue + 1;
		this.setState({value: showValue});
	}
	render() {
	    return (
	      <div>
	        <span className="value">{this.state.value}</span>
	        <button id="inc" onClick={this.increase.bind(this)}>Incrementa</button>
	      </div>
	    );
	}
}

export default App;
