import { useLocation, useNavigate  } from 'react-router-dom'
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup'
// models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/enums.class';
// material UI
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const RegisterFormComponent = () => {
    const navigate = useNavigate()
    const user = new User()
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape({
        userName: Yup.string()
                    .min(6, 'UserName too short')
                    .max(12, 'Username too long')
                    .required('User name is required'),
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin ')
                .required('Role is required'),
        password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
        confirmPassword: Yup.string()
                            .min(8, 'Confirm Password too short')
                            .when('password', {
                                is: value => (value && value.length > 0 ? true : false),
                                then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!')
                            })
                            .required('Confirm password is required')
    })

    async function onSubmitRegisterForm(values) {
        await new Promise((r) => setTimeout(r, 1000))
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={onSubmitRegisterForm}
            >
                {/* We obtain props from Formik */}
                {({  
                    isSubmitting,
                }) => 
                    (
                        <Form className='form-group text-start'>
                            <label htmlFor="userName">User name</label>
                            <Field
                                id="userName"
                                name="userName"
                                placeholder=""
                                className='form-control'
                            />
                            <ErrorMessage name="userName" component="div"/>

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="youremail@email.com"
                                type="email"
                                className='form-control'
                            />
                            <ErrorMessage name="email" component="div"/>

                            <label htmlFor="role">Role</label>
                            <Field 
                                as="select" 
                                id="role"
                                name="role"
                                className='form-control'
                                >
                                <option value={ROLES.USER}>User</option>
                                <option value={ROLES.ADMIN}>Admin</option>
                            </Field>
                            <ErrorMessage name="role" component="div"/>

                            <label htmlFor="password">Password</label>
                            <Field 
                                id="password" 
                                name="password" 
                                placeholder="Password" 
                                type="password"
                                className='form-control'
                            />
                            <ErrorMessage name="password" component="div"/>
                            
                            <label htmlFor="password">Confirm password</label>
                            <Field 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                placeholder="Confirm password" 
                                type="password"
                                className='form-control'
                            />
                            <ErrorMessage name="confirmPassword" component="div"/>


                            { !isSubmitting &&
                                (
                                    <Button type='submit' variant="contained" className='my-4'>Register Account</Button>
                                )
                            }
                            <Link className='mx-2' component="button" variant="body2" onClick={() => navigate('/signin')}>Iniciar sesión</Link>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};


RegisterFormComponent.propTypes = {

};


export default RegisterFormComponent;
