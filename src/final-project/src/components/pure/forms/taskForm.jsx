import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// class
import { LEVELS } from '../../../models/enums.class';
import { Task } from '../../../models/task.class';


const TaskFormComponent = ({ _add, length }) => {

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape({
        name: Yup.string()
                .required('Name is required'),
        description: Yup.string()
                        .required('Description is required'),
        level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a priority: Normal / Urgent / Blocking ')
                .required('Priority is required'),
    }) 

    async function addTask(values){
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
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
    return (
        <div>
            <h3>Task form</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={addTask}
            >
                {({  
                    isSubmitting,
                }) => 
                    (
                        <Form className='form-group text-start'>
                            <label htmlFor="name">Name</label>
                            <Field
                                id="name"
                                name="name"
                                placeholder=""
                                className='form-control'
                            />
                            <ErrorMessage name="name" component="div"/>

                            <label htmlFor="name">Description</label>
                            <Field
                                id="description"
                                name="description"
                                placeholder=""
                                className='form-control'
                            />
                            <ErrorMessage name="description" component="div"/>

                            <label htmlFor="role">Role</label>
                            <Field 
                                as="select" 
                                id="level"
                                name="level"
                                className='form-control'
                                >
                                <option style={normalStyle} value={LEVELS.NORMAL}>Normal</option>
                                <option style={urgentStyle} value={LEVELS.URGENT}>Urgent</option>
                                <option style={blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
                            </Field>
                            <ErrorMessage name="role" component="div"/>

                            { !isSubmitting &&
                                (
                                    <button type="submit" className='btn btn-success my-4'>
                                        { length > 0 ? 'Add new task' : 'Create your first task' }
                                    </button>
                                )
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};


TaskFormComponent.propTypes = {
    _add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};


export default TaskFormComponent;
