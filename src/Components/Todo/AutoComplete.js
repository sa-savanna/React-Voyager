import React, { useState, useEffect } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import Cards from './Cards';


const AutoComplete = ({ places, setLoading, APIurl, PointsAPI, key }) => {

    const [results, setResults] = useState('')

    const GetPlaces = async () => {
        
        try {
            const resp = await axios.get(`${APIurl}${places}${PointsAPI}${key}`);
            // console.log(resp.data.results);
            setResults(...results, resp.data.results)
        } catch (err) {
            console.error(err);
        }
       
    };


    useEffect(() => {
        GetPlaces()
    }, [places, setResults])

    const handleSelect = async (value) => {
        try {
            const results = await geocodeByAddress(value)
            setResults(results)
            // const sugg = await getSuggestionItemProps(results[0])
            // setCoordinates(value)
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <PlacesAutocomplete
            value={results}
            onChange={setResults}
            onSelect={handleSelect}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <>
                    <input
                        style={{ width: "300px" }}
                        {...getInputProps({
                            placeholder: "Search Places ...",
                            className: "location-search-input",
                        })}
                    />

                    <div className="autocomplete-dropdown-container">
                        {loading ? <Spinner /> : (
                            suggestions.map((suggestion) => {
                                const className = suggestion.active
                                    ? "suggestion-item--active"
                                    : "suggestion-item";
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                                return (
                                    <div
                                        {...getSuggestionItemProps(
                                            suggestion,
                                            {
                                                className,
                                                style,
                                            })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>

                                );
                            })
                        )}
                    </div>
                    {results.length === 0 ? null : (
                        loading ? <Spinner/> : 
                        <Cards places={results} />
                    )}
                </>
            )}
        </PlacesAutocomplete>
    )
}

export default AutoComplete
