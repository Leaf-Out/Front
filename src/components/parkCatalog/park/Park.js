import React from 'react';
import {Slider} from './components/Slider'
import {LeafRating} from './components/LeafRating'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
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
                        <LeafRating/>
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
