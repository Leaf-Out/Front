import React from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Image from '../../static/src/img/background.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

export class Home extends React.Component {
    render() {
        return (
            <Container>
                <Paper style={styles.paperContainer}>

                </Paper>
            </Container>
        );
    }
}
