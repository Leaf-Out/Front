import React from 'react';
import Slider from '../elements/slider/Slider'


export default function Carousel(props) {

    //TODO fetch images from amazon ec3, given an id
    const images = [
        'https://cdn.pixabay.com/photo/2014/08/05/04/38/macaw-410144_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/03/06/10/47/madagascar-4906755_960_720.jpg'
    ]

    return (
        <Slider slides={images}/>
    );

}
