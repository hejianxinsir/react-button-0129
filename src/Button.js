import React from 'react';
import './Button.css';

export default class Button extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			active: false,
			deltaX: 0,
			deltaY: 0
		}
		this.myRef = React.createRef();
	}

	x(event){
		let {clientX, clientY} = event;
		let {x, y} = this.myRef.current.getBoundingClientRect();
		let deltaX = clientX -x -7.5
		let deltaY = clientY -y -7.5

		this.setState({
			active: true,
			deltaX: deltaX,
			deltaY: deltaY
		})
	}

	y(){
		this.setState({
			active: false
		})
	}

	render(){
		return(
			<button className="btn" onClick={this.x.bind(this)} ref={this.myRef}>
				{this.state.active === true ?
					<span className="dot" style={{left: this.state.deltaX, top: this.state.deltaY}}
						onAnimationEnd={this.y.bind(this)}></span> : ''}
				{this.props.value}
			</button>
		)
	}
}
