import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import ButtonBase from '@material-ui/core/ButtonBase';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import MoreRoundedIcon from '@material-ui/icons/MoreRounded';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Carousel from './Carousel';

const useStyles = makeStyles(theme => ({
    card: {
        height: window.innerHeight * 0.35
    },
    image: {
        width: "100%",
        height: window.innerHeight * 0.25,
        pointerEvents: "all"
    },
    icon: {
        color: theme.palette.primary.main
    }
}));

export default function PlanCard() {
    const classes = useStyles()
    const [dialog, setDialog] = useState(false)
    const images = [
        "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/23/18/27/hummingbird-1854225_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/05/30/20/52/toucan-4240727_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/02/26/18/22/jungle-4882466_1280.jpg"
    ]
    return (
        <Paper elevation={0} className={classes.card}>
            <Dialog onClose={(event) => { setDialog(false) }} open={dialog} >
                <Carousel sliders={images}/>
            </Dialog>
            <Grid container>
                <Grid xs={12}>
                    <CardMedia
                        className={classes.image}
                        image='https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_1280.jpg'
                        onClick={(event)=>{setDialog(true)}}
                    />
                </Grid>
                <Grid xs={12} container>
                    <Grid xs={6} align="start">
                        <Typography variant="subtittle1" color="textSecondary">Park name</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                            <Typography>4.5</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography >Plan Name</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                        <Typography >$ 120.000 COP</Typography>
                    </Grid>
                    <Grid xs={2} align="end">
                        <Link to="/plan">
                            <IconButton variant="contained" color="primary">
                                <MoreRoundedIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

}
