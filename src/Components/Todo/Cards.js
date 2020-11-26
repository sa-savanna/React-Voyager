import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';
import { Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import { Stars } from "react-star-ratings";
import StarRatings from "react-star-ratings";
const axios = require('axios');

let APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
let PointsAPI = '+point+of+interest&language=en&key='

const PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=239&photoreference=";
// const key = process.env.REACT_APP_GOOGLE_KEY;
const key = 'AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE';



const Cards = ({ country }) => {
    const [places, setPlases] = useState([])
    const [loading, setLoading] = useState(true)

    const GetPlaces = async () => {
        setLoading(true)
        try {
            const resp = await axios.get(`${APIurl}${country}${PointsAPI}${key}`);
            console.log(resp.data.results);
            setPlases(resp.data.results)
        } catch (err) {
            console.error(err);
        }
        setLoading(false)
    };


    useEffect(() => {
        GetPlaces()
    }, [country, setPlases])

    return (
        <>
            <div className="cards">
                {
                    places.map((place, i) => {
                        const uri = `${PhotoAPI}${place.photos[0].photo_reference}&key=${key}`
                        return (
                            < MDBCard className="card" key={i} >
                                <MDBCardImage className="img-fluid"
                                    src={uri}
                                    waves
                                />

                                <MDBCardBody>
                                    <MDBCardTitle>
                                        <strong>{place.name}</strong>
                                    </MDBCardTitle>
                                    <p>
                                        <MDBIcon icon="umbrella-beach" /> Beaches
                                    </p>
                                    <img style={{ width: '20px', height: '20px' }} src={place.icon} alt="" />
                                    <p>{place.types}</p>
                                    <p>
                                        {place.formatted_address}
                                    </p>
                                    
                                    <h4>
                                        {place.rating}

                                        <StarRatings
                                            rating={place.rating}
                                            starDimension="13px"
                                            starSpacing="5px"
                                            starRatedColor="blue"
                                        />
                                    </h4>
                                    <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                                </MDBCardBody>

                            </MDBCard>
                        )
                    }
                    )
                }


            </div>
        </>
    )
}


export default Cards;

/*
 <Tab  label={'All'} />
                    <Tab  label={'Hotels'} />
                    <Tab  label={'Restaurants'} />
                    <Tab  label={'Amusements'} />
                    <Tab  label={'Places'} />
                    <Tab  label={'Sport'} />
                    <Tab  label={'Green paths'} />

place_id details
https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE&place_id=ChIJ3aQr_QZUpEARU9v_nXpOV54&region
*/