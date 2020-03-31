import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, TextField, IconButton } from '@material-ui/core';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';

const useStyles = makeStyles(theme => ({
    divider: {
        marginLeft: "11%",
        width: "75%"
    },
    avatar: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.light
    },
    postAvatar: {
        marginLeft: "7.5%",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.light
    },
    comments: {
        marginTop: "0.5%",
        marginBottom: "0.5%",
        marginLeft: "7.5%",
    },
    comment: {
        marginTop: "0.5%",
        marginBottom: "0.5%",
        marginLeft: "7.5%",
        width: "79.5%"
    },
    uploadIcon: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.light,        
    },
    '&:hover': {
        disableRipple: true,
        disableFocusRipple: true,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.light
    }
}));

export default function CommentSection(props) {
    const classes = useStyles()
    return (
        <div>
            <List>
                {
                    props.comments.map(function (comment) {
                        return (
                            <div>
                                <ListItem alignItems="flex-start" className={classes.comments}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            {
                                                comment.author.charAt(0)
                                            }
                                        </Avatar>
                                        <ListItemText
                                            primary={<b>{comment.title}</b>}
                                            secondary={
                                                <div>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textSecondary"
                                                    >
                                                        {comment.author}
                                                    </Typography>
                                                    <br />
                                                    <Typography
                                                        component="span"
                                                        variant="body1"
                                                        color="textPrimary"
                                                    >
                                                        {comment.content}
                                                    </Typography>

                                                </div>
                                            }
                                        />
                                    </ListItemAvatar>
                                </ListItem>
                                <Divider className={classes.divider} />
                            </div>
                        )
                    })
                }
            </List>
            <Typography variant="h6" className={classes.comments}> <b>How was your experience?</b> </Typography>
            <Avatar className={classes.postAvatar}>
                {
                    //Inicial del usuario actualmente logeado
                    "U"
                }
            </Avatar>
            <Typography
                component="span"
                variant="body2"
                color="textSecondary"
                className={classes.comments}
            >
                Logged User
            </Typography><br />
            <TextField label="Tell everyone about it ..." className={classes.comment} disableRipple={true} disableFocusRipple={true} />
            <IconButton variant="contained" className={classes.uploadIcon} size="medium">
                <PublishRoundedIcon />
            </IconButton>
        </div>
    );
}