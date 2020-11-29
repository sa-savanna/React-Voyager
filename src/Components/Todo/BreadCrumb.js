import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Spinner from "../Spinner/Spinner"
import AutoComplete from './AutoComplete';
import Cards from './Cards';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
}));

let APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
let PointsAPI = '+point+of+interest&language=en&key='

const PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
const key = process.env.REACT_APP_GOOGLE_KEY;


export default function BreadCrumb({ country, region, loading, setLoading }) {
    const classes = useStyles();
    const theme = useTheme();

    const [places, setPlaces] = useState([])


    const GetPlaces = async () => {
        setLoading(true)
        try {
            const resp = await axios.get(`${APIurl}${country}${PointsAPI}${key}`);
            // console.log(resp.data.results);
            setPlaces(resp.data.results)
        } catch (err) {
            console.error(err);
        }
        setLoading(false)
    };


    useEffect(() => {
        GetPlaces()
    }, [country, setPlaces])


    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return loading ? <Spinner /> : (
        <div className={classes.root}>

            <Breadcrumbs separator={<MdKeyboardArrowRight color="red" fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    {region}
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    {country}
                </Link>
                {/* <Typography color="textPrimary"></Typography> */}
            </Breadcrumbs>
            <div>
                <AutoComplete
                    APIurl={APIurl}
                    PointsAPI={PointsAPI}
                    key={key}
                />

            </div>

            {
                places.length === 0 ? (
                    null
                ) : <Cards places={places} loading={loading} PhotoAPI={PhotoAPI} />
            }
        </div>
    );
}
