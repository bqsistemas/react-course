import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// services
import { getAllUsers, getPagedUsers, getUserDetails, loginUser} from '../../services/FetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([])
    const [pages, setPages] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalPerPage, setTotalPerPage] = useState(0)
    const [selectedUser, setSelectedUser] = useState(null)
    const [token, setToken] = useState('')

    useEffect(()=>{
        /*
        Query logic
        */
        obtainUsers()
    },[]);
    // #region Services
    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log(`All users`, response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setTotalPerPage(response.per_page)
            })
            .catch((err) => {
                alert(`Something error: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:')
                console.table(users)
            })
    }

    const obtainPagedUsers = (page) => {
        getPagedUsers(page)
            .then((response) => {
                console.log(`Paged users`, response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setTotalPerPage(response.per_page)
            })
            .catch((err) => {
                alert(`Something error: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:')
                console.table(users)
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log(`User`, response.data)
                setSelectedUser(response.data)
            })
            .catch((err) => {
                alert(`Something error: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining user:')
                console.table(selectedUser)
            })
    }

    const authUser = () => {
        loginUser('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log(`TOKEN`, response.token)
                setToken(response.token)
                sessionStorage.setItem('token', response.token)
            })
            .catch((err) => {
                alert(`Something error: ${err}`)
            })
            .finally(() => {
                console.log('Ended obtaining login:')
                console.table(selectedUser)
            })
    }
    // #endregion
    return (
        <div>
            <h2>Users:</h2>
            { users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    { user.first_name } { user.last_name }
                </p>
            ))}
            <p style={{fontWeight: 'bold'}}>Showing { totalPerPage } users of { totalUsers }</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                { selectedUser ? (
                        <div>
                            <h3>User Details</h3>
                            <p>Name: { selectedUser.first_name } { selectedUser.last_name } </p>
                            <p>Email: { selectedUser.email }</p>
                            <div>
                                <img alt='avatar' src={ selectedUser.avatar } style={ { width: '50px', height: '50px' } }/>
                            </div>
                        </div>
                    ) :
                    (
                        <h6>Please click on a User to see its details</h6>
                    )
                }
            </div>
            <div>
                <h3>User Login</h3>
                <button onClick={authUser}>Login</button>
            </div>
        </div>
    );
};


FetchExample.propTypes = {

};


export default FetchExample;
