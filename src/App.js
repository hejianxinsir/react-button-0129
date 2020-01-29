import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

export default class App extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div className="wrapper">
				<Button value="点我呀" />
				<Button value="速度" />
				<Button value="快点!" />
			</div>
		)
	}
}
