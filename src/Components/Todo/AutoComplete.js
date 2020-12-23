import React, { useState, useEffect } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import axios from "axios";
import { Spinner } from 'react-bootstrap';
import Cards from './Cards';


const AutoComplete = (props) => {

    const [results, setResults] = useState('')


    const changeCardsList = (e) => {
        console.log(e.target.value);
        const updateResults = e.target.value
        // setResults(updateResults)
    }


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
            onChange={changeCardsList}
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

                        <Cards places={props.places} />
                    )}
                </>
            )}
        </PlacesAutocomplete>
    )
}

export default AutoComplete
