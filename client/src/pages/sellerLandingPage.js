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
            <h1>
                3D Printing Architectural Trends in 2026 
            </h1>
                <img className="spunchbob"
                src="https://i.imgur.com/lmKI23l.png"alt=""></img>

            <h1>
                Just Added
            </h1>
            <div className="just_added">
               <Product
               name = "chair cat"
               image = "https://i.imgur.com/CiM7qxD.png"
               />
            </div>

            <h1>
                Good Fit for Your Company
            </h1>
            <h1>
                Smart Home Collection
            </h1>
            <h1>
                Tiny Home
            </h1>
        </div>

    );
};
 
export default SellerLandingPage;