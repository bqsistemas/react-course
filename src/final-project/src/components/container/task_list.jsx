import React, { useState, useEffect } from 'react';
import createDebug from 'debug'
import PropTypes from 'prop-types';
// class
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.class';
import TaskComponent from '../pure/task';

// initialize
const debug = createDebug('app:components:taskList')

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [])
    

    const changeCompleted = (id) => {
        debug('TODO: Change task´s state')
    }

    return (
        <div>
            <h1>
                Your Tasks: 
            </h1>
            {/* TODO: Apply fot/map to render a task list */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
