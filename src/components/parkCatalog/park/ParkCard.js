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

    state={
        rating: this.getRating()
    }

    render() {

        return (
            <div>
                <Paper elevation={3}>
                    <Grid container spacing={3}>
                        <Grid item>
                            <ButtonBase >
                                <img alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography variant="subtitle1">
                                        Park Name
                                    </Typography>
                                    <Typography gutterBottom = "true" variant="subtitle2" color="textSecondary">
                                        Park Zone
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Park short description
                                    </Typography>
                                    
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1"></Typography>
                                </Grid>
                            </Grid>
                            <Grid>
                                <EcoRoundedIcon style={{ fill: '#63ad57' }}></EcoRoundedIcon>    
                            </Grid>
                            <Grid>
                                <Typography color="textSecondary"> {this.state.rating} </Typography> 
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
  