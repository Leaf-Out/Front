import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../elements/Header'
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { Typography, LinearProgress } from '@material-ui/core';
import TransactionCard from '../elements/TransactionCard'
import { get } from '../../api/Get';

const useStyles = makeStyles(theme => ({
    grid: {
        marginLeft: "7.5%",
        marginTop: "2.5%",
        width: "85%"
    },
    title: {
        marginTop: "1%"
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
                <Typography align="center" variant="h3" className={classes.title}> Transactions </Typography>
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