import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Popper, Chip, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlaceIcon from "@material-ui/icons/Explore";
import PriceIcon from "@material-ui/icons/MonetizationOn";
import RatingIcon from "@material-ui/icons/Eco";
import TagsIcon from "@material-ui/icons/LocalOffer";
import TypeIcon from "@material-ui/icons/LinearScale";
import SearchIcon from "@material-ui/icons/Search";
import FilterContent from "./FilterContent";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bar: {
    marginTop: "1.5%",
    marginLeft: "5%",
    width: "90%",
  },
  chip: {
    // marginLeft: "1.5%",
  },
  sarch_input: {
    marginLeft: "2.5%",
    // width: "auto",
  },
  paper: {
    border: "1px solid",
    borderColor: theme.palette.primary.light,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Filter(props) {
  const classes = useStyles();
  const history = useHistory();
  // State of filters
  const [place, setPlace] = useState();
  const [rating, setRating] = useState();
  const [type, setType] = useState("park");
  const [tags, setTags] = useState();
  const [filter, setFilter] = useState();
  //Popper utilities. Content to display. Open to handle change
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopper, setOpenPopper] = useState(false);

  const getFilterContent = (keyWord) => {
    //Fetch data
    let items = ["item1", "item2", "item3", "item4"];
    return items;
  };

  const tooglePopper = (filterType) => (event) => {
    setFilter(filterType);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setOpenPopper(!openPopper);
  };

  const resetFilters = (event) => {
    localStorage.setItem(
      "filter",
      JSON.stringify({
        name: "",
        location: {},
        rating: "",
        price: [],
        type: "",
        tags: [],
      })
    );
    history.go(0);
  };

  const redirect = (e) =>{
    history.push("/catalog")
  }

  return (
    <Grid container xs={12} className={classes.bar} aling="center" spacing={2}>
      <Popper
        open={openPopper}
        onClose={tooglePopper}
        anchorEl={anchorEl}
        placement="bottom"
      >
        <FilterContent type={filter} />
      </Popper>

      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          icon={<PlaceIcon />}
          label="Place"
          onClick={tooglePopper("place")}
        />
      </Grid>
      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          icon={<PriceIcon />}
          label="Price"
          onClick={tooglePopper("price")}
        />
      </Grid>
      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          icon={<RatingIcon />}
          label="Rating"
          onClick={tooglePopper("rating")}
        />
      </Grid>
      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          icon={<TypeIcon />}
          label="Type"
          onClick={tooglePopper("type")}
        />
      </Grid>
      <Grid item>
        <Chip
          variant="outlined"
          color="primary"
          icon={<TagsIcon />}
          label="Tags"
          onClick={tooglePopper("tags")}
        />
      </Grid>
      <Grid item>
        <TextField
          id="search"
          label="Search by name..."
          // className={classes.sarch_input}
        />
      </Grid>
      <Grid item>
        <IconButton onCLick={ redirect }>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton onClick={resetFilters}>
          <DeleteForeverIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
