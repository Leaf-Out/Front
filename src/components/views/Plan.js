import React from 'react';
import { Header } from '../elements/Header';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from '../elements/Footer';
import {Slider} from '../elements/Slider';
import { Typography } from '@material-ui/core';
import {LeafRating} from '../elements/LeafRating';
import {CommentSection} from "../elements/CommentSection";
import { FeeTable } from '../elements/FeeTable';
import { Description } from '../elements/Description';
  
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
                        <Typography align="center" variant="h3">Plan Name</Typography>
                        <br/>
                        <Grid container>
                            <Grid item xs={6}>
                                <LeafRating/>
                            </Grid>
                            <Grid item xs={6} container justify="flex-end">
                                <FeeTable />
                            </Grid>
                        </Grid>
                        
                        <div align={"center"}>
                            <Slider  />
                        </div>
                        <br/>
                        <div align={"center"}>
                            <Description type = "Activities"/>
                        </div>
                        <div align={"center"}>
                            <Description type = "Descripción"/>
                        </div>
                        <CommentSection />
                        <Footer/>
                    </Container>
                    
                </React.Fragment>
            </div>
        );
    }
}