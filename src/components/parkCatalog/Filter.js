import React from "react";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Icon from "@material-ui/core/Icon";
import RowingIcon from "@material-ui/icons/Rowing";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import TextField from "@material-ui/core/TextField";
import {
  BottomNavigation,
  Popper,
  Chip,
  Divider,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
  bar: {
    borderRadius: "25px",
    border: "2px solid #ede1cc"
  },
  chip: {
    backgroundColor: "#63ad57"
  },
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    background: "#56ab2f" /* fallback for old browsers */,
    background:
      "-webkit-linear-gradient(to right, #a8e063, #56ab2f)" /* Chrome 10-25, Safari 5.1-6 */,
    background:
      "linear-gradient(to right, #a8e063, #56ab2f)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
}));

export function Filter(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [contentEl, setContentEl] = React.useState("Filter Here");

  const getFilterContent = keyWord => {
    //Fetch data
    let items = ["item", "item", "item", "item"];
    return items;
  };

  // const handleChange = (event, newValue) => {
  //   this.setState({
  //     selected: newValue
  //   });
  // };

  const tooglePopper = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const filterByVisitors = () => {
    const wraper = (
      <div>
        <TextField label="Adults" type="number" />
        <TextField label="Childs" type="number" />
      </div>
    );
    setContentEl(wraper);
  };

  const filterByList = Category => {
    let elements = getFilterContent(Category).map(item => {
      return (
        <FormControlLabel
          control={<Checkbox checked={false} value="item" />}
          label={item}
        />
      );
    });
    let content = (
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter by {Category}</FormLabel>
        <FormGroup>{elements}</FormGroup>
      </FormControl>
    );
    setContentEl(content);
  };
  // filterByActivities = () => {};
  const content = <div className={classes.paper}> {contentEl} </div>;

  //Used for toogle the popper
  const open = Boolean(anchorEl);
  return (
    <div className={classes.bar}>
      <Popper open={open} anchorEl={anchorEl} placement="bottom">
        {content}
      </Popper>
      <Chip
        icon={<EmojiPeopleIcon />}
        className={classes.chip}
        label="Visitors"
        onClick={e => {
          filterByVisitors();
          tooglePopper(e);
        }}
      />
      <Chip
        icon={<LocationOnIcon />}
        label="Location"
        className={classes.chip}
        onClick={e => {
          filterByList("Location");
          tooglePopper(e);
        }}
      />
      <Chip
        icon={<RowingIcon />}
        label="Activities"
        className={classes.chip}
        onClick={e => {
          filterByList("Activities");
          tooglePopper(e);
        }}
        // onClick={this.handleClick}
      />

      <Chip
        icon={<RowingIcon />}
        label="More"
        className={classes.chip}
        onClick={e => {
          filterByList("More Options");
          tooglePopper(e);
        }}
      />
    </div>
  );
}
