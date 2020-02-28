import React from 'react';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

export class CommentSection extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div>
                <List>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="User Sample1" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Sample comment 1"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Sample comment
                            </Typography>
                            {"This is a comment sample"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="User Sample2" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Sample comment 2"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Sample comment
                            </Typography>
                            {"This is a comment sample"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </div>
        );
    }
}