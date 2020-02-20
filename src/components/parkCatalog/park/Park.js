import React from 'react';
import {Slider} from './components/Slider'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import {Header} from "../../elements/Header";
import Location from "./components/Location"
import Footer from "../../elements/Footer";






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
                        <Header title="Park x"  />
                        <br/>
                        <div align={"center"}>
                            <Slider  />
                        </div>
                        <div align={"center"}>
                            <Location />
                        </div>
                        <br/>
                        <Footer/>
                    </Container>
                </React.Fragment>
            </div>
        );



    }
}


