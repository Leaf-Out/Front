import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import { Dialog, DialogContent, Button, DialogTitle, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { remove } from '../../api/Get';

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

export default function AdminPlanCard(props) {
    const classes = useStyles()
    const handleDelete = (event) => { 
        remove("/plans", props.plan)
            .then((res) => {
                history.go(0)
            })
            .catch((err) => {
                history.go(0)
            });
    }
    const [confirmation, setConfimation] = useState(false)
    const history = useHistory()
    const images = [
        "https://cdn.pixabay.com/photo/2016/03/09/09/59/men-1245982_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/02/16/17/52/rafting-2071980_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/09/04/19/27/paraglider-1644986_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg"
    ]
    const getImage = () => {
        return images[Math.floor(Math.random() * 4)]
    }

    const IconButtonDelete = () => {
        return (
            <IconButton onClick={(e) => { setConfimation(true) }} variant="contained" color="primary">
                <DeleteIcon />
            </IconButton>
        )

    }
    const IconButtonUpdate = () => {
        return (
            <Link style={{ textDecoration: 'none' }} to={`/updatePlan/${props.plan.name}`}>
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
                        If you delete this plan, all its activities will be deleted too.
                    </Typography>
                    <div align="center">
                        <Button variant="contained" color="primary" onClick={(e) => { setConfimation(false) }}>
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
                        <Typography variant="subtittle1" color="textSecondary">{!props.park ? "default" : props.park}</Typography>
                    </Grid>
                    <Grid xs={6} container align="end">
                        <Grid xs={10} align="end">
                            <EcoRoundedIcon className={classes.icon} />
                        </Grid>
                        <Grid xs={2}>
                            <Typography>{props.plan.feedback.rating}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} align="start">
                        <Typography ><AccountTreeRoundedIcon className={classes.icon} /> {props.plan.name}</Typography>
                    </Grid>
                    <Grid xs={10} align="start">
                    </Grid>
                    <Grid xs={2} align="end">
                        <IconButton onClick={(e) => { setConfimation(true) }} variant="contained" color="primary">
                            {props.isUpdate === true ? <IconButtonUpdate /> : <IconButtonDelete />}
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );

}
