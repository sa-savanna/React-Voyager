import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Spinner from "../Spinner/Spinner"
import { FaLocationArrow } from 'react-icons/fa';
import axios from "axios"

let APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch";
const key = process.env.REACT_APP_GOOGLE_KEY;


const Map = ({ city, setPlaceId, center, setCenter }) => {

    const [loading, setLoading] = useState(true)

    const GetCountries = async () => {
        if (city) {
            setLoading(true);
            try {
                const resp = await axios.get(`${APIurl}/json?query=${city}&language=en&key=${key}`);
                resp.data && resp.data.results[0] &&
                    setCenter(resp.data.results[0].geometry.location);
                resp.data.results[0] &&
                    setPlaceId(resp.data.results[0].place_id);
            } catch (err) {
                console.error(err);
            }
            setLoading(false)
        }
    };

    useEffect(() => {
        GetCountries()
    }, [city, setCenter, setPlaceId]);

    const LocationPin = () => (
        <div className="pin">
            <FaLocationArrow />
        </div>
    )

    return loading ? <Spinner /> : (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key }}
                center={center}
                zoom={10}
                defaultCenter={{
                    lat: 50.85045,
                    lng: 4.34878
                }}
            >
                {
                    loading ? <Spinner /> :
                        <LocationPin lat={center.lat} lng={center.lng} />
                }
            </GoogleMapReact>

        </div>
    );
};

export default Map;