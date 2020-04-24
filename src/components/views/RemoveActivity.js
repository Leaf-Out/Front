import React, { useEffect, useState } from "react";
import {
  GridList,
  LinearProgress,
  Grid,
  makeStyles,
  Divider,
  Chip,
} from "@material-ui/core";
import { get } from "../../api/Get";
import Header from "../elements/Header";

import { useHistory } from "react-router-dom";
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

export default function RemoveActivity() {
  const classes = useStyles();
  const history = useHistory();
  const [activities, setActivities] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    get(`/activities/`)
      .then((res) => {
        setActivities(res);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoad(false);
      });
  }, []);

  if (load) {
    return <LinearProgress style={{ marginTop: "2%" }} />;
  } else if (error) {
    return <div>Error</div>;
  } else {
    return (
      <div>
        <Header />
        <Grid container xs={12} spacing={3} className={classes.grid}>
          {activities.map((card) => {
            return (
              <Grid item xs={3}>
                <ActivityCard activity={card} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
