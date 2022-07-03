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
                                {/* TODO: iterar sobre una lista de tareas */}
                                <TaskComponent task={defaultTask}></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
