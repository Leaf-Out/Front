import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, TextField, IconButton } from '@material-ui/core';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import { useHistory } from "react-router-dom";

import { post } from '../../api/Get';

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
    const history = useHistory();

    const [commentContent, setCommentContent] = useState("")
    const postComment = (e) =>{        
        var path
        if (props.pay.type === "PARK") {
            path = "/parks/"
        } else if (props.pay.type === "PLAN") {
            path = "/plans/"
        } else {
            path = "/activities/"
        }
        post(path + `${props.pay.name}/feedback/${localStorage.getItem("email")}/content/` + commentContent)
            .then((res) => {
                history.go(0)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <List>
                {
                    props.pay.feedback.comments.map(function (comment) {
                        
                        return (
                            <div>
                                <ListItem alignItems="flex-start" className={classes.comments}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            {
                                                comment.user.email.charAt(0)
                                            }
                                        </Avatar>
                                        <ListItemText
                                            primary={<b>{comment.user.name}</b>}
                                            secondary={
                                                <div>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textSecondary"
                                                    >
                                                        {comment.user.email}
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
                    localStorage.getItem("email").charAt(0)
                }
            </Avatar>
            <Typography
                component="span"
                variant="body2"
                color="textSecondary"
                className={classes.comments}
            >
                {localStorage.getItem("email")}
            </Typography><br />
            <TextField label="Tell everyone about it ..." className={classes.comment} disableRipple={true} disableFocusRipple={true}
             onChange={(e)=>{setCommentContent(e.target.value)}}/>
            <IconButton variant="contained" className={classes.uploadIcon} size="medium" onClick={postComment}>
                <PublishRoundedIcon />
            </IconButton>
        </div>
    );
}