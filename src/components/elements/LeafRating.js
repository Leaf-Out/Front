import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded'

const CustomColorRating = withStyles(theme => ({
    iconFilled: {
        color: '#39796b',
    },
    iconHover: {
        color: '#004d40',
    },
    iconEmpty: {
        color: '#b0bec5'
    }
}))(Rating);

export default function LeafRating() {
    const [isVoted, setIsVoted] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <CustomColorRating
            precision={0.5}
            value={rating}
            icon={<EcoRoundedIcon fontSize="large" />}
            onChange={(event, newValue) => {
                setRating(newValue);
            }}
        />
    )
}

