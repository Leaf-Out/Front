import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import Header from '../elements/Header'
import {
    Typography, Grid, Paper, Divider, TextField,
    Select, MenuItem, FormControl, FormHelperText, Button
}
    from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        height: '100vh',
        padding: "2.5%"
    },
    card: {
        textAlign: "center",
        marginTop: "1%"
    },
    paper: {
        padding: "2.5%"
    },
    price: {
        marginTop: "1%"
    },
    text: {
        padding: "1%"
    },
    button: {
        marginRight: "1%"
    },
}));

export default function Checkout() {
    const classes = useStyles();
    let checkoutObject = JSON.parse(localStorage.getItem("checkout"))
    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [cardholder, setCardholder] = useState("")
    const [dni, setDni] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)
    const history = useHistory()
    const handleNewPay = (event) => {
        /*if (cardholder !== "" && dni !== "" && paymentMethod !== "" && cardNumber !== "" && expirationDate !== "") {
            let requestProducts = products.map(function (product) {
                return (
                    {
                        "product": product.product.id,
                        "units": product.units
                    }
                )
            })
            let url = 'http://localhost:8080/payments/pay/id/' + JSON.parse(localStorage.getItem("token")).user.id
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
                    history.push("/transactions")
                })
                .catch(err => {
                    setMessage("The payment could not be done. " + err.response.data.message)
                    setAlert(true)
                })
        } else {
            setMessage("All fields must be filled")
            setAlert(true)
        }*/
    }

    let totalPrice = 0
    /*products.forEach(product => {
        totalPrice = totalPrice + (product.units * product.product.price)
    });*/

    return (
        <div>
            <Header />
            <Snackbar
                open={alert}
                autoHideDuration={6000}
                onClose={() => { setAlert(false) }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="error">{message}</Alert>
            </Snackbar>
            <Grid container>
                <Grid item xs={12} className={classes.card}>
                    <Typography variant="h2" align="center">Checkout</Typography>
                </Grid>
                {
                    /*products.map(function (product) {
                        return (
                            <Grid item xs={12} className={classes.card} container>
                                <Grid item xs={6} className={classes.card}>
                                    <Typography variant="h5" align="left">{product.product.name}</Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.card}>
                                    <Typography variant="h5" align="right">Total ${product.product.price * product.units}</Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.card}>
                                    <Typography variant="h6" color="textSecondary" align="left">{product.product.id}</Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.card}>
                                    <Typography variant="h6" color="textSecondary" align="right">{product.units} Units | ${product.product.price}</Typography>
                                </Grid>
                                <Grid item xs={12} className={classes.card}>
                                    <Divider light={true} variant="" />
                                </Grid>
                            </Grid>
                        )
                    })*/
                }
            </Grid>
            <Typography variant="h4" className={classes.price} align="right">Total $xxxxx</Typography> <br />
            <Grid container justify="center">
                <Grid item xs={12} container>
                    <Grid item xs={12} className={classes.card}>
                        <Typography variant="h4" className={classes.price} align="center">Payment Method</Typography>
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="Card Number" fullWidth={true} onChange={(event) => { setCardNumber(event.target.value) }} />
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <FormControl className={classes.formControl}>
                            <Select autoWidth={true} onChange={(event) => { setPaymentMethod(event.target.value) }}>
                                <MenuItem value="AMEX">American Express</MenuItem>
                                <MenuItem value="MASTERCARD">Mastercard</MenuItem>
                                <MenuItem value="VISA">Visa</MenuItem>
                            </Select>
                            <FormHelperText>Payment Method</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="CVV" fullWidth={true} onChange={(event) => { setCvv(event.target.value) }} />
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="Expiration Date (YYYY/MM)" fullWidth={true} onChange={(event) => { setExpirationDate(event.target.value) }} />
                    </Grid>

                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="Cardholder" fullWidth={true} onChange={(event) => { setCardholder(event.target.value) }} />
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="DNI" fullWidth={true} onChange={(event) => { setDni(event.target.value) }} />
                    </Grid>
                    <Grid item xs={12} align="center" className={classes.text}>
                        <Button variant="contained" color="primary" onClick={handleNewPay}> Pay </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
