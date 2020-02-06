import React from 'react';
import Slider from './components/Slider'


export class Park extends React.Component{
    constructor(props) {
        super(props);
        const sections = [{ title: 'Home', url: '#' },
            { title: 'Who are we', url: '#' },
            { title: 'Sign in ', url: '#' },
            { title: 'Sign up', url: '#' }]
    }



    render(){
        return (
            <div>
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Header title="Park" sections={sections} />
                        <Slider />
                    </Container>
                </React.Fragment>
            </div>
        );



    }



}