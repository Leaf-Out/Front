import React from 'react';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Icon from '@material-ui/core/Icon';
import RowingIcon from '@material-ui/icons/Rowing';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TextField from '@material-ui/core/TextField';
import { BottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: 'childs'
        }
    }
    render() {
        return (
            <div>
                <BottomNavigation value={this.state.selected} onChange={this.handleChange}>
                    <BottomNavigationAction label="childs" value="childs" icon={<ChildCareIcon />} />
                    <BottomNavigationAction label="adults" value="adults" icon={<EmojiPeopleIcon />} />
                    <BottomNavigationAction label="location" value="location" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="activities" value="activities" icon={<RowingIcon />} />
                </BottomNavigation>
            </div>
        )
    }

    handleChange = (event, newValue) => {
        this.setState( {
            selected: newValue
        });
      }
}