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
import ParkCard from '../elements/ParkCard';
import PlanCard from '../elements/PlanCard';
import ActivityCard from '../elements/ActivityCard';
import { post, pay } from '../../api/Get';

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1%"
    },
    payGrid: {
        marginTop: "1.5%",
        marginLeft: "7.5%",
        width: "85%"
    },
    card: {
        marginTop: "1.5%",
    },
    price: {
        marginTop: "1%",
        marginRight: "7.5%"
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
    const [items, setItems] = useState(Object.values(checkoutObject))
    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [cardholder, setCardholder] = useState("")
    const [dni, setDni] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)
    const history = useHistory()
    const gerCard = (type) => {
        if (type === "PARK") {
            return (
                <ParkCard park={{}} />
            )
        } else if (type === "PLAN") {
            return (
                <PlanCard plan={{}} />
            )
        } else {
            return (
                <ActivityCard activity={{}} />
            )
        }
    }
    const handleNewPay = (event) => {
        if (cardholder !== "" && dni !== "" && paymentMethod !== "" && cardNumber !== "" && expirationDate !== "") {
            items.forEach(
                item => {
                    let requestProduct = {
                        "cardNumber": cardNumber,
                        "securityCode": cvv,
                        "expirationDate": expirationDate,
                        "name": cardholder,
                        "dni": dni,
                        "paymentMethod": paymentMethod,
                        "units": item.units,
                        "population": item.item.population,
                        "pay": item.item.type,
                        "payId": item.item.id
                    }
                    console.log(requestProduct)
                    post('/payments/pay/user/' + localStorage.getItem("email"), requestProduct)
                        .then((res) => {
                            history.go("/transactions")
                        })
                        .catch((err) => {
                            console.log(err);

                            setMessage("The payment could not be done. " + err.response.data.message)
                            setAlert(true)
                        });
                }
            );


        } else {
            setMessage("All fields must be filled")
            setAlert(true)
        }
    }

    let totalPrice = 0
    items.forEach(item => {
        totalPrice = totalPrice + (item.units * item.item.price)
    });

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
            <Grid container className={classes.payGrid}>
                <Grid item xs={12}>
                    <Typography align="center" variant="h3" className={classes.title}> Purchase Review </Typography>
                </Grid>
                {
                    items.map(function (item) {
                        return (
                            <Grid item xs={12} container className={classes.card}>
                                <Grid item xs={3} container>
                                    {gerCard(item.item.type)}
                                </Grid>
                                <Grid xs={9} container alignItems="center" justify="flex-end" align="right">
                                    <Grid xs={12}>
                                        <Typography variant="h5">Price: ${item.units * item.item.price}</Typography>
                                        <Typography variant="h5" color="textSecondary">{item.item.population} | {item.units} units</Typography>
                                    </Grid>
                                </Grid>
                                <Grid xs={12}><Divider /></Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Typography variant="h4" className={classes.price} align="right">Total ${totalPrice}</Typography> <br />
            <Typography align="center" variant="h3" className={classes.title}> Checkout </Typography>
            <Grid container justify="center" className={classes.payGrid}>
                <Grid item xs={12} container>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <TextField label="Card Number" fullWidth={true} onChange={(event) => { setCardNumber(event.target.value) }} />
                    </Grid>
                    <Grid item xs={6} align="center" className={classes.text}>
                        <FormControl className={classes.formControl}>
                            <Select autoWidth={true} onChange={(event) => { setPaymentMethod(event.target.value) }}>
                                <MenuItem value="AMEX">American Express</MenuItem>
                                <MenuItem value="MASTERCARD">Mastercard</MenuItem>
                                <MenuItem value="VISA">Visa</MenuItem>
                                <MenuItem value="VISA_DEBIT">Visa Debit Card</MenuItem>
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
                        <Button variant="contained" color="primary" onClick={handleNewPay} fullWidth> Pay </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
