import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate  } from 'react-router-dom'


const ProfilePage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <button onClick={goBack}>Go to Back</button>
            </div>
        </div>
    );
};


ProfilePage.propTypes = {

};


export default ProfilePage;
