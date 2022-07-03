import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// class
import { Task } from '../../models/task.class';
// styles
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        };
    }, [task]);

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por un badge */}
                <span>{ task.level }</span>
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por íconos */}
                <span>{ task.level }</span>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
