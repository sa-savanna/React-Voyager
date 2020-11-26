import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner"
import axios from "axios"

const APIurl =
    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details";
const PhotoAPI = "https://maps.googleapis.com/maps/api/place/photo";
const key = process.env.REACT_APP_GOOGLE_KEY;



const Weather = ({ placeId, center }) => {
    const [photos, setPhotos] = useState([]);
    const [weatherObj, setWeatherObj] = useState(null);
    const [loading, setLoading] = useState(true)


    const getInfo = async () => {
        if (placeId) {
            setLoading(true)
            try {
                const imgs = await axios.get(`${APIurl}/json?key=${key}&place_id=${placeId}&fields=photos`);
                setPhotos(imgs.result.photos);
                const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${center.lat}&lon=${center.lng}&appid=98cb06cb2b40f453cd89033992ff765a&units=metric`)
                setWeatherObj(weather)
            } catch (err) {
                console.error(err);
            }
            setLoading(false)
        }
    };


    useEffect(() => {
        getInfo()
    }, [placeId, center]);


    const altOfPhoto = (attr) => {
        let first = attr.indexOf('>')
        let second = attr.slice(first).substring(1) //takes characters caracters before '>' and delete first character
        return second.substring(0, second.length - 4);
    }


    return loading ? <Spinner /> : (
        <div className="weather">
            <div className="photos">
                <p>Photos of the city</p>

                {photos ?
                    <div>
                        {photos.slice(0, 9).map((photo, k) => (
                            <img
                                key={k} alt={"photo by " + altOfPhoto(`${photo.html_attributions}`)}
                                src={`${PhotoAPI}?&key=${key}&photoreference=${photo.photo_reference}&maxwidth=200`}
                            />
                        ))}
                    </div>
                    : <img style={{ height: "300px", width: "300px" }} alt="nophoto" src={"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg"}></img>}

            </div>
            <div className="forecast">
                <p>Weather</p>
                {weatherObj ? (
                    <div className="forecast-grid">

                        <img alt={weatherObj.weather.main}
                            src={`http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`}
                        ></img>
                        <p>{Math.floor(weatherObj.main.temp)}°C </p>
                        <small className="text-muted">
                            {weatherObj.weather[0].description}{" "}
                        </small>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Weather;