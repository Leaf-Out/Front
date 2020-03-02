import React from 'react';
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

export class FeeTable extends React.Component{
    state = {
        value: 0,
      };
    
    getPrice = (fee) => {
        //TODO fetch fee
        if (fee === 0) {
            return 30000
        } else if (fee == 1) {
            return 10000
        } else {
            return 50000
        }
    }
    handleChange = (event, value) => {
    this.setState({ value });
    };
    render(){
        const { value } = this.state;

        return (
            <div>
                <Tabs value={value} onChange={this.handleChange} indicatorColor="">
                    <Tab label="Aduld" />
                    <Tab label="Child" />
                    <Tab label="Foreign" />
                </Tabs>
                {value === 0 && <TabContainer>$ {this.getPrice(this.state.value)}</TabContainer>}
                {value === 1 && <TabContainer>$ {this.getPrice(this.state.value)}</TabContainer>}
                {value === 2 && <TabContainer>$ {this.getPrice(this.state.value)}</TabContainer>}
            </div>
    );
  }
}