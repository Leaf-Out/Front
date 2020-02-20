import React from 'react';
import {Slider} from './components/Slider'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import makeStyles from "@material-ui/core/styles/makeStyles";
import {Header} from "./components/Header";






export class Park extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <br/>
                        <div align={"center"}>
                            <Slider  />
                        </div>
                        <br/>


                    </Container>
                </React.Fragment>
            </div>
        );



    }
}


