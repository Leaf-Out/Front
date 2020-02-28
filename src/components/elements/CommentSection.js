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

    getComments = ()=>{
        //TODO fetch comment list
        var comments = [
            {
                "author":"Sergio Ruiz",
                "title": "Me Encantó",
                "content": "Pagué por este plan un precio menor al que habría tenido que pagar en otros lugares y es mucho más completo"
            } , 
            {
                "author":"Luis Moreno",
                "title": "Excelente plan en familia",
                "content": "Este plan tiene las actividades perfectas para cada miembro de la familia, me encantó :)"
            }
        ]
        return comments
    }

    render(){
        return (
            <div>
                <List>
                    {
                        this.getComments().map(function(comment){
                            return (
                                <div>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar>
                                                {
                                                comment.author.charAt(0)   
                                                }
                                            </Avatar>
                                            <ListItemText
                                                primary= {comment.title}
                                                secondary={
                                                    <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textPrimary"
                                                    >
                                                        {comment.author}
                                                    </Typography>
                                                    <br/>
                                                    {comment.content}
                                                    </React.Fragment>
                                                }
                                                />
                                        </ListItemAvatar>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            )
                        })  
                    }                 
                </List>
            </div>
        );
    }
}