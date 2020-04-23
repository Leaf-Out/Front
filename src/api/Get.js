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

export const pay = ({cardNumber,cvv,expirationDate,cardholder,paymentMethod,requestProducts})=>{
    let url = `http://localhost:8080/payments/pay/id/${JSON.parse(localStorage.getItem("token")).user.id}`
    return new Promise((resolve, reject) =>{
        axios.post(url,
            {
                "cardNumber": cardNumber,
                "securityCode": cvv,
                "expirationDate": expirationDate,
                "name": cardholder,
                "paymentMethod": paymentMethod,
                "items": requestProducts
            },
            { "headers": { "Authorization": "Bearer " + localStorage.getItem("bearer") } })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    })
}
