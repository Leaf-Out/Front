import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios';
import RestorePageIcon from '@material-ui/icons/RestorePage';
import RefundIcon from '@material-ui/icons/KeyboardReturn';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { post } from '../../api/Get';

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%",
        width: "100%"
    },
    dialogTitle: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    productName: {
        textAlign: "center",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
    },
    refundedName: {
        textAlign: "center",
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.dark
    },
    text: {
        textAlign: "center",
        marginTop: "2.5%"
    },
    values: {
        marginTop: "1%"
    },
}));

export default function TransactionCard(props) {
    const classes = useStyles();
    const [message, setMessage] = useState(false)
    const [reason, setReason] = useState("")
    const [error, setError] = useState(false)
    const [succes, setSuccess] = useState(false)
    const history = useHistory()
    const refund = (event) => {
        var refundRequest = {
            "transactionId": props.transaction.id,
            "reason": reason
        }
        post('/payments/refund', refundRequest)
            .then((res) => {
                history.go(0)
            })
            .catch((err) => {
                setError(true)
            });
    }
    const avialable = props.transaction.state === "SUCCESSFUL" ? false : true
    const colorAvialable = props.transaction.state === "SUCCESSFUL" ? classes.productName : classes.refundedName
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
                    <IconButton variant="contained" className={colorAvialable} disabled={avialable} onClick={refund}>
                        <RefundIcon />
                    </IconButton>
                    <Typography variant="subtitle2">refund</Typography>
                </DialogContent>
            </Dialog>
            <Paper >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className={colorAvialable}><b>{props.transaction.ticket.name}</b></Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.values}>
                        <Typography align="center"><b>{props.transaction.state}</b></Typography>
                        <Typography color="secondary" align="center">{props.transaction.id}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">bought {props.transaction.date}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">expires {props.transaction.ticket.expirationDate}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">{props.transaction.paymentMethod}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">{props.transaction.updateDate === null ? "not refunded" : "refunded " + props.transaction.updateDate}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">{props.transaction.ticket.population}</Typography>
                    </Grid>
                    <Grid item xs={6} className={classes.values}>
                        <Typography align="center">{props.transaction.ticket.units} units</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.values}>
                        <Typography align="center">${props.transaction.ticket.totalPrice}</Typography> <br />
                    </Grid>
                    <Grid item xs={12} container justify="flex-end">
                        <IconButton variant="contained" className={colorAvialable} disabled={avialable} onClick={(e) => { setMessage(true) }}>
                            <RefundIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    );
}
