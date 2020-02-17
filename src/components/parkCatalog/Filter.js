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

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selected: "childs",
      popperContent: "Filter Here"
    };
  }

  getFilterContent = keyWord => {
    //Fetch data
    let items = ["item", "item", "item", "item"];
    return items;
  };

  handleChange = (event, newValue) => {
    this.setState({
      selected: newValue
    });
  };

  tooglePopper = event => {
    this.setState(prevState => ({
      anchorEl: prevState.anchorEl ? null : event.currentTarget
    }));
  };

  filterByVisitors = () => {
    const gg = (
      <div>
        <TextField label="Adults" type="number" />
        <TextField label="Childs" type="number" />
      </div>
    );
    this.setState({
      popperContent: gg
    });
  };

  filterByList = Category => {
    let elements = this.getFilterContent(Category).map(item => {
      return (
        <FormControlLabel
          control={<Checkbox checked={false} value="item" />}
          label={item}
        />
      );
    });
    const content = (
      <FormControl component="fieldset">
        <FormLabel component="legend">Filter by {Category}</FormLabel>
        <FormGroup>{elements}</FormGroup>
      </FormControl>
    );

    this.setState({
      popperContent: content
    });
  };
  // filterByActivities = () => {};
  render() {
    console.log(this.state.classes());

    const content = (
      <div style={ {
        border: "1px solid",
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper
      }}> {this.state.popperContent} </div>
    );
    const open = Boolean(this.state.anchorEl);
    return (
      <div>
        <Popper
          open={open}
          anchorEl={this.state.anchorElanchorEl}
          placement="bottom"
        >
          {content}
        </Popper>
        <Chip
          icon={<EmojiPeopleIcon />}
          label="Visitors"
          onClick={e => {
            this.filterByVisitors();
            this.tooglePopper(e);
          }}
        />
        <Chip
          icon={<LocationOnIcon />}
          label="Location"
          onClick={e => {
            this.filterByList("Location");
            this.tooglePopper(e);
          }}
        />
        <Chip
          icon={<RowingIcon />}
          label="Activities"
          // onClick={this.handleClick}
        />

        <Chip icon={<RowingIcon />} label="More" onClick={this.handleClick} />
      </div>
    );
  }
}
