import React from 'react';
import { Header } from '../elements/Header';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from '../elements/Footer';
import {Slider} from '../elements/Slider';
import { Typography } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import {LeafRating} from '../elements/LeafRating';
import {CommentSection} from "../elements/CommentSection";

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
                        <CommentSection></CommentSection>
                        <Footer/>
                    </Container>
                    
                </React.Fragment>
            </div>
        );
    }
}