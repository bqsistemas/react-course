import React, { useState } from 'react';
import PropTypes from 'prop-types';


// Login / Logout buttons
const LoginButton = ({ _action }) => {
    return (
        <button onClick={() => _action(true)}>Login</button>
    )
}
const LogoutButton = ({ _action }) => {
    return (
        <button onClick={() => _action(false)}>Logout</button>
    )
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    function updateAccess(){
        setAccess(!access)
    }

    function _htmlOptionalButton(){
        return access ? 
        (<LogoutButton _action={updateAccess}></LogoutButton>) 
        : 
        (<LoginButton  _action={updateAccess}></LoginButton>) 
    }

    // ? (Expression true) && expression => se renderiza la expresión
    // ? (Expression false) && expression => no se renderiza la expresión

    function addMessages(){
        setNMessages(nMessages + 1)
    }

    function _htmlNMessages(text) {
        return (<p>{ text }</p>)
    }

    return (
        <div className='py-4'>
            { _htmlOptionalButton() }
            <div className='py-4'>
                {/* Ternay Operator */}
                {   access && 
                    (
                        <div>
                            {/* N Messages unread */}
                            { nMessages > 0 && nMessages === 1 && _htmlNMessages(`You have ${ nMessages } new message ...`)}
                            { nMessages > 0 && nMessages > 1 && _htmlNMessages(`You have ${ nMessages } new messages ...`)}
                            { nMessages === 0 && _htmlNMessages(`There are no new messages`)}
                            { nMessages > 0 ? 
                                <p>You have new messages</p> 
                                : 
                                <p>There are no new messages</p> 
                            }
                            <button onClick={addMessages}>{ nMessages === 0 ? 'Add your first message' : 'Add new Message' }</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};


OptionalRender.propTypes = {

};


export default OptionalRender;
