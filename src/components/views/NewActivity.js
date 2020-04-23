import React, { useEffect, useState } from "react";
import LeafRating from "../elements/LeafRating";
import {
    Typography,
    Divider,
    CardMedia,
    Grid,
    IconButton,
    LinearProgress,
    CircularProgress,
    Dialog,
    TextField,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import Footer from "../elements/Footer";
import Location from "../elements/Location";
import Header from "../elements/Header";
import FeeTable from "../elements/FeeTable";
import PlaceRoundedIcon from "@material-ui/icons/PlaceRounded";
import ChipList from "../elements/ChipList";
import SimpleImageSlider from "react-simple-image-slider";
import { useParams, useHistory } from "react-router-dom";
import { Chip } from "@material-ui/core";
import TagsIcon from "@material-ui/icons/LocalOffer";
import { logDOM } from "@testing-library/react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


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
    link: {
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
}));

export default function NewActivity(props) {
    const classes = useStyles();
    const [tags, setTags] = useState(false);
    const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("filter")));
    const [priceNumber, setPriceNumber] = useState(1);
    const [prices, setPrices] = useState({ 1: { "Population": "", "Price": "" } });
    const images = [
        {
            url:
                "https://cdn.pixabay.com/photo/2014/10/04/12/18/stone-arch-472976_1280.jpg",
        },
        {
            url:
                "https://cdn.pixabay.com/photo/2017/10/12/06/24/allen-park-2843660_1280.jpg",
        },
        {
            url:
                "https://cdn.pixabay.com/photo/2017/05/03/09/12/architecture-2280543_1280.jpg",
        },
        {
            url:
                "https://cdn.pixabay.com/photo/2016/08/23/19/51/park-1615341_1280.jpg",
        },
    ];
    const { name } = useParams();
    const history = useHistory();
    const [ActivityName, setActivityName] = useState("");
    const [description, setDescription] = useState("");
    const [parkName,setParkName] = useState("");
    const [planName, setPlanName] = useState("");


    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const setFeePopulation = (event, index) => {
        let currentPrice = prices;
        console.log(index);
        console.log(currentPrice);
        //currentPrice[index].Population = event.taget.value
        //setPrices(currentPrice)
    }
    const setFeePrice = (event, index) => {
        let currentPrice = prices;
        console.log(index);
        console.log(currentPrice);
        //currentPrice.index.Price = event.taget.value
        //setPrices(currentPrice)
    }
    const handleCreateActivity = (event) => {
        console.log(parkName)
        console.log(ActivityName)
        console.log(planName)
        console.log(description)
        console.log(prices)

    }
    return (
        <div>
            <Dialog
                onClose={(event) => {
                    setTags(false);
                    history.go(0);
                }}
                open={tags}
                fullWidth
            >
                <ChipList click={true} tags={["AVISTAMIENTO_PERROS"]} />
            </Dialog>
            <Header />
            <div align="center">
                <TextField label="Activity name" className={classes.title} onChange={(e) => { setActivityName(e.target.value) }}>

                </TextField>
            </div>
            <Divider className={classes.divider} />
            <div align="center">
                <TextField label="Park name" className={classes.title} onChange={(e) => { setParkName(e.target.value) }}>

                </TextField>
            </div>
            <div align="center">
                <TextField label="Plan name" className={classes.title} onChange={(e) => { setPlanName(e.target.value) }}>

                </TextField>
            </div>
            <Divider className={classes.divider} />
            <Grid container className={classes.divider} justify="center" >
                {Array.from({ length: priceNumber }, (i) => i).map((i, index) => {
                    return (
                        <Grid container justify="center">
                            <Grid>
                                <Typography>
                                    {index}
                                </Typography>
                            </Grid>
                            <Grid>
                                <TextField label="Population" onChange={setFeePopulation(index)}>

                                </TextField>
                            </Grid>
                            <Grid>
                                <TextField label="Price" onChange={setFeePrice(index)}>

                                </TextField>
                            </Grid>
                        </Grid>
                    )

                })}
                <IconButton>
                    <AddIcon onClick={(e) => { setPriceNumber(priceNumber + 1) }}></AddIcon>
                </IconButton>
                <IconButton>
                    <RemoveIcon onClick={(e) => { priceNumber > 1 ? setPriceNumber(priceNumber - 1) : setPriceNumber(priceNumber) }}></RemoveIcon>
                </IconButton>
            </Grid>
            <Divider className={classes.divider} />
            <SimpleImageSlider
                width={window.innerWidth * 0.42}
                height={window.innerHeight * 0.43}
                images={images}
                className={classes.image}
                style={{ marginLeft: "29%", marginTop: "1.5%" }}
            />
             <Divider className={classes.divider} />
            <Typography variant="h4" className={classes.descriptionTitle}>
                Activity Description
                 <Chip
                    variant="outlined"
                    color="primary"
                    icon={<TagsIcon />}
                    label="Tags"
                    onClick={(e) => { setTags(true) }}
                />
            </Typography>
            <div className={classes.divider} >{filter.tags.map((tag, i) => {
                return (
                    <Chip size="small" label={tag} icon={<LocalOfferRoundedIcon />} color="primary" onDelete={(e) => {
                        filter.tags.splice(i, 1);
                        localStorage.setItem("filter", JSON.stringify(filter))
                        history.go(0)
                    }} />
                )
            })}</div>
            <TextField label="Activity description" className={classes.divider} variant="outlined" onChange={(e) => { setDescription(e.target.value) }}>
            </TextField>
            
            <Divider className={classes.divider} />
                <Button onClick={handleCreateActivity} fullWidth>
                    Register Activity
                </Button>
            <Footer />
        </div>
    );

}