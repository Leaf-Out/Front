import React from 'react';
import Carousel from 'nuka-carousel';

export class Slider extends React.Component {
    render() {
        return (
            <Carousel framePadding={"20px"} width={"50%"} cellAlign={"center"}>
                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg" />
                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg" />
                <img src="https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg" />
            </Carousel>
        );
    }
}