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
import {post} from "../../api/Get";


const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: "1%",
        alignSelf: "center",
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
        marginTop: "1.5%",
        marginLeft: "7.5%",
        width: "83.5%",
    },
    descriptionTitle: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%",
    },
    description: {
        marginLeft: "7.5%",
        marginRight: "7.5%",
        marginTop: "1.5%",
        marginBottom: "1.5%",
    },
    planGrid: {
        marginTop: "1.5%",
        marginBottom: "1.5%",
        marginLeft: "7.5%",
        marginRight: "5.5%",
        width: "85%",
    },
}));



export default function NewPark() {
    const classes = useStyles();
    const [tags, setTags] = useState(false);
    const [filter, setFilter] = useState(JSON.parse(localStorage.getItem("filter")));
    const [priceNumber, setPriceNumber] = useState(0);
    const [prices, setPrices] = useState({ 0: { "Population": "", "Price": "" } });
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
    const [parkName, setParkName] = useState("");
    const [description, setDescription] = useState("");
    const [locationDescription, setLocationDescription] = useState("");
    const [region, setRegion] = useState("");
    const [planDescription,setPlanDescription] = useState("");
    const [activityDescription,setActivityDescription] = useState("");


    const [load, setLoad] = useState(true);
    const [error, setError] = useState(false);
    const setFeePopulation = (index,price) => {
        let currentPrice = prices;
        currentPrice[index].Population = price
        setPrices(currentPrice)
    }
    const setFeePrice = (index,value) => {

        let currentPrice = prices;
        currentPrice[index].Price = value
        setPrices(currentPrice)
    }
    const addNewPrice = (index) => {
        setPriceNumber(index )
        let currentPrice = prices
        currentPrice[index] = { "Population": "", "Price": "" }
    }
    const removeNewPrice = (index) => {
        let currentPrice = prices
        delete currentPrice[index]
        setPrices(currentPrice)
        setPriceNumber(index -1)

    }

    const handleCreatePark = (event) => {

        var Location = {
            longitud: 5.314474,
            latitud: -68.611774,
            region: region,
            description:locationDescription
        }
        var feeTable = {

        }
        Object.values(prices).map((e) => {
            feeTable[e.Population] = e.Price
        })
        delete feeTable[""]
        var feedback = {
            comments:[],
            rating: 5.0
        }
        var newPark = {
            name: parkName,
            description: description,
            prices: feeTable,
            planDescription: planDescription,
            activityDescription:activityDescription,
            location:Location,
            feedback: feedback

        }
        post( "/parks" ,newPark)
            .then((res) => {
                history.push("/")
            })
            .catch((err) => {
                console.log(err);
            })

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
                <TextField label="park name" className={classes.title} onChange={(e) => { setParkName(e.target.value) }}>

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
                                <TextField label="Population" onChange={(event) => {setFeePopulation(index,event.target.value)}}>

                                </TextField>
                            </Grid>
                            <Grid>
                                <TextField label="Price" onChange={(event) => {setFeePrice(index,event.target.value)}}>>

                                </TextField>
                            </Grid>
                        </Grid>
                    )

                })}
                <IconButton>
                    <AddIcon onClick={(e) => {addNewPrice(priceNumber +1 ) }}></AddIcon>
                </IconButton>
                <IconButton>
                    <RemoveIcon onClick={(e) => { priceNumber > 1 ? removeNewPrice(priceNumber) : setPriceNumber(priceNumber) }}></RemoveIcon>
                </IconButton>
            </Grid>
            <SimpleImageSlider
                width={window.innerWidth * 0.42}
                height={window.innerHeight * 0.43}
                images={images}
                className={classes.image}
                style={{ marginLeft: "29%", marginTop: "1.5%" }}
            />
            <Typography variant="h4" className={classes.descriptionTitle}>
                Park Description
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
            <TextField label="park description" className={classes.divider} variant="outlined" onChange={(e) => { setDescription(e.target.value) }}>
            </TextField>
            <Divider className={classes.divider} />
            <Typography variant="h4" className={classes.descriptionTitle}>
                Park Location
        <PlaceRoundedIcon color="primary" />
            </Typography>
            <TextField label="park location description" className={classes.divider} variant="outlined" onChange={(e) => { setLocationDescription(e.target.value) }}>

            </TextField>
            <TextField label="park region" className={classes.description} onChange={(e) => { setRegion(e.target.value) }}>

            </TextField>
            <Location />
            <Divider className={classes.divider} />
            <TextField label="plan description" className={classes.divider} variant="outlined" onChange={(e) => { setPlanDescription(e.target.value) }}>
            </TextField>
            <Divider className={classes.divider} />

            <TextField label="Activity description" className={classes.divider} variant="outlined" onChange={(e) => { setActivityDescription(e.target.value) }}>
            </TextField>
            <Divider className={classes.divider} />
            <Button color="primary" variant="contained" onClick={handleCreatePark} fullWidth>
                Register Park
            </Button>
            <Footer />
        </div>
    );

}
