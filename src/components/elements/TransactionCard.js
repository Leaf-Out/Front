import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Typography, Grid, CardContent, TextField, Paper, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import PaymentIcon from '@material-ui/icons/Payment';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%",
        width: "100%"
    },
    dialogTitle: {
        backgroundColor: theme.palette.primary.main,
    },
    productName: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        textAlign: "center"
    },
    refunded: {
        backgroundColor: theme.palette.secondary.main,
        textAlign: "center"
    },
    text: {
        textAlign: "center",
        marginTop: "2.5%"
    },
    icon: {
        backgroundColor: theme.palette.primary.light,
    },
    ShoppingCart: {
        textAlign: "center",
        marginTop: "7px"
    },
}));

export default function TransactionCard(props) {
    const classes = useStyles();
    const [message, setMessage] = useState(false)
    const [reason, setReason] = useState("")
    const [error, setError] = useState(false)
    const [succes, setSuccess] = useState(false)
    const [productName, setProductName] = useState()
    const history = useHistory()
    const refund = (event) => {
    }
    //const avialable = data.data.responseCode === "SUCCESSFUL_TRANSACTION" ? true : false
    return (
        <Grid item xs={3}>
            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => { setError(false) }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="error">The transaction could not be refunded</Alert>
            </Snackbar>
            <Snackbar
                open={succes}
                autoHideDuration={6000}
                onClose={() => { setSuccess(false) }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success">Transaction refunded</Alert>
            </Snackbar>
            <Dialog
                open={message}
                onClose={() => { setMessage(false); history.go(0) }}
                className={classes.dialog}
            >
                <DialogTitle className={classes.dialogTitle}>Why do you want to refund the transaction?</DialogTitle>
                <DialogContent className={classes.text}>
                    <TextField label="reason" variant="outlined" onChange={(event) => { setReason(event.target.value) }}></TextField> <br />
                    <IconButton onClick={refund}>
                        <RestorePageIcon />
                    </IconButton>
                    <Typography variant="subtitle2">refund</Typography>
                </DialogContent>
            </Dialog>
            <Paper>
                <Typography>{props.transaction.ticket.name}</Typography>
                <Divider />
                <Typography>{props.transaction.state}</Typography>
                <Typography>{props.transaction.paymentMethod}</Typography>
                <Typography>{props.transaction.ticket.expirationDate}</Typography>
                <Typography>{props.transaction.ticket.population}</Typography>
                <Typography>{props.transaction.ticket.totalPrice}</Typography>
            </Paper>
        </Grid>

    );
}
