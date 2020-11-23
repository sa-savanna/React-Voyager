import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBIcon } from 'mdbreact';
import { Stars } from "react-star-ratings";




const Cards = ({ results }) => {

    
    return (
        <>
            <div className="cards">
                {
                    results.map((place) => {
                        let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&sensor=false&key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE`;
                        return (
                            <MDBCard className="card">
                                <MDBCardImage waves
                                    className='card-img'
                                    src={url}
                                    alt='food'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>
                                        {place.name}
                                    </MDBCardTitle>
                                    <p>
                                        <MDBIcon icon="umbrella-beach" /> Beaches and parks
                                        </p>

                                    <MDBBtn href={place.formatted_address}><MDBIcon icon="map-marker-alt mr-2" />View Map</MDBBtn>
                                </MDBCardBody>

                            </MDBCard>
                        )
                    })
                }

            </div>
        </>
    )
}


export default Cards;