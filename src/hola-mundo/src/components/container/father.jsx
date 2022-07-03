import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Child from '../pure/child'

const Father = () => {

    const [name, setName] = useState('');

    function _fromChildFunction(text){
        alert(`Message received: ${text}`)
    }

    function _updateName(name){
        setName(name)
    }

    return (
        <div style={{ background: 'tomato', padding: '20px' }}>
            <Child 
                name={name} 
                _send={_fromChildFunction}
                _update={_updateName}
            >

            </Child>
        </div>
    );
};


Father.propTypes = {

};


export default Father;
