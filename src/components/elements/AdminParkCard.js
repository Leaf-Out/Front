import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import { Link } from 'react-router-dom';
import StyleIcon from '@material-ui/icons/Style';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Dialog, DialogContent, Button, DialogTitle, Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        height: window.innerHeight * 0.35,
        width: "100%"
    },
    image: {
        width: "100%",
        height: window.innerHeight * 0.25
    },
    icon: {
        color: theme.palette.primary.main
    }
}));





export default function AdminParkCard(props) {
    const classes = useStyles()
    const handleDelete = (event) => {}//todoDelte
    const [confirmation, setConfimation] = useState(false)
    const images = [
        "https://cdn.pixabay.com/photo/2014/10/04/12/18/stone-arch-472976_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/10/12/06/24/allen-park-2843660_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/03/09/12/architecture-2280543_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/08/23/19/51/park-1615341_1280.jpg"
    ]
    const getImage = () => {
        return images[Math.floor(Math.random() * 4)]
    }
    const IconButtonDelete = () => {
        return(
            <IconButton onClick={(e) => { setConfimation(true) }} variant="contained" color="primary">
                <DeleteIcon />
            </IconButton>
        )
    
    }
    const IconButtonUpdate = () => {
        return(
            <Link style={{ textDecoration: 'none' }} to={`/updatePark/${props.park.name}`}>
                <IconButton variant="contained" color="primary">
                    <CreateIcon />
                </IconButton>
            </Link>
        )
        
    }
    return (
        <Paper elevation={0} className={classes.card}>
            <Dialog open={confirmation} onClose={(e) => { setConfimation(false) }}>
                <DialogTitle> <b>Are you sure?</b> </DialogTitle>
                <Divider />
                <DialogContent>
                    <Typography>
                        If you delete this park, all its plans and activities will be deleted too.
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
                        <Typography variant="subtittle1" color="textSecondary">Park</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                            <Typography>3.9</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography ><StyleIcon className={classes.icon} />{props.park.name}</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                        <Typography >$ 15.000 <b>COP avg</b></Typography>
                    </Grid>
                    <Grid xs={2} align="end">
                       {props.isUpdate === true ? <IconButtonUpdate />  : <IconButtonDelete /> }
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

}
