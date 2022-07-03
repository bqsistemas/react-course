import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Definiendo estilos en constantes
// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'cyan',
    fontWeight: 'bold'
}

// ? Estilo para usuario NO logueado
const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false)

    const greetingUser = () => (<p>Hola, {props.name}</p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            { 
                logged ? greetingUser() : pleaseLogin()
            }
            <button onClick={ () => {
                setLogged(!logged)
            } }>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
};


GreetingStyled.propTypes = {

};


export default GreetingStyled;
