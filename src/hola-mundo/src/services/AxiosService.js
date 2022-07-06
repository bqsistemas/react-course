import APIRequest from '../utils/config/axios.config'

export const getRandomUser = async() => {
    return APIRequest(process.env.REACT_APP_RANDOM_USER_API).get('/', {
        validateStatus: (status) => {
            return status < 500 // Resole only status code is less than 500
        }
    })
}

export const getRandomJoke = async() => {
    return APIRequest(process.env.REACT_APP_CHUCK_NORRIS_API).get('/jokes/random', {
        validateStatus: (status) => {
            return status < 500 // Resole only status code is less than 500
        }
    })
}