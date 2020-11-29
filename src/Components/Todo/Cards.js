import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';
import Spinner from "../Spinner/Spinner"
import { Stars } from "react-star-ratings";
import StarRatings from "react-star-ratings";
import axios from "axios"

let APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
let PointsAPI = '+point+of+interest&language=en&key='

const PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
const key = process.env.REACT_APP_GOOGLE_KEY;


const Cards = ({ places,  loading, PhotoAPI }) => {



    return loading ? <Spinner /> : (
        <>
            <div className="cards">
                {
                    places.map((place, i) => (
                        < MDBCard className="card" key={i} >
                            <MDBCardImage waves className="img-fluid"
                                src={place.photos ? (`${PhotoAPI}${place.photos[0].photo_reference}&key=${key}`) : null}
                            />

                            <MDBCardBody>
                                <MDBCardTitle>
                                    <strong>{place.name}</strong>
                                </MDBCardTitle>

                                <p> <img style={{ width: '20px', height: '20px', marginRight: '5px' }} src={place.icon} alt="" />
                                    {place.types[0]}</p>
                                <p>
                                    {(place.plus_code.compound_code).slice(8)}
                                </p>


                                <MDBBtn href="!#"><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                            </MDBCardBody>

                        </MDBCard>
                    ))
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
https://maps.googleapis.com/maps/api/place/details/json?key=${key}&place_id=ChIJ3aQr_QZUpEARU9v_nXpOV54&region
 <h4>
 {place.rating}

  <StarRatings
  rating={place.rating}
 starDimension="13px"
 starSpacing="5px"
 starRatedColor="blue"
 />
  </h4>

   <MDBIcon icon="umbrella-beach" /> Beaches
*/