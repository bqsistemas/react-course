import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ContactExercise } from './contactExercise.class';


const ContactFormExerciseComponent = ({ _add }) => {
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')

    function addContact(e){
        e.preventDefault()
        const newContact = new ContactExercise(
            nameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false
        )
        _add(newContact)
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact name'/>
                <input ref={lastNameRef} id='inputLastName' type='text' className='form-control form-control-lg' required placeholder='Contact last name'/>
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='Contact email'/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
};


ContactFormExerciseComponent.propTypes = {
    _add: PropTypes.func.isRequired
};


export default ContactFormExerciseComponent;
