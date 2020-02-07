import React from 'react';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import Icon from '@material-ui/core/Icon';
import ExploreIcon from '@material-ui/icons/Explore';
import RowingIcon from '@material-ui/icons/Rowing';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'


export class Filter extends React.Component {
    in = (icon,type) => {
        console.log(icon);
        
        return (
            <div>
                <div >
                <Icon>add_circle</Icon>

                    <Icon>
                        {icon}
                    </Icon>
                </div>
                <TextField type={type} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >

                    <div>
                        <div >
                            <ChildCareIcon />
                        </div>
                        <TextField type="number" />
                    </div>
                    <div>
                        <div >
                            <EmojiPeopleIcon />
                        </div>
                        <TextField type="number" />
                    </div>
                    <div>
                        <div >
                            <ExploreIcon />
                        </div>
                        <TextField type="text" />
                    </div>
                    <div>
                        <div >
                            <RowingIcon />
                        </div>
                        <TextField type="text" />
                    </div>
                </Grid>
                {/* {this.in("ChildCareIcon", "number")}
                {this.in("EmojiPeopleIcon", "number")}
                {this.in("RowingIcon", "text")}
                {this.in("ExploreIcon", "text")} */}
            </div>
        )
    }
}