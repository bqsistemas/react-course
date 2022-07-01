import React from 'react';
import ContactComponent from '../pure/contact';
// class
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {
    const contactDefault = new Contact('Jhon', 'Barrantes', 'bqsistemas@gmail.com', false)
    return (
        <div>
            <ContactComponent contact={contactDefault}></ContactComponent>
        </div>
    );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
