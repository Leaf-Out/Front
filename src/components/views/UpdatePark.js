import React, { useEffect, useState } from "react";
import {
  Typography,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Dialog,
  TextField,
  Button,
} from "@material-ui/core";
import { Chip } from "@material-ui/core";
import TagsIcon from "@material-ui/icons/LocalOffer";
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
import ChipList from "../elements/ChipList";
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { get, update } from "../../api/Get";

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

export default function UpdatePark() {
  const classes = useStyles();
  const [tags, setTags] = useState(false);
  const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("filter")));
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
  const [editTitle, setEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editDesc, setEditDesc] = useState(false);
  const [newDesc, setNewDesc] = useState("");
  const [editLocDesc, setEditLocDesc] = useState(false);
  const [newLocDesc, setNewLocDesc] = useState("");
  const [editPlansDesc, setEditPlansDesc] = useState(false);
  const [newPlansDesc, setNewPlansDesc] = useState("");
  const [editActivitiesDesc, setEditActivitiesDesc] = useState(false);
  const [newActivitiesDesc, setNewActivitiesDesc] = useState("");



  const handleUpdatePark = (event) => {
    var updateName;
    var updateDescription;
    var updateLocationDescription;
    var updatePlanDescription;
    var updateActivityDescription;
    editTitle ? updateName = newTitle : updateName = park.name
    editDesc ? updateDescription = newDesc : updateDescription = park.description
    editLocDesc ? updateLocationDescription = newLocDesc : updateLocationDescription = park.location.description
    editPlansDesc ? updatePlanDescription = newPlansDesc : updatePlanDescription = park.planDescription
    editActivitiesDesc ? updateActivityDescription = newActivitiesDesc : updateActivityDescription = park.activityDescription
    var updateLocation = park.location;
    updateLocation.description = updateLocationDescription;
    var requestObject = {
      "name": updateName,
      "planDescription": updatePlanDescription,
      "activityDescription": updateActivityDescription,
      "location": updateLocation,
      "description": updateDescription
  }
    update(`/parks/` + park.name, requestObject)
      .then(res => {
        history.push("/")
      }).catch((err) => {
        setLoad(false);
      })
  }

  useEffect(() => {
    get(`/parks/${name}`)
      .then((res) => {
        setPark(res);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  }, []);

  if (load) {
    return <LinearProgress style={{ marginTop: "2%" }} />;
  } else {
    return (
      <div>
        <Dialog
          onClose={(event) => {
            setTags(false);
            history.go(0);
          }}
          open={tags}
          fullWidth
        >
          <ChipList click={true} tags={["AVISTAMIENTO_PERROS"]} />
        </Dialog>
        <Header />
        <div align="center" >
          {editTitle ? <TextField align="center" onChange={(e) => { setNewTitle(e.target.value) }} /> :
            <Typography onClick={() => { setEditTitle(true) }} align="center" variant="h3" className={classes.title} >
              {" "}
              {park.name ? park.name : "No Name Assigned"}{" "}
            </Typography>
          }
        </div>

        <Grid container>
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
          <Chip
            variant="outlined"
            color="primary"
            icon={<TagsIcon />}
            label="Tags"
            onClick={(e) => { setTags(true) }}
          />
        </Typography>
        <div className={classes.divider} >{filter.tags.map((tag, i) => {
          return (
            <Chip size="small" label={tag} icon={<LocalOfferRoundedIcon />} color="primary" onDelete={(e) => {
              filter.tags.splice(i, 1);
              localStorage.setItem("filter", JSON.stringify(filter))
              history.go(0)
            }} />
          )
        })}</div>

        {editDesc ? <TextField onChange={(e) => { setNewDesc(e.target.value) }} className={classes.description} /> :
          <Typography onClick={() => { setEditDesc(true) }} variant="h5" className={classes.description} >
            {park.description ? park.description : "No Description"}
          </Typography>
        }


        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Park Location
          <PlaceRoundedIcon color="primary" />
        </Typography>
        {editLocDesc ? <TextField onChange={(e) => { setNewLocDesc(e.target.value) }} className={classes.description} /> :
          <Typography onClick={() => { setEditLocDesc(true) }} variant="h5" className={classes.description} >
            {park.location.description ? park.location.description : "No Location Description"}
          </Typography>
        }
        <Location />
        <Divider className={classes.divider} />
        <Typography variant="h4" className={classes.descriptionTitle}>
          Plans
          <IconButton variant="contained" color="primary">
            <AccountTreeRoundedIcon />
          </IconButton>
        </Typography>
        {editPlansDesc ? <TextField onChange={(e) => { setNewPlansDesc(e.target.value) }} className={classes.description} /> :
          <Typography onClick={() => { setEditPlansDesc(true) }} variant="h5" className={classes.description} >
            {park.planDescription ? park.planDescription : "No Plan Set Description"}
          </Typography>
        }
        <Grid container spacing={3} align="center" className={classes.planGrid}>
          {park.planList.map((plan) => {
            return (
              <Grid item xs={3}>
                <PlanCard park={park.name} plan={plan} isUpdate={true} />
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
        {editActivitiesDesc ? <TextField onChange={(e) => { setNewActivitiesDesc(e.target.value) }} className={classes.description} /> :
          <Typography onClick={() => { setEditActivitiesDesc(true) }} variant="h5" className={classes.description} >
            {park.activityDescription ? park.activityDescription : "No Activity Set Description"}
          </Typography>
        }
        <Grid container spacing={3} align="center" className={classes.planGrid}>
          {park.activitiesList.map((activity) => {
            return (
              <Grid item xs={3}>
                <ActivityCard park={name} activity={activity} isUpdate={true} />
              </Grid>
            );
          })}
        </Grid>
        <Divider className={classes.divider} />
        <Button variant="contained" color="primary" onClick={handleUpdatePark} fullWidth>
          Update Park
        </Button>
        <Footer />
      </div>
    );
  }
}
