import React from 'react';
import Header from '../elements/Header';
import { makeStyles } from '@material-ui/core/styles'
import Footer from '../elements/Footer';
import { Typography, Divider, CardMedia, Grid, IconButton } from '@material-ui/core';
import LeafRating from '../elements/LeafRating';
import StyleIcon from '@material-ui/icons/Style';
import CommentSection from "../elements/CommentSection";
import FeeTable from '../elements/FeeTable';
import { Link } from 'react-router-dom';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1%"
    },
    rating: {
        marginTop: "2%",
        marginLeft: "7.5%",
    },
    fee: {
        marginTop: "1%",
        marginBottom: "1%",
    },
    divider: {
        marginLeft: "7.5%",
        width: "83.5%"
    },
    descriptionTitle: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%"
    },
    description: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%",
        marginBottom: "1.5%",
    },
    image: {
        marginLeft: "29%",
        marginTop: "1.5%",
        width: "42%",
        height: window.innerHeight * 0.43,
        align: "center"
    },
    link: {
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
}));

export default function Plan(props) {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <Typography align="center" variant="h3" className={classes.title}>Plan Name </Typography>
            <Link to="/park" className={classes.link}>
                <Typography align="center" variant="h5">Park Name <StyleIcon /></Typography>
            </Link>
            <Grid container>
                <Grid item xs={5} continer justify="flex-start" className={classes.rating}>
                    <LeafRating />
                </Grid>
                <Grid item xs={5} container justify="flex-end" className={classes.fee}>
                    <FeeTable prices={
                        {
                            "ADULT": 30000,
                            "FOREIGN": 45000,
                            "CHILDREN": 15000
                        }
                    } />
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <div>
                <CardMedia
                    className={classes.image}
                    image='https://cdn.pixabay.com/photo/2015/04/16/17/02/whitewater-725935_1280.jpg'
                />
                <Typography variant="h4" className={classes.descriptionTitle}>
                    Plan Description
                    <IconButton variant="contained" color="primary">
                        <LocalOfferRoundedIcon />
                    </IconButton>
                </Typography>
                <Typography variant="h5" className={classes.description}>
                    Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic
                    typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets
                    with the release of Letraset sheets
                    with the release of Letraset sheets
                    with the release of Letraset sheets
                </Typography>
            </div>
            <Divider className={classes.divider} />
            <div align={"center"}>
                <Typography>Activity grid as a itinerary</Typography>
            </div>
            <Divider className={classes.divider} />
            <Divider className={classes.divider} />
            <Typography variant="h4" className={classes.descriptionTitle}>
                Comment Section
                    <IconButton variant="contained" color="primary">
                    <CommentIcon />
                </IconButton>
            </Typography>
            <CommentSection comments={[
                {
                    "author": "Sergio Ruiz",
                    "title": "Me Encantó",
                    "content": "Pagué por este plan un precio menor al que habría tenido que pagar en otros lugares y es mucho más completo"
                },
                {
                    "author": "Luis Moreno",
                    "title": "Excelente plan en familia",
                    "content": "Este plan tiene las actividades perfectas para cada miembro de la familia, me encantó :)"
                }
            ]} />
            <Footer />
        </div>
    );

}