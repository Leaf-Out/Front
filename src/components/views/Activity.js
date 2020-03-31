import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Slider from '../elements/slider/Slider';
import SimpleImageSlider from "react-simple-image-slider";

const useStyles = makeStyles(theme => ({
}));

export default function Activity() {
    const classes = useStyles()
    const images = [
        {"url":"https://cdn.pixabay.com/photo/2016/03/09/09/59/men-1245982_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2017/02/16/17/52/rafting-2071980_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2016/09/04/19/27/paraglider-1644986_1280.jpg"},
        {"url":"https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg"}        
    ]
    return (
        <SimpleImageSlider
            width={300}
            height={250}
            images={images}
        />
    );

}
