import React, { useState, useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from "axios"


const InputSearch = () => {
    const [countries, setCountries] = useState([]);

    const GetCountries = async () => {
        try {
            const resp = await axios.get('https://cors-anywhere.herokuapp.com/http://country.io/names.json');
            // console.log(resp.data);
            setCountries(Object.values(resp.data))
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        GetCountries()
    }, [])


    return (
        <Autocomplete
            onChange={e => {
                console.log(e.target.innerText)
                window.location.href = `/#/overview/${e.target.innerText}`
            }}
            style={{ flexGrow: 1 }}
            id="countryInput"
            variant="contained"
            options={countries}
            renderInput={(params) => (
                <TextField {...params} label="Choose country" style={{ width: 300, marginTop: 0 }} className="Input" margin="normal" />
            )}
        />
    )
}

export default InputSearch
