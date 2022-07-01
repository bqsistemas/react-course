import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = { // its private field, static and inmutable
            age: 31,
        }
    }

    render() {
        return (
            <div>
                <h1>Hello { this.props.name }!</h1>
                <h2>Your age: { this.state.age }</h2>
                <div>
                    <button onClick={this.birthDay}>
                        Turn years
                    </button>
                </div>
            </div>
        );
    }

    birthDay = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = { // are required
    name: PropTypes.string,
};


export default Greeting;
