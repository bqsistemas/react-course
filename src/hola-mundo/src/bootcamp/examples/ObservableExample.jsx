import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getNumbers } from '../../services/ObservableServices';

const ObservableExample = () => {

    const [number, setNumber] = useState(0)

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable')
        getNumbers.subscribe({
            next(newNumber) {
                console.log(`New number: ${newNumber}`)
                setNumber(newNumber)
            },
            error(err) {
                alert(`Something went wrong: ${err}`)
                console.log('Error in observable')
            },
            complete() {
                alert(`Finished with: ${number}`)
                console.log('Done with the observable')
            }
        })
        console.log('Finished receiving numbers')
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>
                Obtain new Numbers
            </button>
        </div>
    );
};


ObservableExample.propTypes = {

};


export default ObservableExample;
