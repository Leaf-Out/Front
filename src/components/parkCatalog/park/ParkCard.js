import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';

export class ParkCard extends React.Component {

    getRating = () => {
        //TODO fetch
        return 3.5
    }

    getName = () => {
        //TODO fetch
        return "Mock Park Name"
    }

    getDescription = () => {
        //TODO fetch
        return "Mock Park description"
    }

    state = {
        rating: this.getRating(),
        name: this.getName(),
        description: this.getDescription()
    }

    render() {

        return (
            <Paper elevation={3}>
                <Grid container direction={"row"}>
                    <Grid container alignItems="stretch" item xs={3} >
                        <ButtonBase>
                            <img alt="complex" src="/public/logo512.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid container item xs={7} direction={"column"}>
                        <Typography>{this.state.name}</Typography>
                        <Typography>{this.state.description}</Typography>
                        
                    </Grid>
                    <Grid container justify="center" item xs={2}>
                        <Grid container justify="center" item xs={12}>
                            <Typography>{this.state.rating}</Typography>
                            <EcoRoundedIcon style={{ fill: '#63ad57' }}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
  