import React, { useState, useEffect } from 'react';
import { Tabs, Tab, IconButton, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {post} from "../../api/Get";
import { useHistory } from "react-router-dom";


function TabContainer(props) {
    const history = useHistory();
    const addToCart = () => {
        if (!localStorage.getItem("token")){
            history.push("/Signin")
        }
        var cart = [
            {
                itemId: props.pay.id,
                type: props.pay.type,
                population:props.population
            }
        ]
        console.log(cart)
        post(`/carts/${localStorage.getItem("email")}/items` , cart)
            .then((res) => {
                history.push("/shoppingcart")
            })
            .catch((err) => {
                console.log(err);
            })

    }


  return (
    <Grid container>
      <Grid xs={7} align="end">
        <Typography component="div" style={{marginTop: "7.5%"}}>
          {props.children}
        </Typography >
      </Grid>
      <Grid xs={5} align="end">
        <IconButton variant="outlined" color="primary" onClick={(e) => {addToCart()}}>
          <ShoppingCartIcon  />
        </IconButton>
      </Grid>
    </Grid>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function FeeTable(props) {

  const [value, setValue] = useState(0);
  const [prices] = useState(Object.entries(props.pay.prices));

  return (
    <div>
      <Tabs value={value} onChange={(event, value) => { setValue(value) }} indicatorColor="primary">
        {
          prices.map(function (fee) {
            let population = fee[0]
            return (
              <Tab label={population} />
            )
          })
        }
      </Tabs>
      {
        prices.map(function (fee, i) {
          let price = fee[1]
          return (
            value === i && <TabContainer population={fee[0]} price={fee[1]} pay = {props.pay} >$ {price}</TabContainer>
          )
        })
      }
    </div>
  );
}