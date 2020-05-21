import React, { useEffect, useState } from "react";
import {
  GridList,
  LinearProgress,
  Grid,
  makeStyles,
  Divider,
  Chip,
} from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import ParkCard from "../elements/ParkCard";
import { get } from "../../api/Get";
import Header from "../elements/Header";
import { Filter } from "../elements/Filter";
import { useHistory } from "react-router-dom";
import PlanCard from "../elements/PlanCard";
import ActivityCard from "../elements/ActivityCard";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "5%",
    marginLeft: "5%",
    width: "25%",
    height: "53%",
  },
  title: {
    marginLeft: "7.5%",
    marginRight: "7.5%",
    marginTop: "7.5%",
  },
  grid: {
    marginTop: "1.5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
  },
}));

export default function Catalog() {
  const classes = useStyles();
  const history = useHistory();
  const [parks, setParks] = useState({name:"",location:{},rating:"",price:[],type:"",tags:[]})
  const [filter, setFilter] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setFilter(JSON.parse(localStorage.getItem("filter")))
    console.log(filter);
    
    // type
    let f = JSON.parse(localStorage.getItem("filter"))
    if(f.type === null){
      f["type"] = "parks"
    }
    let base = `/${f.type}/`
    // tags
    if(f.tags.length !== 0){
      let api = base + "tags"
      get(api)
      .then((res) => {
        setParks(res);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoad(false);
      });
    // Region
    } else{
      get(base)
            .then((res) => {
              setParks(res);
              setLoad(false);
            })
            .catch((err) => {
              console.log(err);
              setError(true);
              setLoad(false);
            });
    }    
  }, []);

  if (load) {
    return <LinearProgress style={{ marginTop: "2%" }} />;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <div>
        <Header />
        <Filter />
        <div className={classes.grid} >{filter.tags.map((tag,i) => {
          return(
            <Chip size="small" label={tag} icon={<LocalOfferRoundedIcon />} color="primary" onDelete={(e) => {
              filter.tags.splice(i, 1);
              localStorage.setItem("filter",JSON.stringify(filter))
              history.go(0)
            }} />
          )
        })}</div>
        <Grid container xs={12} spacing={3} className={classes.grid}>
          {parks.map((card) => {
            let item
            if(filter.type === "parks"){
              item = <ParkCard park={card}  />
            } else if(filter.type === "plans"){
              item = <PlanCard park={card}  />
            } else if(filter.type === "activities"){
              item = <ActivityCard park={card}  />
            }
            return (
              <Grid item xs={3}>
                {item}
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

