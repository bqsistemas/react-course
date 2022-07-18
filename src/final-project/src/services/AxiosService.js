import axios from '../util/config/axios.config'

export const loginUser = async({ email, password }) => {
    return axios(process.env.REACT_APP_REQ_RES).post('/api/login', {
            email,
            password
        },
        {
            validateStatus: (status) => {
                return status < 500 // Resole only s,tatus code is less than 500
            }
        }
    )
}

export const allUsers = async() => {
    return axios(process.env.REACT_APP_REQ_RES).get('/api/users')
}
export const allPagedUsers = async(page) => {
    return axios(process.env.REACT_APP_REQ_RES).get(`/api/users?page=${page}`)
}
export const userById = async(id) => {
    return axios(process.env.REACT_APP_REQ_RES).get(`/api/users/${id}`)
}
export const createUser = async({name, job}) => {
    return axios(process.env.REACT_APP_REQ_RES).post('/api/users', {
        name,
        job
    })
}
export const updateUser = async({name, job, id}) => {
    return axios(process.env.REACT_APP_REQ_RES).put(`/api/users/${id}`, {
        name,
        job
    })
}
// TODO: Delete User
export const deleteUser = async({name, job, id}) => {
    return axios(process.env.REACT_APP_REQ_RES).delete(`/api/users/${id}`)
}