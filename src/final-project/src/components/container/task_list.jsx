import React, { useState, useEffect } from 'react';
import createDebug from 'debug'
import PropTypes from 'prop-types';
// class
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/enums.class';
// components
import TaskComponent from '../pure/task';
import TaskFormComponent from '../pure/forms/taskForm';

// initialize
const debug = createDebug('app:components:taskList')

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example 1', 'Default description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Default description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Default description 3', false, LEVELS.BLOCKING)
    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks])

    function _completeTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !task.completed
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks)
    }

    function _removeTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function _addTask(task) {
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }
    function _htmlTasksTable() {
        return (
            tasks.length > 0 ?
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
                                task={task}
                                _complete={_completeTask}
                                _remove={_removeTask}
                            >
                            </TaskComponent>
                        )
                    })}
                </tbody>
            </table>
            :
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Pelase, create one</h4>
            </div>
            
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontWeight: 'bold'  
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
                        {/* TODO: Add Loading spinner */}
                        {  !loading ?
                            _htmlTasksTable() 
                            :
                            <div style={loadingStyle}>
                                <h3>Loading tasks...</h3>
                            </div>
                        }
                    </div>
                </div>
                <TaskFormComponent
                    _add={_addTask}
                    length={tasks.length}
                >
                </TaskFormComponent>
            </div>
        </div>
    );
};


TaskListComponent.propTypes = {

};


export default TaskListComponent;
