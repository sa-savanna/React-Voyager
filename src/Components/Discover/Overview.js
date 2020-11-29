import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Navigation } from "../Navigation";
import Scroller from "./Scroller";
import Topbar from "./Topbar";
import Map from "./Map";
import Weather from "./Weather";
import Spinner from "../Spinner/Spinner"
import axios from "axios"

const Overview = () => {
    const [city, setCity] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [center, setCenter] = useState({});
    const { country } = useParams();
    const [data, setData] = useState({});
    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(true)

    const GetCountries = async () => {
        if (country) {
            setLoading(true)
            try {
                const resp = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
                setData(resp.data[0]);
                setCode(resp.data[0].alpha2Code)
            } catch (err) {
                console.error(err);
            }
            setLoading(false)
        }
    };

    useEffect(() => {
        GetCountries()
    }, [country]);

    return loading ? <Spinner /> : (
        <>
            <Navigation country={country} />
            <div className="discover-wrapper">
                <Topbar data={data} />
                <Scroller
                    setCity={setCity}
                    capital={data.capital}
                    country={country}
                    code={code} />
                <Map
                    city={city}
                    setPlaceId={setPlaceId}
                    center={center}
                    setCenter={setCenter}
                    code={code}
                />
                <Weather placeId={placeId} center={center} />

            </div>

        </>
    );
};

export default Overview;