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
import {remove} from "../../api/Get";

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
            item[props.pay.pay.id] = {
                item: props.pay.pay,
                price:props.pay.price,
                population:props.pay.population,
                units: units
            }
            localStorage.setItem("checkout", JSON.stringify(item))
        } else {
            let item = JSON.parse(localStorage.getItem("checkout"))
            delete item[props.pay.pay.id]
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

        remove(`/carts/${localStorage.getItem("email")}/items/${props.pay.pay.id+props.pay.population}`)
            .then((res) => {
                history.go(0)
            })
            .catch((err) => {
                console.log("")
            });
    };

    const gerCard = (type) => {
        if (type === "PARK") {
            return (
                <ParkCard park={props.pay.pay}/>
            )
        } else if (type === "PLAN") {
            return (
                <PlanCard plan={props.pay.pay}/>
            )
        } else {
            return (
                <ActivityCard activity={props.pay.pay}/>
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
                    {gerCard(props.pay.type)}
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                <Typography variant="h5">Population: {props.pay.population}</Typography>
                <Typography variant="h5">Price: ${props.pay.price}</Typography>
                </Grid>
                <Grid item xs={3} container className={classes.icon}>
                    <Grid item xs={12} className={classes.text}>
                        <Typography variant="h5">Total: ${props.pay.price * units}</Typography>
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
