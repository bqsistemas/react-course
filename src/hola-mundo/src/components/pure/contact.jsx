import React, { useState } from 'react';
import PropTypes from 'prop-types';
// class
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    const [state, setState] = useState(contact.connected);

    const changeConnected = () => {
        setState(!state)
    }

    return (
        <div>
            <h1>Contact name: { contact.name }</h1>
            <h1>Contact last name: { contact.lastName }</h1>
            <h2>Contact email: { contact.email }</h2>
            <h3>Connected: { state ? 'Contact on line' : 'Contact not available' }</h3>
            <button onClick={ changeConnected }>
                Change state
            </button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
