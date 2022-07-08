/**
 * Component to content form to login auth
 */

import { useLocation, useNavigate  } from 'react-router-dom'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// material UI
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

// services
import { loginUser } from '../../../services/AxiosService.js'

const loginSchema = Yup.object().shape({
    email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
    password: Yup.string()
                .required('Password is required')
})

const LoginFormComponent = () => {
    const navigate = useNavigate()

    const initialCredentials = {
        email: '',
        password: ''
    }

    async function onSubmitLoginForm(values){
        alert(JSON.stringify(values, null, 2));

        await loginUser(values)
            .then((response) => {
                console.log(response)
                if(response.data.token) {
                    localStorage.setItem('credentials', values.email)
                    sessionStorage.setItem('token', response.data.token)
                    navigate('/', { replace: true })
                }else{
                    sessionStorage.removeItem('token')
                    localStorage.removeItem('credentials')
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {})
    }

    return (
        <div>
            <h4>Login Form</h4>
            <Formik
                // Initial values that the form will take
                initialValues={initialCredentials}
                // Yup Validation Schema
                validationSchema={loginSchema}
                // OnSubmit Event
                onSubmit={onSubmitLoginForm}
            >
                {/* We obtain props from Formik */}
                {({ 
                    errors, 
                    touched, 
                    isSubmitting,
                    handleChange,
                    handleBlur
                }) => 
                    (
                        <Form className='form-group text-start'>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="youremail@email.com"
                                type="email"
                                className='form-control'
                            />
                            {/* Email errors */}
                            <ErrorMessage name="email" component="div"/>
                            {/* {
                                errors.email && touched.email &&
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            } */}

                            <label htmlFor="password">Password</label>
                            <Field 
                                id="password" 
                                name="password" 
                                placeholder="" 
                                type="password"
                                className='form-control'
                            />
                            {/* Password errors */}
                            <ErrorMessage name="password" component="div"/>
                            {/* {
                                errors.password && touched.password &&
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            } */}
                            { !isSubmitting &&
                                (
                                    <Button type='submit' variant="contained" className='my-4'>Login</Button>
                                )
                            }
                            <Link className='mx-2' component="button" variant="body2" onClick={() => navigate('/register')}>Registrarme</Link>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormComponent;
