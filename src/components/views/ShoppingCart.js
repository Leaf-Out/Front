import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Button, Typography } from '@material-ui/core';
import Header from '../elements/Header'
import CartItem from '../elements/CartItem';
import {get} from "../../api/Get";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1%"
    },
    button: {
        marginLeft: "7.5%",
        width: "83.5%"
    },
}));

export default function ShoppingCart() {
    const [items, setItems] = useState([])
    const classes = useStyles();

    const getItems = () => {
        get(`/carts/${localStorage.getItem("email")}`)
            .then((res) => {
                console.log(res);
                setItems(res);
                //setLoad(false);
            })
            .catch((err) => {
                console.log(err);
                //setLoad(false);
                //setError(true);
            });

    }

    useEffect(() => {
        localStorage.setItem("checkout", JSON.stringify({}))
        getItems()
    }, [1]);
    return (
        <div>
            <Header />
            <Typography align="center" variant="h3" className={classes.title}> Shopping Cart </Typography>
            <List>
                {
                    items.map(function (item) {
                        return (
                            <CartItem pay={item}/>
                        )
                    })
                }
            </List>
            <Link to="/checkout" style={{ textDecoration: 'none', color: '#000' }}>
                <Button variant="contained" color="primary" size="large" className={classes.button}>Checkout</Button>
            </Link>
        </div>
    );
}
