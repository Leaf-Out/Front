import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../elements/Header'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from 'react-router-dom';
import { Typography, LinearProgress } from '@material-ui/core';
import TransactionCard from '../elements/TransactionCard'
import { get } from '../../api/Get';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.secondary.light,
        height: '100vh',
        padding: "2.5%"
    },
}));

export default function Transactions() {
    const classes = useStyles();
    const [transactions, setTransactions] = useState([])
    const history = useHistory()
    const [load, setLoad] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{
        get('/payments')
        .then((res) => {
            setTransactions(res);
            setLoad(false);
          })
          .catch((err) => {
            setLoad(false);
            setError(true)
          });
    },[]);
    
    if(load) {
        return(
            <LinearProgress style={{marginTop: "2%"}} />
        )
    } else if(error) {
        return(
            <div>
                Error
            </div>
        )
    } else {
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
}
