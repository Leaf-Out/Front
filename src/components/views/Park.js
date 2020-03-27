import React from 'react';
import {Slider} from '../elements/Slider'
import LeafRating from '../elements/LeafRating'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '../elements/Footer';
import Location from '../elements/Location';
import { Header } from '../elements/Header';
import { PlanSlider } from '../elements/PlanSlider';
import { Typography } from '@material-ui/core';


export class Park extends React.Component{
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
                        <Typography align="center">Park Name</Typography>
                        <br/>
                        <LeafRating/>
                        <div align={"center"}>
                            <Slider  />
                        </div>
                        <div align={"center"}>
                            <Location />
                        </div>
                        <div align={"center"}>
                            <PlanSlider />
                        </div>
                        <br/>
                        <Footer/>
                    </Container>
                </React.Fragment>
            </div>
        );
    }
}
