import React from 'react';
import PropTypes from 'prop-types';

// Material UI Components
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            { 'Copyright ©' }
            <Link color="inherit" href='https://jhonbarrantes.net' target={'_blank'}>
                Jhon Barrantes
            </Link>
            {' '}
            { new Date().getFullYear() }
        </Typography>
    );
};


Copyright.propTypes = {

};


export default Copyright;
