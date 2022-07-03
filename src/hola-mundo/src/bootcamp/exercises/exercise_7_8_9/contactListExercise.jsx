import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactExercise } from './contactExercise.class';
import ContactFormExerciseComponent from './contactFormExercise';
import ContactExerciseComponent from './contactExercise';


const ContactListExerciseComponent = () => {
    const defaultContact1 = new ContactExercise('Contact 1', 'Last name 1', 'contact1@email.com', false)
    const defaultContact2 = new ContactExercise('Contact 2', 'Last name 2', 'contact2@email.com', false)
    const defaultContact3 = new ContactExercise('Contact 3', 'Last name 3', 'contact3@email.com', false)

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3])

    function _connectedContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].connected = !contact.connected
        // We update the state of the component with the new list of contacts and it will update the
        // Iteration of the contacts in order to show the contact updated
        console.log(tempContacts[index])
        setContacts(tempContacts)
    }

    function _removeContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    function _addContact(contact) {
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    return (
        <div>
            <div className='col-12'>
                <div className="card">
                    {/* Card header {title} */}
                    <div className="card-header p-3">
                        <h5>Your Contacts:</h5>
                    </div>
                    {/* Card Body {content} */}
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactExerciseComponent 
                                            key={index} 
                                            contact={contact}
                                            _connected={_connectedContact}
                                            _remove={_removeContact}
                                        >
                                        </ContactExerciseComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ContactFormExerciseComponent
                    _add={_addContact}
                >
                </ContactFormExerciseComponent>
            </div>
        </div>
    );
};


ContactListExerciseComponent.propTypes = {

};


export default ContactListExerciseComponent;
