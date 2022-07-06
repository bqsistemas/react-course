import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRandomUser } from '../../services/AxiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        obtainUser()
    }, [])
    

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                console.log(`Response user:`, response)
                if(response.status === 200){
                    setUser(response.data.results[0])
                }
            })
            .catch((err) => {
                console.log(`Error: ${err}`)
            })
            .finally(() => {
                console.log('Finally obtain user')
            })
    }

    return (
        <div>
            <h3>Obtain User with Axios</h3>
            <button onClick={obtainUser}>Generate new User</button>
            { user && 
                <div>
                    <h4>User data:</h4>
                    <p>Name: { user.name.title } { user.name.first } { user.name.last }</p>
                    <p>Email: { user.email }</p>
                    <p>Gender: { user.gender }</p>
                    <div>
                        <img alt='avatar' src={ user.picture?.thumbnail } style={ { width: '50px', height: '50px' } }/>
                    </div>
                </div>
            }
        </div>
    );
};


AxiosExample.propTypes = {

};


export default AxiosExample;
