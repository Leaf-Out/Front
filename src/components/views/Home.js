import React from 'react';
import './css/Home.css'
import { Card, CardContent, Typography, Paper, TextField, InputAdornment, Button, IconButton, Grid } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from "@material-ui/icons/Search";
import EcoIcon from '@material-ui/icons/Eco';
import { Slider } from "../elements/Slider";
import Header from "../elements/Header";
import { makeStyles } from '@material-ui/core/styles';
import Background from "../../static/src/img/background.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: "url(" + Background + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    card: {
        marginTop: "5%",
        marginLeft: "5%",
        width: "25%",
        height: "53%",
    },
    title: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "7.5%"
    },
    label: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "5%"
    },
    input: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%",
        width: "85%",
        height: 45,
        borderColor: theme.palette.primary.dark
    },
    adultLabel: {
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "10%"
    },
    childrenLabel: {
        marginLeft: "5%",
        marginRight: "15%",
        marginTop: "10%"
    },
    adults: {
        marginLeft: "15%",
        marginRight: "10%",
        marginTop: "3%",
        width: "80%",
        height: 45
    },
    children: {
        marginLeft: "5%",
        marginRight: "15%",
        marginTop: "3%",
        width: "80%",
        height: 45
    },
    searchButton: {
        marginRight: "7.5%",
        marginTop: "10%",
        height: 45
    }
}));

export default function Home() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.background}>
                <Header isHome={true} />
                <Paper className={classes.card}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>Search text that needs to be defined and long</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className={classes.label}>Place</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Where you want to go?" variant="outlined" className={classes.input} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className={classes.label}>Tags</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Key words" variant="outlined" className={classes.input} />
                        </Grid>
                        <Grid container xs={12}>
                            <Grid item xs={6} container>
                                <Grid item xs={12}>
                                    <Typography variant="body1" className={classes.adultLabel}>Adults</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Adults" type="number" variant="outlined" className={classes.adults} />
                                </Grid>
                            </Grid>
                            <Grid item xs={6} container>
                                <Grid item xs={12}>
                                    <Typography variant="body1" className={classes.childrenLabel}>Children</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Children" type="number" variant="outlined" className={classes.children} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container justify="flex-end">
                            <Button className={classes.searchButton} color="primary" variant="contained"> Search </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <br />
            <br />
            <div align={"center"}>
                <Slider />
            </div>
            <div align={"center"}>
                <Card className="friendsCard">
                    <CardContent>
                        <Grid container spacing={7}>
                            <Grid item xs={5}>
                                <Paper className="partnersPaper">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries,
                                    but also the leap into electronic
                                    typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets
                                    with the release of Letraset sheets
                                    with the release of Letraset sheets
                                    with the release of Letraset sheets
                                    </Paper>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={10}>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={10}>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className="paperGrid">
                                            <img /*To Put*/ />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

