import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './css/Home.css'
import { Card, CardContent, Typography, Paper, TextField, Button, Grid, LinearProgress, MenuItem, Select, FormControl } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Header from '../elements/Header'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../static/src/img/background.jpg'
import PlanCard from '../elements/PlanCard'
import { get } from '../../api/Get';
import jwt from 'jsonwebtoken';

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
    planTitle: {
        marginLeft: "5%",
        marginTop: "2.5%",
        marginRight: "5%",
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
    },
    planGrid: {
        marginTop: "1.5%",
        marginBottom: "5%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%"
    }
}));

export default function HomeUser() {
    const classes = useStyles()
    const [plans,setPlans] = useState([])
    const [load,setLoad] = useState(true)
    const [error,setError] = useState(false)
    const [filter, setFilter] = useState({
        name: "",
        location: "region",
        rating: "",
        price: [],
        type: "parks",
        tags: [],
      })
    const history = useHistory()

    useEffect(()=>{
        
        get(`/plans/popular`)
        .then(res => {
            setPlans(res)            
            setLoad(false)
        }).catch((err)=>{
            setError(true)
            setLoad(false);
        })
        localStorage.setItem("filter", JSON.stringify({name:"",location:{},rating:"",price:[],type:"parks",tags:[]}));
    },[] )

    const search= (e)=>{
        localStorage.setItem(
            "filter",
            JSON.stringify(filter)
        )
        history.push("/catalog")
    }

    const handleTypeChange = (event) =>{
        let newFilter = filter
        newFilter["type"] = event.target.value
        setFilter(newFilter)
             
    }

    return (
        <div>
            <div className={classes.background}>
                <Header isHome={true} />
                <Paper className={classes.card}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h4" className={classes.title}>Prepare your trip just as you want it.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className={classes.label}>Region</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Where you want to go?" variant="outlined" className={classes.input} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className={classes.label}>Type</Typography>
                        </Grid>
                        <Grid item xs={6} align="center" className={classes.text}>
                        <FormControl className={classes.formControl}>
                            <Select autoWidth={true} onChange={handleTypeChange}>
                                <MenuItem value="parks">Parks</MenuItem>
                                <MenuItem value="plans">Plans</MenuItem>
                                <MenuItem value="activities">Activities</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                        
                        <Grid item xs={12} container justify="flex-end">
                            <Button  color="primary" variant="contained" onClick={ search }> Search </Button>
                        </Grid>
                    </Grid>
                </Paper>
                <Divider />
            </div>
            <Typography variant="h4" className={classes.planTitle}>Popular plans</Typography>
            <Typography variant="h5" className={classes.planTitle}>This is the sumary of the most popular plans</Typography>
            <Grid container spacing={3} align="center" className={classes.planGrid}>
                {
                    load ? 
                        (<div>Error</div>):
                    plans.map( (plan) =>{
                        return (
                            <Grid item xs={3} >
                                <PlanCard plan={ plan} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

