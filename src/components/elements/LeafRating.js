import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import EcoRoundedIcon from '@material-ui/icons/EcoRounded'
import { useHistory } from 'react-router-dom';
import { post } from '../../api/Get';

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

export default function LeafRating(props) {
    const [isVoted, setIsVoted] = useState(false);
    const [rating, setRating] = useState(props.pay.feedback.rating);
    const history = useHistory()
    const vote = (value) => {
        var path
        if (props.pay.type === "PARK") {
            path = "/parks/" + props.pay.name + "/rating"
        } else if (props.pay.type === "PLAN") {
            path = "/plans/" + props.pay.name + "/rating"
        } else {
            path = "/activities/" + props.pay.name + "/rating"
        }
        post(path, {"rating":value})
            .then((res) => {
                history.go(0)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <CustomColorRating
            precision={0.5}
            value={rating}
            icon={<EcoRoundedIcon fontSize="large" />}
            onChange={(event, newValue) => {
                vote(newValue);
            }}
        />
    )
}

