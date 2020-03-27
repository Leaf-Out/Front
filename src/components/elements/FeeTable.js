import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function TabContainer(props) {
  return (
    <Typography component="div" align="center">
      {props.children}
    </Typography>
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