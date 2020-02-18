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

export function Filter(props) {
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
    // this.setState(prevState => ({
    //   anchorEl: prevState.anchorEl ? null : event.currentTarget
    // }));
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
  const content = <div> {contentEl} </div>;

  //Used for toogle the popper
  const open = Boolean(anchorEl);
  return (
    <div>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom"
      >
        {content}
      </Popper>
      <Chip
        icon={<EmojiPeopleIcon />}
        label="Visitors"
        onClick={e => {
          filterByVisitors();
          tooglePopper(e);
        }}
      />
      <Chip
        icon={<LocationOnIcon />}
        label="Location"
        onClick={e => {
          filterByList("Location");
          tooglePopper(e);
        }}
      />
      <Chip
        icon={<RowingIcon />}
        label="Activities"
        // onClick={this.handleClick}
      />

      <Chip icon={<RowingIcon />} label="More" />
    </div>
  );
}
