import React, { useState, useEffect } from 'react';
import Header from '../elements/Header';
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../elements/Footer';
import LeafRating from '../elements/LeafRating';
import StyleIcon from '@material-ui/icons/Style';
import CommentSection from "../elements/CommentSection";
import FeeTable from '../elements/FeeTable';
import { Link, useParams, useHistory } from 'react-router-dom';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import CommentIcon from '@material-ui/icons/Comment';
import ChipList from '../elements/ChipList';
import SimpleImageSlider from "react-simple-image-slider";
import { get, update } from '../../api/Get';
import BeachAccessRoundedIcon from "@material-ui/icons/BeachAccessRounded";
import {
    Typography,
    Divider,
    CardMedia,
    Grid,
    IconButton,
    LinearProgress,
    CircularProgress,
    Dialog,
    TextField,
    Button,
  } from "@material-ui/core";
import ActivityCard from '../elements/ActivityCard';

const useStyles = makeStyles((theme) => ({
    title: {
      marginTop: "1%",
    },
    rating: {
      marginTop: "2%",
      marginLeft: "7.5%",
    },
    fee: {
      marginTop: "1%",
      marginBottom: "1%",
    },
    divider: {
      marginLeft: "7.5%",
      width: "83.5%",
    },
    descriptionTitle: {
      marginLeft: "7.5%",
      marginRight: "7.5%",
      marginTop: "1.5%",
    },
    description: {
      marginLeft: "7.5%",
      marginRight: "7.5%",
      marginTop: "1.5%",
      marginBottom: "1.5%",
    },
    planGrid: {
      marginTop: "1.5%",
      marginBottom: "1.5%",
      marginLeft: "7.5%",
      marginRight: "5.5%",
      width: "85%",
    },
  }));

export default function UpdatePlan(props) {
    const classes = useStyles()
    const history = useHistory();
    const [tags, setTags] = useState(false)
    const images = [
        {"url":"https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2016/03/09/09/59/men-1245982_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2017/02/16/17/52/rafting-2071980_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2016/09/04/19/27/paraglider-1644986_1280.jpg"}                
    ]
    const {name} = useParams();
    const [plan,setPlan] = useState({});
    const [load, setLoad] = useState(true);
    const [error,sestError] = useState(false);
    const [editTitle,setEditTitle] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [editParkTitle,setEditParkTitle] = useState(false);
    const [newParkTitle, setNewParkTitle] = useState("");
    const [editDesc, setEditDesc] = useState(false);
    const [newDesc, setNewDesc] = useState("");
    const [editActivitiesDesc, setEditActivitiesDesc] = useState(false);
    const [newActivitiesDesc, setNewActivitiesDesc] = useState("");

    const handleUpdatePlan = (event) => {
    
        var updateTitle;
        var updateParkTitle;
        var updateDescription;
        var updateActivityDescription;
        editTitle ? updateTitle = newTitle : updateTitle = plan.name
        editParkTitle ? updateParkTitle = newParkTitle : updateParkTitle = plan.parkName
        editDesc ? updateDescription = newDesc : updateDescription = plan.description
        editActivitiesDesc ? updateActivityDescription = newActivitiesDesc : updateActivityDescription = plan.activityDescription

        var requestObject = {
            "name": updateTitle,
            "parkName": updateParkTitle,
            "activityDescription": updateActivityDescription,
            "description": updateDescription
        }
        update(`/plans/` + plan.name, requestObject)
        .then(res => {
            history.push("/")
        }).catch((err)=>{
            sestError(true);
            setLoad(false);
        })
      }
    
    useEffect(()=>{
        get(`/plans/${name}`)
        .then(res => {
            setPlan(res)            
            setLoad(false)
        }).catch((err)=>{
            console.log(err);
            setLoad(false);
        })
    },[])

    if(load){
        return(
            <LinearProgress style={{marginTop: "2%"}} />
        )
    }
    else{
        return (
            <div>
                <Dialog onClose={(event) => { setTags(false) }} open={tags} fullWidth>
                    <ChipList tags={plan.tags} />
                </Dialog>
                <Header />
                <div align = "center">
                    {editTitle  ? <TextField align="center" onChange={(e)=>{setNewTitle(e.target.value)}} /> :
                    <Typography  onClick={()=>{setEditTitle(true)}} align="center" variant="h3" className={classes.title} >
                        {" "}
                        {plan.name ? plan.name : "No Name Assigned" }{" "}
                    </Typography>
                    }
                    <Divider className={classes.divider} />
                    {editParkTitle  ? <TextField align="center" onChange={(e)=>{setNewParkTitle(e.target.value)}} /> :
                    <Typography  onClick={()=>{setEditParkTitle(true)}} align="center" variant="h3" className={classes.title} >
                        {" "}
                        {plan.parkName ? plan.parkName : "No Park Assigned" }{" "}
                    </Typography>
                    }
                </div>
                
                <Grid container>
                </Grid>
                <Divider className={classes.divider} />
                <div>
                    <SimpleImageSlider
                        width={window.innerWidth * 0.42}
                        height={window.innerHeight * 0.43}
                        images={images}
                        className={classes.image}
                        style={{marginLeft: "29%", marginTop: "1.5%"}}
                    />
                    <Typography variant="h4" className={classes.descriptionTitle}>
                        Plan Description
                        <IconButton variant="contained" color="primary" onClick={(event) => { setTags(true) }}>
                            <LocalOfferRoundedIcon />
                        </IconButton>
                    </Typography>
                    {editDesc ? <TextField onChange={(e) => { setNewDesc(e.target.value) }}  className={classes.description}/> :
                    <Typography onClick={() => { setEditDesc(true) }} variant="h5" className={classes.description} >
                        {plan.description ? plan.description : "No Description" }
                    </Typography>
                    }
                </div>
                <Typography variant="h4" className={classes.descriptionTitle}>
                     Activities
                <IconButton variant="contained" color="primary">
                    <BeachAccessRoundedIcon />
                </IconButton>
                </Typography>
                {editActivitiesDesc ? <TextField onChange={(e) => { setNewActivitiesDesc(e.target.value) }}  className={classes.description}/> :
                <Typography onClick={() => { setEditActivitiesDesc(true) }} variant="h5" className={classes.description} >
                    {plan.activityDescription ? plan.activityDescription : "No Activity Set Description" }
                </Typography>
                 }
                <Divider className={classes.divider} />
                <Grid container spacing={3} align="center" className={classes.planGrid}>
                    {plan.activitiesList.map((activity) => {
                        return (
                        <Grid item xs={3}>
                            <ActivityCard park={name} activity={activity} isUpdate = {true} />
                        </Grid>
                        );
                    })}
                </Grid>
                <Divider className={classes.divider} />
                <Button variant="contained" color="primary" onClick={handleUpdatePlan} fullWidth>
                    Update Plan
                </Button>
                <Footer />
            </div>
        );
    }

}