import React from 'react';
import Header from '../elements/Header';
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from '../elements/Footer';
import { Typography } from '@material-ui/core';
import LeafRating from '../elements/LeafRating';
import { CommentSection } from "../elements/CommentSection";
import FeeTable from '../elements/FeeTable';

export default function Plan() {
    return (
        <div>
            <React.Fragment>
                <Header />
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography align="center" variant="h3">Plan Name</Typography>
                    <br />
                    <Grid container>
                        <Grid item xs={6}>
                            <LeafRating />
                        </Grid>
                        <Grid item xs={6} container justify="flex-end">
                            <FeeTable prices={
                                {
                                    "ADULT": 30000,
                                    "FOREIGN": 45000,
                                    "CHILDREN": 15000
                                }
                            } />
                        </Grid>
                    </Grid>

                    <div align={"center"}>
                    </div>
                    <br />
                    <Typography>Plan Description</Typography>
                    <Typography>Plan Activities</Typography>
                    <CommentSection />
                    <Footer />
                </Container>

            </React.Fragment>
        </div>
    );

}