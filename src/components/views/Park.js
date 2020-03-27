import React from 'react';
import { Slider } from '../elements/Slider'
import LeafRating from '../elements/LeafRating'
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '../elements/Footer';
import Location from '../elements/Location';
import { Header } from '../elements/Header';
import { PlanSlider } from '../elements/PlanSlider';
import { Typography } from '@material-ui/core';
import FeeTable from '../elements/FeeTable';


export default function Park() {
    return (
        <div>
            <React.Fragment>
                <Header />
                <CssBaseline />

                <Container maxWidth="lg">
                    <Typography align="center" variant="h3">Park Name</Typography>
                    <br />
                    <Grid container>
                        <Grid item xs={6}>
                            <LeafRating />
                        </Grid>
                        <Grid item xs={6} container justify="flex-end">
                            <FeeTable prices={
                                {
                                    "ADULT": 18500,
                                    "CHILDREN": 10000
                                }
                            } />
                        </Grid>
                    </Grid>
                    <div align={"center"}>
                        <Slider />
                    </div>
                    <div align={"center"}>
                        <Location />
                    </div>
                    <div align={"center"}>
                        <PlanSlider />
                    </div>
                    <br />
                    <Footer />
                </Container>
            </React.Fragment>
        </div>
    );

}
