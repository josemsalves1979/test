import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props)
        this.state ={
            counter:props.initial
        }
        this.increment=this.increment.bind(this)
    }
    decrement(){
        this.setState({counter : this.state.counter - 1})
    }
    increment(){
        this.setState({counter : this.state.counter + 1})
    }
    render(){
        const textStyle ={
            color:this.props.color
        }
        return(
            <div>
                <button onClick={this.decrement.bind(this) }>-</button>
                <p style={textStyle}> counter : {this.state.counter}</p>
                <button onClick={this.increment }>+</button>
            </div>
        );
    }
}

export default Counter;