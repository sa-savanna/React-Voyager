import React from 'react';
import { Navigation } from '../Navigation'
import { Stars } from "react-star-ratings";
import SideBar from './SideBar';
import Cards from "./Cards"
import FilterTabs from './FilterTabs';
import Breadcrumb from './BreadCrumb';
import { useParams } from 'react-router-dom';


const Actions = () => {
    const { country } = useParams();


    return (
        <>
            <Navigation country={country} />
            <FilterTabs />
            <div className="container-todo">
                <div className="Sidebar">
                    <SideBar />
                </div>
                <div className="Main">
                    <Breadcrumb country={country} />
                    <Cards country={country} />
                </div>



            </div>
        </>
    )
}


export default Actions;