import APIRequest from '../utils/config/axios.config'

export const getRandomUser = async() => {
    return APIRequest.get('/', {
        validateStatus: (status) => {
            return status < 500 // Resole only status code is less than 500
        }
    })
}