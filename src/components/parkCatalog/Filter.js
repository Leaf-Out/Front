import React from "react";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Icon from "@material-ui/core/Icon";
import RowingIcon from "@material-ui/icons/Rowing";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import TextField from "@material-ui/core/TextField";
import { BottomNavigation, Popper, Chip, Divider } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selected: "childs",
      poperContent: "Filter Here"
    };
  }
  handleChange = (event, newValue) => {
    this.setState({
      selected: newValue
    });
  };

  handleClick = (event) => {
    this.setState(prevState => ({
      anchorEl: prevState.anchorEl ? null : event.currentTarget
    }));
  };

  filterByVisitors = () => {
    this.setState({
        poperContent:(
            <div>
                <TextField type="number"> Adults</TextField>
                <TextField type="number"> Childs</TextField>
            </div>
        )
    })
  };

  filterByList = (Category) => {
    this.setState({poperContent:(<div></div>)})
  };
  filterByActivities = () => {};
  render() {
    const content = (<div> {this.state.poperContent} </div>);
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
          onClick={this.handleClick}
        />
        <Chip
          icon={<LocationOnIcon />}
          label="Location"
          onClick={this.handleClick}
        />
        <Chip
          icon={<RowingIcon />}
          label="Activities"
          onClick={this.handleClick}
        />

        <Chip icon={<RowingIcon />} label="More" onClick={this.handleClick} />
      </div>
    );
  }
}
