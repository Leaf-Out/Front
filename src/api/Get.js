import axios from "axios";

const url = 'https://leaf-out.herokuapp.com'
//const url = 'http://localhost:8080'

export const login = (name, pass) => {

    let requestUrl = `${url}/login?username=${name}&password=${pass}`

    return new Promise((resolve, reject) => {
        axios.get(requestUrl, { "headers": { "Authorization": "Bearer " } })
            .then(res => {
                resolve(res);
            }).catch(err => {
                reject(err)
            });
    });
}

export const get = (apiPath) => {
    let requestUrl = `${url}${apiPath}`;
    let bearer = localStorage.getItem("token")

    return new Promise((resolve, reject) => {
        axios.get(requestUrl, { "headers": { "Authorization": `Bearer ${bearer}` } })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const post = (path, data) => {
    let requestUrl = `${url}${path}`;
    return new Promise((resolve, reject) => {
        axios.post(requestUrl,
            data,
            { "headers": { "Authorization": "Bearer " + localStorage.getItem("token") } })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const remove = (path, data) => {
    let requestUrl = `${url}${path}`;
    return new Promise((resolve, reject) => {
        axios.delete(requestUrl,
            {
                "data": data,
                "headers": { "Authorization": "Bearer " + localStorage.getItem("token") }
            })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}

export const update = (path, data) => {
    let requestUrl = `${url}${path}`;
    return new Promise((resolve, reject) => {
        axios.put(requestUrl,
            data,
            { "headers": { "Authorization": "Bearer " + localStorage.getItem("token") } })
            .then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err)
            });
    });
}
