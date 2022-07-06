import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// services
import { getAllUsers, getPagedUsers, getUserDetails } from '../../services/FetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([])
    const [pages, setPages] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalPerPage, setTotalPerPage] = useState(0)
    const [selectedUser, setSelectedUser] = useState(null)

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
                <h3>User Details</h3>
                { selectedUser && (
                    <div>
                        <p>Name: { selectedUser.first_name } { selectedUser.last_name } </p>
                        <p>Email: { selectedUser.email }</p>
                        <div>
                            <img alt='avatar' src={ selectedUser.avatar } style={ { width: '50px', height: '50px' } }/>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};


FetchExample.propTypes = {

};


export default FetchExample;
