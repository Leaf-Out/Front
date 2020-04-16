import React, { useEffect, useState } from "react";
import LeafRating from "../elements/LeafRating";
import {
  Typography,
  Divider,
  CardMedia,
  Grid,
  IconButton,
  LinearProgress,
  CircularProgress,
  Dialog,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../elements/Footer";
import Location from "../elements/Location";
import Header from "../elements/Header";
import FeeTable from "../elements/FeeTable";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import PlaceRoundedIcon from "@material-ui/icons/PlaceRounded";
import PlanCard from "../elements/PlanCard";
import ActivityCard from "../elements/ActivityCard";
import AccountTreeRoundedIcon from "@material-ui/icons/AccountTreeRounded";
import BeachAccessRoundedIcon from "@material-ui/icons/BeachAccessRounded";
import CommentSection from "../elements/CommentSection";
import CommentIcon from "@material-ui/icons/Comment";
import ChipList from "../elements/ChipList";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../api/Get";

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

export default function Park() {
  const classes = useStyles();
  const [tags, setTags] = useState(false);
  const images = [
    {
      url:
        "https://cdn.pixabay.com/photo/2014/10/04/12/18/stone-arch-472976_1280.jpg",
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2017/10/12/06/24/allen-park-2843660_1280.jpg",
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2017/05/03/09/12/architecture-2280543_1280.jpg",
    },
    {
      url:
        "https://cdn.pixabay.com/photo/2016/08/23/19/51/park-1615341_1280.jpg",
    },
  ];
  const { name } = useParams();
  const history = useHistory();
  const [park, setPark] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    get(`/parks/${name}`)
      .then((res) => {
        setPark(res);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
        setError(true);
      });
  }, []);

  if(load) {
    return(
        <LinearProgress style={{marginTop: "2%"}} />
    )
  } else if(error) {
    return(
        <div>
            Error
        </div>
    )
  } else {
    return (
      <div>
        <Dialog
          onClose={(event) => {
            setTags(false);
          }}
          open={tags}
          fullWidth
        >
          <ChipList tags={park.tags} />
        </Dialog>
        <Header />
        <Typography align="center" variant="h3" className={classes.title}>
          {" "}
          {park.name}{" "}
        </Typography>
        <Grid container>
          <Grid
            item
            xs={5}
            continer
            justify="flex-start"
            className={classes.rating}
          >
            <LeafRating />
          </Grid>
          <Grid
            item
            xs={5}
            container
            justify="flex-end"
            className={classes.fee}
          >
            {<FeeTable prices={park.prices} />}
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <SimpleImageSlider
          width={window.innerWidth * 0.42}
          height={window.innerHeight * 0.43}
          images={images}
          className={classes.image}
          style={{ marginLeft: "29%", marginTop: "1.5%" }}
        />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Park Description
          <IconButton variant="contained" color="primary">
            <LocalOfferRoundedIcon
              onClick={(event) => {
                setTags(true);
              }}
            />
          </IconButton>
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {park.description}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Park Location
          <PlaceRoundedIcon color="primary" />
        </Typography>
        <Typography variant="h5" className={classes.description}>
          {park.location.description}
        </Typography>
        <Location />
        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Plans
          <IconButton variant="contained" color="primary">
            <AccountTreeRoundedIcon />
          </IconButton>
        </Typography>
        <Typography variant="h5" className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Grid container spacing={3} align="center" className={classes.planGrid}>
          {park.planList.map((plan) => {
            return (
              <Grid item xs={3}>
                <PlanCard park={park.name} plan={plan} />
              </Grid>
            );
          })}
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Activities
          <IconButton variant="contained" color="primary">
            <BeachAccessRoundedIcon />
          </IconButton>
        </Typography>
        <Typography variant="h5" className={classes.description}>
          General description
        </Typography>
        <Grid container spacing={3} align="center" className={classes.planGrid}>
          {park.activitiesList.map((activity) => {
            return (
              <Grid item xs={3}>
                <ActivityCard park={name} activity={activity} />
              </Grid>
            );
          })}
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Comment Section
          <IconButton variant="contained" color="primary">
            <CommentIcon />
          </IconButton>
        </Typography>
        <CommentSection comments={park.feedback.comments} />
        <Footer />
      </div>
    );
  }
}
