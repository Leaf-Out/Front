import React from 'react';
import {Slider} from './components/Slider'
import {LeafRating} from './components/LeafRating'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '../../elements/Footer';
import Location from './components/Location';
import { Header } from '../../elements/Header';


export class Park extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div>
                <React.Fragment>
                    <Header />
                    <CssBaseline />
                    
                    <Container maxWidth="lg">
                        <br/>
                        <LeafRating/>
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
