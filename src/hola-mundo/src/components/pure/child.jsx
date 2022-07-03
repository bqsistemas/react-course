import React, { useRef } from 'react';
import PropTypes from 'prop-types';


const Child = ({ name, _send, _update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton () {
        const text = messageRef.current.value
        alert(`Text in Input ${text}`)
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault()
        _update(nameRef.current.value)
    }

    return (
        <div style={{ background: 'cyan', padding: '10px' }}>
            <h1 onMouseOver={() => console.log('On Mouse Over')} style={{ color: 'black' }}>Hola: { name }</h1>
            <button onClick={ () => console.log('Press button 1') }> Button console</button>
            <button onClick={pressButton}> Press Button</button>
            <button onClick={() => pressButtonParams('Hello')}> Press button params</button>
            <input
                ref={messageRef}
                placeholder='Send a text to your father'
                onFocus={() => console.log('Input Focus')}
                onChange={(e) => console.log('Input Change', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
            />
            <button onClick={() => _send(messageRef.current.value)}>
                Send Message
            </button>
            <div className='mt-4'>
                <form onSubmit={submitName}>
                    <input 
                        ref={nameRef}
                        placeholder='New Name'
                    />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
};


Child.propTypes = {

};


export default Child;
