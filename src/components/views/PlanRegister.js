import React, { useState } from "react";
import { Header } from "../elements/Header";
import Footer from "../elements/Footer";
import SimpleMap from "../elements/Location";
import {
  TextField,
  TextareaAutosize,
  Fab,
  Container,
  CssBaseline,
  Grid,
  Button,
  IconButton,
  List,
  ListItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ListSubheader from '@material-ui/core/ListSubheader';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  activities: {
    margin: "auto 20% auto 20%",
    width: "50%"
  },
  input: {
    display: "none"
  }
}));

function PlanRegister(props) {
  const classes = useStyles();
  const [park, setPark] = useState({
    name: "",
    description: "",
    activities: [
      {
        name: "",
        description: ""
      }
    ],
    park:"",
    images: [
      {
        src: ""
      }
    ]
  });

  const handleChange = e => {
    setPark({ [e.target.name]: e.target.value });
  };
  const register = data => {
    //postData
  };

  return (
    <div>
      <Header />
      <CssBaseline />
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item container xs={12}>
          <Grid item alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                fullWidth
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Grid>
        </Grid>
        <Grid item xs container>
          <Grid item xs>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Plan name"
              id="park-name"
              onChange={handleChange}
            />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Park description"
            />
            <List subheader={<ListSubheader>Parks</ListSubheader>}
              component="nav"
              aria-label="contacts"

            >
              <ListItem button>
                <ListItemText primary="Park-1" />
              </ListItem>
              <ListItem button>
                <ListItemText inset primary="park-2" />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs container direction="column">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="park-activity"
              label="Activity"
              id="park-activity"
            />
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Activity description"
            />
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
          <Grid item xs container direction="column">
            Fee
          </Grid>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={register()}
        href={"/park"}
      >
        Save
      </Button>
      <Footer />
    </div>
  );
}

export default PlanRegister;
