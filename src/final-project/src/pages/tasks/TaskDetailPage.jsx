import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams  } from 'react-router-dom'

const TaskDetailPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Task Detail Page: { id }</h1>
            <div>
                <button onClick={goBack}>Go to Back</button>
            </div>
        </div>
    );
};


TaskDetailPage.propTypes = {

};


export default TaskDetailPage;
