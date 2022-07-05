import React from 'react';
import PropTypes from 'prop-types';
// components
import TaskListComponent from '../../components/container/TaskList';


const TasksPage = () => {
    return (
        <div>
            {/* List tasks component */}
            <TaskListComponent></TaskListComponent>
        </div>
    );
};


TasksPage.propTypes = {

};


export default TasksPage;
