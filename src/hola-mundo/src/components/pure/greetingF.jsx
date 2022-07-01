import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //short introduction to useState
    // const [variable, update method] = useState(initial value)
    const [age, setAge] = useState(31);

    const birthDay = () => {
        // update state
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hello { props.name } from functional component!</h1>
            <h2>Your age: { age }</h2>
            <div>
                <button onClick={birthDay}>
                    Turn years
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
