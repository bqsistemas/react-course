import React from 'react';
import PropTypes from 'prop-types';


const AsyncExample = () => {

    async function generateNumber(){
        return 1
    }

    async function generatePromiseNumber(){
        return await Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((err) => alert(`Something went wrong ${err}`))
    }
    function obtainPromiseNumber(){
        generatePromiseNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((err) => alert(`Something went wrong ${err}`))
    }
    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showSessionStorage(){
        saveSessionStorage('name', 'martin')
        .then((response) => alert(`Saved name: ${response}`))
        .catch((err) => alert(`Something went wrong ${err}`))
        .finally(() => console.log('Finally'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve('Hello World')
            }, 2000);
        })
        let message = await promise

        alert(`Message: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((err) => alert(err))
            .finally()
    }

    const urlNotFound = async() => {
        try {
            let response = await fetch('https://invalidURL.com')
            alert(JSON.stringify(response))
        } catch(err) {
            alert(err)
        }
    }

    const multiplePromise = async() => {
        let results = await Promise.all(
                [
                    fetch('https://reqres.in/api/users'),
                    fetch('https://reqres.in/api/users?page=2'),
                ]
            ).catch((err) => alert(`Something went wrong with your URL´s: ${err}`))
    }

    return (
        <div className='my-4'>
            <h1>Async examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showSessionStorage}>Save session storage</button>
            <button onClick={obtainMessage}>Obtain Message in 2 seconds</button>
            <button onClick={consumeError}>Consume Error</button>
            <button onClick={urlNotFound}>Catch URL Not Found</button>
            <button onClick={multiplePromise}>Call multiple promise</button>
        </div>
    );
};


AsyncExample.propTypes = {

};


export default AsyncExample;
