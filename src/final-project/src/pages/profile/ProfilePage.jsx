import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate  } from 'react-router-dom'


const ProfilePage = () => {
  const navigate = useNavigate()
  const goToNavigate = (path) => {
      navigate(path, { replace: false })
  }
  const goBack = () => {
      navigate(-1)
  }
  return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <button onClick={() => goToNavigate('/tasks')}>Go to Tasks</button>
                <button onClick={goBack}>Go to Back</button>
            </div>
        </div>
    );
};


ProfilePage.propTypes = {

};


export default ProfilePage;
