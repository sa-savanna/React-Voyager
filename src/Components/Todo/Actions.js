import React from 'react';
import { Navigation } from '../Navigation'
import { Stars } from "react-star-ratings";
import SideBar from './SideBar';
import Cards from "./Cards"
import FilterTabs from './FilterTabs';
import Breadcrumb from './BreadCrumb';



const Actions = ({ country }) => {

    console.log(country);
    return (
        <>
            <Navigation country={country} />
            <div className="container-todo">
                <div className="Sidebar">
                    <SideBar />
                </div>
                <div className="Tabpanel">
                    <FilterTabs />
                    <Breadcrumb />
                    
                </div>



            </div>
        </>
    )
}


export default Actions;