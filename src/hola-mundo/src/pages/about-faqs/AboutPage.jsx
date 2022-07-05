import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate  } from 'react-router-dom'


const AboutPage = () => {

    const location = useLocation()
    const navigate = useNavigate()

    console.log('We are in Route', location.pathname) // '/about' | '/faqs'

    const goToNavigate = (path) => {
        navigate(path, { replace: false })
    }

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={() => goToNavigate('/')}>Go to Home</button>
                <button onClick={goBack}>Go to Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    );
};


AboutPage.propTypes = {

};


export default AboutPage;
