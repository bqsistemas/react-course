import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
// class
import { LEVELS } from '../../../models/levels.class';
import { Task } from '../../../models/task.class';


const TaskFormComponent = ({ _add, length }) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e){
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        _add(newTask)
    }

    const normalStyle = {
        color: 'blue', 
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'orange', 
        fontWeight: 'bold'
    }
    const blockingStyle = {
        color: 'tomato', 
        fontWeight: 'bold'
    }

    /* function _cssSelectPriority() {
        switch(levelRef.current.value){
            case LEVELS.NORMAL:
                return normalStyle
            case LEVELS.URGEN:
                return urgentStyle
            case LEVELS.BLOCKING:
                return blockingStyle
            default:
                break
        }
    } */ 
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name'/>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-select form-control-lg'>
                    <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    { length > 0 ? 'Add new task' : 'Create your first task' }
                </button>
            </div>
        </form>
    );
};


TaskFormComponent.propTypes = {
    _add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};


export default TaskFormComponent;
