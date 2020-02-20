import React from 'react';
import './Home.css'
import { Card, CardContent, Typography, Paper, TextField, InputAdornment, Button, IconButton, Grid } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from "@material-ui/icons/Search";
import EcoIcon from '@material-ui/icons/Eco';
import { Slider } from "../parkCatalog/park/components/Slider";
import { Header } from "../parkCatalog/park/components/Header";
import { Image } from '@material-ui/icons';

export class Home extends React.Component {

    render() {
        return (
            <div className="background">
                <Header />
                <div>
                    <Card className="card">
                        <CardContent>
                            <Typography variant="h4">
                                Search your activities
                        </Typography>
                            <br />
                            <form noValidate autoComplete="off">
                                <Paper component="form" className="root">
                                    <IconButton aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <InputBase
                                        className="input"
                                        placeholder="Search Google Maps"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton type="submit" className="iconButton" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider orientation="vertical" className="divider" />
                                    <IconButton color="primary" className="iconButton" aria-label="directions">
                                        <DirectionsIcon />
                                    </IconButton>
                                </Paper>
                                <br />
                                <br />
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Activities"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EcoIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <br />
                                <br />
                                <TextField className="spacer"
                                    id="outlined-number"
                                    label="Adults"
                                    type="number"
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-number"
                                    label="Children"
                                    type="number"
                                    size="small"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <br />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<SearchIcon />}
                                >
                                    Search
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <br />
                <br />
                <div align={"center"}>
                    <Slider />
                </div>
                <div align={"center"}>
                    <Card className="friendsCard">
                        <CardContent>
                            <Grid container spacing={7}>
                                <Grid item xs={5}>
                                    <Paper className="partnersPaper">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                        It has survived not only five centuries,
                                        but also the leap into electronic
                                        typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets
                                        with the release of Letraset sheets
                                        with the release of Letraset sheets
                                        with the release of Letraset sheets
                                    </Paper>
                                </Grid>
                                <Grid item xs={7}>
                                    <Grid container spacing={10}>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={10}>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                        <Grid item>
                                            <Paper className="paperGrid">
                                                <img /*To Put*/ />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}
