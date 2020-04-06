import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../elements/Header'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import TransactionCard from '../elements/TransactionCard'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        height: '100vh',
        padding: "2.5%"
    },
}));

export default function Transactions() {
    const classes = useStyles();
    const [transactions, setTransactions] = useState(
        [
            {
                id: "9754c04e-4a55-4d70-b78b-7e8310e4f6b5",
                date: "2020-03-25",
                updateDate: null,
                state: "UNSUCCESSFUL_TRANSACTION",
                paymentMethod: "VISA",
                ticket: {
                    id: "fd2b2dcc-3c23-4e26-8fb7-35a0a670d1a8",
                    date: "2020-03-25",
                    expirationDate: "2020-06-25",
                    units: 1,
                    population: "FOREIGN_ADULTS",
                    totalPrice: 12000,
                    name: "plan2Park1"
                }
            },
            {
                id: "9754c04e-4a55-4d70-b78b-7e8310e4f6b5",
                date: "2020-03-25",
                updateDate: null,
                state: "SUCCESSFUL",
                paymentMethod: "VISA",
                ticket: {
                    id: "fd2b2dcc-3c23-4e26-8fb7-35a0a670d1a8",
                    date: "2020-03-25",
                    expirationDate: "2020-06-25",
                    units: 1,
                    population: "FOREIGN_ADULTS",
                    totalPrice: 12000,
                    name: "plan2Park1"
                }
            }
        ]
    )
    const history = useHistory()
    return (
        <div>
            <Header />
            <Grid container spacing={3} >
                {
                    transactions.map(function (transaction) {
                        return (
                            <TransactionCard transaction={transaction} />
                        )
                    })
                }
            </Grid>
        </div>
    );
}
