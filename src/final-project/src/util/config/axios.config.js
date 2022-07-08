import axios from 'axios'

// Default config for AXIOS

const createAxios = (baseURL) => {
    return axios.create(
        {
            baseURL,
            responseType: 'json',
            timeout: 6000,
        }
    )
}

export default createAxios