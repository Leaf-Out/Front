import axios from "axios";

const url = 'http://localhost:8080'

export const get = (apiPath)=>{
    let requestUrl = `${url}${apiPath}`;
    return new Promise((resolve, reject) => {
        axios.get(requestUrl,{ "headers": { "Authorization": "Bearer " + localStorage.getItem("token") } })
        .then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        });
    });
}