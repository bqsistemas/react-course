import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactExercise } from './contactExercise.class';
import './contactExercise.scss'

const ContactExerciseComponent = ({ contact, _connected, _remove }) => {

    useEffect(() => {
        console.log('Created contact')
        return () => {
            console.log(`Contact ${contact.name} is going to unmount`)
        };
    }, [contact]);

    // #region HTML Functions
    function _htmlContactConnectedIcon() {
        if(contact.connected)
            return (<i className='bi-toggle-on contact-action' style={ { color: 'green' } } onClick={() => _connected(contact)}></i>)
        else 
            return (<i className='bi-toggle-off contact-action' style={ { color: 'grey' } } onClick={() => _connected(contact)}></i>)
    }
    // #endregion
    
    // #region CSS Functions
    // #endregion

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.lastName }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.email }</span>
            </td>
            <td className='align-middle'>
                { _htmlContactConnectedIcon() }
                <i onClick={() => _remove(contact)} className='bi-trash-fill contact-action' style={ {color: 'tomato'} }></i>
            </td>
        </tr>
    );
};


ContactExerciseComponent.propTypes = {
    contact: PropTypes.instanceOf(ContactExercise).isRequired,
    _connected: PropTypes.func.isRequired,
    _remove: PropTypes.func.isRequired
};


export default ContactExerciseComponent;
