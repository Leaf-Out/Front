import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export class PlanCard extends React.Component {

    getRating = () => {
        //TODO fetch
        return 3.5
    }

    getName = () => {
        //TODO fetch
        return "Mock Plan Name"
    }

    getDescription = () => {
        //TODO fetch
        return "Mock Plan description"
    }

    getPrice = () => {
        //TODO fetch
        return 15000
    }

    state = {
        rating: this.getRating(),
        name: this.getName(),
        description: this.getDescription(),
        price: this.getPrice()
    }

    render() {
        return (
            <Paper elevation={3}>
                <Grid container direction={"row"}>
                    <Grid container alignItems="stretch" item xs={3} >
                        <ButtonBase href={"/plan"}>
                            <img alt="complex" src="/public/logo512.png" />
                        </ButtonBase>
                    </Grid>
                    <Grid container item xs={7}>
                        <Grid item xs={12}>
                            <Typography>{this.state.name}</Typography>
                            <Typography>{this.state.description}</Typography>
                        </Grid>
                        <Grid container justify="flex-end" alignItems="flex-end" item xs={12}>
                            <Typography>$ {this.state.price}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" item xs={2}>
                        <Grid container justify="center" item xs={12}>
                            <Typography>{this.state.rating}</Typography>
                            <EcoRoundedIcon style={{ fill: '#63ad57' }}/>
                        </Grid>
                        <Grid container align="flex-start" item xs={12}>
                            <ShoppingCartOutlinedIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}
