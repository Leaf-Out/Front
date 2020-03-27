import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded'

const CustomColorRating = withStyles(theme => ({
    iconFilled: {
        color: '#c5e1a5',
    },
    iconHover: {
        color: '#acc982',
    },
    iconEmpty: {
        color: '#bdbdbd'
    }
}))(Rating);

export default function LeafRating() {
    const [isVoted, setIsVoted] = useState(false);
    const [rating, setRating] = useState(0);

    return (
        <CustomColorRating
            precision={0.5}
            value={rating}
            icon={<EcoRoundedIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
                setRating(newValue);
            }}
        />
    )
}

