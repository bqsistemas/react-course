import React, { useState } from 'react';
import PropTypes from 'prop-types';
// class
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    // const [contact, setConnected] = useState(contact);

    /* const changeConnected = () => {
        contact.connected = !contact.connected
        // setConnected(contact)
    } */

    return (
        <div>
            <h1>Contact name: { contact.name }</h1>
            <h1>Contact last name: { contact.lastName }</h1>
            <h2>Contact email: { contact.email }</h2>
            <h3>Connected: { contact.connected ? 'Contact on line' : 'Contact not available' }</h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
