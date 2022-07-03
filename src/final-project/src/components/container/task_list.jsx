import React, { useState, useEffect } from 'react';
import createDebug from 'debug'
import PropTypes from 'prop-types';
// class
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.class';
// components
import TaskComponent from '../pure/task';
import TaskFormComponent from '../pure/forms/taskForm';

// initialize
const debug = createDebug('app:components:taskList')

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example 1', 'Default description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Default description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Default description 3', true, LEVELS.BLOCKING)
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
            <div className='col-12'>
                <div className="card">
                    {/* Card header {title} */}
                    <div className="card-header p-3">
                        <h5>Your Tasks:</h5>
                    </div>
                    {/* Card Body {content} */}
                    <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent 
                                            key={index} 
                                            task={task}>
                                        </TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskFormComponent></TaskFormComponent>
                </div>
            </div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
