import React, { useState } from 'react';
import PropTypes from 'prop-types';


const RegisterFormComponent = () => {

    const initialData = {
        user: '',
        name: '',
        email: '',
        password: ''
    }

    const [data, setData] = useState(initialData);

    return (
        <div>
            
        </div>
    );
};


RegisterFormComponent.propTypes = {

};


export default RegisterFormComponent;
