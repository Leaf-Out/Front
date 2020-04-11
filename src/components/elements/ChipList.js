import React from 'react';
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
                                    <Chip label={tag} icon={<LocalOfferRoundedIcon />} color="primary"/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </DialogContent>
        </React.Fragment>
    );

}