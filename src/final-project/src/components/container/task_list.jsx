import React from 'react';
import createDebug from 'debug'
import PropTypes from 'prop-types';
// class
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.class';
import TaskComponent from '../pure/task';

// initialize
const debug = createDebug('app:components:taskList')

const TaskListComponent = () => {
    debug('hello world')
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    const changeState = (id) => {
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
