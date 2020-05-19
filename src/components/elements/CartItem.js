import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography, Grid, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ParkCard from './ParkCard';
import PlanCard from './PlanCard';
import ActivityCard from './ActivityCard';

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.common.white,
        padding: "0.5%"
    },
    text: {
        marginTop: "7px"
    },
    icon: {
        textAlign: "center"
    },
}));

export default function CartItem(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState(false);
    const [units, setUnits] = useState(0);
    const history = useHistory()

    const checkHandler = (event) => {
        if (!checked) {
            let item = JSON.parse(localStorage.getItem("checkout"))
            item[props.item.id] = {
                item: {
                    id: props.item.id,
                    type: props.item.type,
                    population: props.item.population,
                    price: props.item.price,
                    feedback: props.item.feedback
                },
                units: units
            }
            localStorage.setItem("checkout", JSON.stringify(item))
        } else {
            let item = JSON.parse(localStorage.getItem("checkout"))
            delete item[props.item.id]
            localStorage.setItem("checkout", JSON.stringify(item))
        }
        setChecked(!checked);

    };

    const handleSubstractUnit = (event) => {
        if (units > 0) {
            setUnits(units - 1)
        }
    }

    const handleSetUnits = (event) => {
        if (event.target.value > 0) {
            setUnits(event.target.value)
        }
    }

    const removeHandler = (event) => {
        //TODO remove from cart
    };

    const gerCard = (type) => {
        if (type === "PARK") {
            return (
                <ParkCard park={props.item}/>
            )
        } else if (type === "PLAN") {
            return (
                <PlanCard plan={props.item}/>
            )
        } else {
            return (
                <ActivityCard activity={props.item}/>
            )
        }
    }

    return (
        <ListItem divider={true} className={classes.container}>
            <Snackbar
                open={error}
                autoHideDuration={6000}
                onClose={() => { setError(false) }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="error">The product could not be removed</Alert>
            </Snackbar>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={1} >
                    <Checkbox
                        checked={checked}
                        edge="end"
                        color="primary"
                        onChange={checkHandler}
                    />
                </Grid>
                <Grid item xs={3} container>
                    {gerCard(props.item.type)}
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                <Typography variant="h5">Population: {props.item.population}</Typography>
                <Typography variant="h5">Price: ${props.item.price}</Typography>
                </Grid>
                <Grid item xs={3} container className={classes.icon}>
                    <Grid item xs={12} className={classes.text}>
                        <Typography variant="h5">Total: ${props.item.price * units}</Typography>
                    </Grid>
                    <Grid item xs={12} container className={classes.text} justify="center">
                        <Grid item xs={1} className={classes.text}>
                            <IconButton onClick={handleSubstractUnit}>
                                <RemoveIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField type="number" variant="outlined" inputProps={{ min: "0" }} value={units} onChange={handleSetUnits} />
                        </Grid>
                        <Grid item xs={1} className={classes.text}>
                            <IconButton onClick={(event) => { setUnits(units + 1) }}>
                                <AddIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} className={classes.icon}>
                    <IconButton onClick={removeHandler}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>

            </Grid>


        </ListItem>
    );
}
