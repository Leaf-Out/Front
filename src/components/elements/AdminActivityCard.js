import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { Dialog, DialogContent, Button, DialogTitle, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import Carousel from './Carousel';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';


const useStyles = makeStyles(theme => ({
    card: {
        height: window.innerHeight * 0.35,
        width: "100%"
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

export default function AdminActivityCard(props) {
    const classes = useStyles()
    const handleDelete = (event) => {}//todoDelte
    const [confirmation, setConfimation] = useState(false)
    const images = [
        "https://cdn.pixabay.com/photo/2016/01/19/17/56/whales-1149978_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/08/20/50/sub-2296460_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/03/09/18/34/maldives-666122_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_1280.jpg"
    ]
    const getImage = () => {
        return images[Math.floor(Math.random() * 4)]
    }
    return (
        <Paper elevation={0} className={classes.card}>
            <Dialog open={confirmation} onClose={(e) => { setConfimation(false) }}>
                <DialogTitle> <b>Are you sure?</b> </DialogTitle>
                <Divider />
                <DialogContent>
                    <Typography>
                        If you delete this activity, it will be delete from the plans that offer it too.
                    </Typography>
                    <div align="center">
                        <Button variant="contained" color="primary" onClick={(e) => { setConfimation(false)}}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                    
                </DialogContent>
            </Dialog>
            <Grid container>
                <Grid xs={12}>
                    <CardMedia
                        className={classes.image}
                        image={getImage()}
                    />
                </Grid>
                <Grid xs={12} container>
                    <Grid xs={6} align="start">
                        <Typography variant="subtittle1" color="textSecondary">{props.park}</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                            <Typography>{props.activity.feedback.rating}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography ><BeachAccessRoundedIcon className={classes.icon} />{props.activity.name}</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                        <Typography >$ 15.000 <b>COP avg</b></Typography>
                    </Grid>
                    <Grid xs={2} align="end">
                        <IconButton onClick={(e) => { setConfimation(true) }} variant="contained" color="primary">
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

}
