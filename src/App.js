
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = { number: this.props.startNumber };
    }

    decrement=() => {
        if (this.state.number < 1) {
            alert("Cannot be less than zero");
        } else {
            this.setState({
                number: this.state.number - 1
            });
        }
    };

    render() {
            return (
                <div className="desc">
                    <h3>{this.state.number}</h3>
                    <button onClick={this.decrement}>Click To Decrement</button>
                    
                </div>
            );
        }
}

class App extends Component {
    render() {
        return (
            
            <Decrement startNumber = {10}/>
           
            );
    }
} 

Decrement.propTypes = {
    startNumber: PropTypes.number.isRequired
}
export default App;
