import axios from 'axios'
const URL = "https://djangoprojback.onrender.com/api/token/"
const URL_REGISTER = "https://djangoprojback.onrender.com/api/register/"
const URL_LOGOUT = "https://djangoprojback.onrender.com/api/logout"
// defining URLs for connection to sever
// defining Async actions
export function signin(cred) {

    return new Promise((resolve) =>
        axios.post(URL, cred).then((res) => resolve({ data: res.data }))
    );
}

export function signUp(cred) {
    return new Promise((resolve) =>
        axios.post(URL_REGISTER, cred).then((res) => resolve({ data: res.data }))
    );
}
export function myLogout(token) {
    return new Promise((resolve) =>
    axios(URL_LOGOUT, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }
    }).then((res) => resolve({ data: res.data }))
    );
}