import React from 'react'
import { Link } from 'react-router-dom';
import './css/Home.css'
import { Card, CardContent, Typography, Paper, TextField, Button, Grid } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Header from '../elements/Header'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../static/src/img/background.jpg'
import ParkIcon from '@material-ui/icons/Style';
import PlanIcon from '@material-ui/icons/AccountTreeRounded';
import ActivityIcon from '@material-ui/icons/BeachAccessRounded';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: "url(" + Background + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    card: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.main,
        height: 300,
        width: "100%"
    },
    grid: {
        marginTop: "3.5%",
        marginLeft: "7.5%",
        width: "85%",
        height: "77.5%",
    },
}));

export default function HomeAdmin() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.background}>
                <Header isHome={true} />
                <Grid container spacing={5} className={classes.grid} alignItems="center">
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Park</Typography>
                            <ParkIcon />
                        </Button>
                    </Grid>
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Plan</Typography>
                            <PlanIcon />
                        </Button>
                    </Grid>
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Activity</Typography>
                            <ActivityIcon />
                        </Button>
                    </Grid>
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Park</Typography>
                            <ParkIcon />
                        </Button>
                    </Grid>
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Plan</Typography>
                            <PlanIcon />
                        </Button>
                    </Grid>
                    <Grid xs={4} item>
                        <Button className={classes.card}>
                            <Typography variant="h3">New Activity</Typography>
                            <ActivityIcon />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

