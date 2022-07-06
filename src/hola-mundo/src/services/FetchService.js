export const getAllUsers = async() => {
    let response = await fetch('https://reqres.in/api/users')
    // console.log(response)
    // // We return the json
    return response.json()
}

export const getPagedUsers = async(page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    // console.log(response)
    // // We return the json
    return response.json()
}

export const getUserDetails = async(id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    // console.log(response)
    // // We return the json
    return response.json()
}

export const loginUser = async(email, password) => {
    let body = {
        email,
        password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        cache: 'no-cache',
        // mode: 'no-cors',
        // credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })

    return response.json()
}