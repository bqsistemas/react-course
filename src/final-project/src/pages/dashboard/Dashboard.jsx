import { useLocation, useNavigate  } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types';

// material UI
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';

const Dashboard = () => {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/signin', { replace: true })
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>logout</Button>
            <Copyright></Copyright>
        </div>
    );
};


Dashboard.propTypes = {

};


export default Dashboard;
