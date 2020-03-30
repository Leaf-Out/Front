import React, { useState, useEffect } from 'react';
import { Tabs, Tab, IconButton, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function TabContainer(props) {
  return (
    <Grid container>
      <Grid xs={7} align="end">
        <Typography component="div">
          {props.children}
        </Typography >
      </Grid>
      <Grid xs={5} align="end">
        <IconButton variant="outlined" color="primary">
          <ShoppingCartIcon />
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
  const [prices] = useState(Object.entries(props.prices));

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
            value === i && <TabContainer>$ {price}</TabContainer>
          )
        })
      }
    </div>
  );
}