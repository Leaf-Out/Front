import React from 'react';
import { Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';



export class Description extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {
        type: this.props.type,
      };


    getDescription = ()=>{
        //TODO fetch description list
        var description = [
            {
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tellus malesuada risus efficitur semper. Suspendisse tempus magna lectus, ac varius metus cursus id. Ut gravida id mi et ullamcorper. Morbi congue purus id arcu molestie congue. Aliquam sapien lectus, tristique non nunc vitae, pretium lacinia eros. In quis ullamcorper augue. Sed eu justo erat."
            }
          
        ]
        return description
    }


    render(){
        const { type } = this.state;
        return(

            <div>
                <Typography 
                    component="span"
                    variant="body2"
                    color="textPrimary"
                >
                    {type}
                </Typography>
                <List>
                    {this.getDescription().map(function(description){
                        return (
                            <div>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                {description.content}
                                            </Typography>
                                            <br/>    
                                            </React.Fragment>
                                        }
                                        />
                                    
                                </ListItem>
                            </div>
                                )
                        })
                    }
                </List>
            </div>

        )
    }


}