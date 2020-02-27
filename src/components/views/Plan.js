import React from 'react';
import { Header } from '../elements/Header';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from '../elements/Footer';
import {Slider} from '../elements/Slider';
import { Typography } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import {LeafRating} from '../elements/LeafRating';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export class Plan extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return (
            <div>
                <React.Fragment>
                    <Header />
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Typography align="center">Plan Name</Typography>
                        <br/>
                        <LeafRating/>
                        <div align={"center"}>
                            <Slider  />
                        </div>
                        <br/>
                        <Tabs>
                            <Tab label="Adult"></Tab>
                            <Tab label="Child"></Tab>
                            <Tab label="Foreign"></Tab>
                        </Tabs>
                        <Typography>Plan Description</Typography>
                        <Typography>Plan Activities</Typography>
                        <List>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="User Sample1" />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Sample comment 1"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        Sample comment
                                    </Typography>
                                    {"This is a comment sample"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="User Sample2" />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Sample comment 2"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        Sample comment
                                    </Typography>
                                    {"This is a comment sample"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            </List>
                        <Footer/>
                    </Container>
                    
                </React.Fragment>
            </div>
        );
    }
}