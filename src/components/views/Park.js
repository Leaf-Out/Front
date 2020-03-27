import React, { useEffect, useState } from 'react';
import { Slider } from '../elements/Slider'
import { LeafRating } from '../elements/LeafRating'
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from '../elements/Footer';
import Location from '../elements/Location';
import { Header } from '../elements/Header';
import { PlanSlider } from '../elements/PlanSlider';
import { Typography } from '@material-ui/core';
import { useParams, useHistory } from "react-router-dom";
import { axios } from "axios";


export function Park(props) {

    const history = useHistory();
    const { parkId } = useParams();
    const [park, setPark] = useState({});
    const url = `http://localhost:8080/parks/` + parkId

    const getData = async () => {
        await axios.get(url, { "headers": { "Authorization": "Bearer " + localStorage.getItem("token") } })
            .then(res => {
                setPark(res.data)
            })
    };

    useEffect(() => {
        getData();
    }, [1]);

    return (
        <div>
            <React.Fragment>
                <Header />
                <CssBaseline />

                <Container maxWidth="lg">
                    <Typography align="center">{park.name}</Typography>
                    <br />
                    <LeafRating />
                    <div align={"center"}>
                        <Slider />
                    </div>
                    <div align={"center"}>
                        <Location />
                    </div>
                    <div align={"center"}>
                        <PlanSlider parkId={parkId} />
                    </div>
                    <br />
                    <Footer />
                </Container>
            </React.Fragment>
        </div>
    );
}
