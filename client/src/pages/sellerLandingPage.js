/// <summary>
/// Authors: Jason Shull
/// Description: Script contains how the Seller webpage will be formated
/// </summary>

import React from "react";
import "../styles/SellerLandingPage.css";
import Product from "../components/Product";

 //Format for seller landing page
const SellerLandingPage = () => {
    return (
        <div className="SellerLandingPage">

            <div class="header">
                <img className="spunchbob" src="https://i.imgur.com/lysIMu8.png" alt="spunchbob"/>
                <div class="bottomleft">Architectural Trends in 2026</div>
            </div>

            <h1>
                Just Added
            </h1>
            <div className="just_added">
               <Product
               name = "chair cat"
               image = "https://i.imgur.com/CiM7qxD.png"
               />
            </div>
        </div>

    );
};
 
export default SellerLandingPage;