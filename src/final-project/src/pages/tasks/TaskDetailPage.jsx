import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate, useParams  } from 'react-router-dom'

const TaskDetailPage = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const task = state
    const { id } = useParams()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>Task Detail Page: { id }</h1>
            <h2>{ task.name }</h2>
            <h3>{ task.description }</h3>
            <div>
                <button onClick={goBack}>Go to Back</button>
            </div>
        </div>
    );
};


TaskDetailPage.propTypes = {

};


export default TaskDetailPage;
