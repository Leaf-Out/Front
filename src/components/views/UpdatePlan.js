import React, { useState, useEffect } from 'react';
import Header from '../elements/Header';
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../elements/Footer';
import LeafRating from '../elements/LeafRating';
import StyleIcon from '@material-ui/icons/Style';
import CommentSection from "../elements/CommentSection";
import FeeTable from '../elements/FeeTable';
import { Link, useParams } from 'react-router-dom';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import CommentIcon from '@material-ui/icons/Comment';
import ChipList from '../elements/ChipList';
import SimpleImageSlider from "react-simple-image-slider";
import { get } from '../../api/Get';
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
  } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1%"
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
        width: "83.5%"
    },
    descriptionTitle: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%"
    },
    description: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%",
        marginBottom: "1.5%",
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
}));

export default function UpdatePlan(props) {
    const classes = useStyles()
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
                {editTitle  ? <TextField align="center" onChange={(e)=>{setNewTitle(e.target.value)}} /> :
                <Typography  onClick={()=>{setEditTitle(true)}} align="center" variant="h3" className={classes.title} >
                    {" "}
                    {plan.name}{" "}
                </Typography>
                }
                <Divider className={classes.divider} />
                {editParkTitle  ? <TextField align="center" onChange={(e)=>{setNewParkTitle(e.target.value)}} /> :
                <Typography  onClick={()=>{setEditParkTitle(true)}} align="center" variant="h3" className={classes.title} >
                    {" "}
                    {"plan.park.name"}{" "}
                </Typography>
                }
                <Grid container>
                    <Grid item xs={5} continer justify="flex-start" className={classes.rating}>
                        <LeafRating />
                    </Grid>
                    <Grid item xs={5} container justify="flex-end" className={classes.fee}>
                        <FeeTable prices={ plan.prices } />
                    </Grid>
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
                    <Typography variant="h5" className={classes.description}>
                        {plan.description}
                    </Typography>
                </div>
                <Divider className={classes.divider} />
                <div align={"center"}>
                    <Typography>Activity grid as a itinerary</Typography>
                </div>
                <Divider className={classes.divider} />
               
                <Footer />
            </div>
        );
    }

}