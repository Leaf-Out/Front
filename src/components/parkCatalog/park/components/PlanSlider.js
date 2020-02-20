import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { PlanCard } from '../../plan/PlanCard';

export class PlanSlider extends React.Component {
    render() {
        return (
            <Carousel framePadding={"20px"} width={"50%"} cellAlign={"center"}>
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
                
            </Carousel>
        );
    }
}