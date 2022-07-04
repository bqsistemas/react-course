import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.class';
// class
import { Task } from '../../models/task.class';
// styles
import '../../styles/task.scss'

const TaskComponent = ({ task, _complete, _remove }) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        };
    }, [task]);

    // #region HTML Functions
    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function _htmlTaskLevelBadge() {
        switch(task.level){
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            { task.level }
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            { task.level }
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            { task.level }
                        </span>
                    </h6>
                )
            default:
                break
        }
    }

    function _htmlTaskCompletedIcon() {
        if(task.completed)
            return (<i className='bi-toggle-on task-action' style={ { color: 'green' } } onClick={() => _complete(task)}></i>)
        else 
            return (<i className='bi-toggle-off task-action' style={ { color: 'grey' } } onClick={() => _complete(task)}></i>)
    }
    // #endregion
    
    // #region CSS Functions
    // #endregion

    return (
        <tr className={task.completed ? 'task-completed fw-normal' : 'task-pending fw-normal'}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                { _htmlTaskLevelBadge() }
            </td>
            <td className='align-middle'>
                { _htmlTaskCompletedIcon() }
                <i onClick={() => _remove(task)} className='bi-trash-fill task-action' style={ {color: 'tomato'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    _complete: PropTypes.func.isRequired,
    _remove: PropTypes.func.isRequired
};


export default TaskComponent;
