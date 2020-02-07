import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';

export class ParkCard extends React.Component {
    
    render() {

        return (
            <div >
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
                                    <Typography gutterBottom variant="subtitle1">
                                        Park Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Description
                                    </Typography>
                                    
                                </Grid>
                                <Grid item>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                  <Typography component="legend">Custom icon and color</Typography>
                                  <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={value => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    precision={0.5}
                                    icon={<EcoRoundedIcon fontSize="inherit" 
                                    />}
                                  />
                                </Box>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}
  
const StyledRating = withStyles({
  iconFilled: {
    color: '#c2e8bc',
  },
  iconHover: {
    color: '#63ad57',
  },
})(Rating);
  