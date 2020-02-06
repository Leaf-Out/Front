import React from 'react';
import Slider from './components/Slider'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Header from "./components/Header";

const sections = [{ title: 'Home', url: '#' },
    { title: 'Who we are', url: '#' },
    { title: 'Sign in ', url: '#' },
    { title: 'Sign up', url: '#' }]



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
                        <Header title="Park x" sections={sections} />
                        <br/>
                        <div align={"center"}>
                            <Slider  />
                        </div>

                    </Container>
                </React.Fragment>
            </div>
        );



    }
}


