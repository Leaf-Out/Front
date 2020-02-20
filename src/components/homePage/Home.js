import React from 'react';
import './Home.css'
import { Card, CardContent, Typography, Paper, TextField, InputAdornment, Button, IconButton } from "@material-ui/core";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import DirectionsIcon from '@material-ui/icons/Directions';
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from "@material-ui/icons/Search";
import EcoIcon from '@material-ui/icons/Eco';

export class Home extends React.Component {

    render() {
        return (
            <div className="background">
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
                <div>
                </div>
            </div>
        );
    }
}
