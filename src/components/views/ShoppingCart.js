import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List, Button, Typography } from '@material-ui/core';
import Header from '../elements/Header'
import CartItem from '../elements/CartItem';

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
        setItems(
            [
                {
                    "type": "PLAN",
                    "id": "plan2Park1",
                    "price": 12000,
                    "feedback": {"rating": 4.5},
                    "population": "CHILDREN"
                },
                {
                    "type": "PARK",
                    "id": "purbaNuevaParks",
                    "price": 5000,
                    "feedback": {"rating": 3.5},
                    "population": "ADULTS"
                }
            ])
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
                            <CartItem item={item}/>
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
