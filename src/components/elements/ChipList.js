import React, { useEffect } from 'react';
import { DialogTitle, DialogContent, Chip, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';

const useStyles = makeStyles(theme => ({
    tag: {
        marginTop: "2%"
    },
}));

export default function ChipList(props) {
    const classes = useStyles()


    const add = (tag)=>{
        let filter = JSON.parse(localStorage.getItem("filter"))
        if (!filter.tags.includes(tag)){
            filter.tags.push(tag)
            localStorage.setItem("filter", JSON.stringify(filter))
        }
    }
    return (
        <React.Fragment>
            <DialogTitle> <b>Tags</b> </DialogTitle>
            <Divider />
            <DialogContent fullWidth>
                <Grid container align="center">
                    {
                        props.tags.map(function (tag) {
                            return (
                                <Grid xs={3} className={classes.tag}>
                                    {
                                        props.click ?
                                        <Chip label={tag} icon={<LocalOfferRoundedIcon />} color="primary" onClick={(e) => add(tag)} />
                                        :
                                        <Chip label={tag} icon={<LocalOfferRoundedIcon />} color="primary"/>
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </DialogContent>
        </React.Fragment>
    );

}