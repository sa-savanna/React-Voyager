import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation'
import { Stars } from "react-star-ratings";
import SideBar from './SideBar';
import Cards from "./Cards"
import FilterTabs from './FilterTabs';
import Breadcrumb from './BreadCrumb';
import { useParams } from 'react-router-dom';
import axios from "axios";

const Actions = () => {
    const { country } = useParams();
    const [region, setRegion] = useState('')
    const [loading, setLoading] = useState(true)

    const GetCountry = async () => {
        if (country) {
            setLoading(true)
            try {
                const resp = await axios.get(`https://restcountries.eu/rest/v2/name/${country}`);
                // console.log(resp.data.results);
                setRegion(resp.data[0].subregion);

            } catch (err) {
                console.error(err);
            }
            setLoading(false)
        }
    };

    useEffect(() => {
        GetCountry()

    }, [country]);



    return (
        <>
            <Navigation country={country} />
            <FilterTabs />
            <div className="container-todo">
                <div className="Sidebar">
                    <SideBar />
                </div>
                <div className="Main">
                    <Breadcrumb country={country} region={region} loading={loading} setLoading={setLoading} />
                </div>



            </div>
        </>
    )
}


export default Actions;