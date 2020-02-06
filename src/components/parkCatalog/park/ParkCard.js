import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

export class ParkCard extends React.Component {
    render() {

        return (
            <div >
                <Paper >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <img alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Standard license
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>
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
