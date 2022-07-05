import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate  } from 'react-router-dom'


const HomePage = () => {
    const navigate = useNavigate()
    const goToNavigate = (path) => {
        navigate(path, { replace: false })
    }
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={() => goToNavigate('/profile')}>Go to Profile</button>
            </div>
        </div>
    );
};


HomePage.propTypes = {

};


export default HomePage;
