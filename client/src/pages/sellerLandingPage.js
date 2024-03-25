/// <summary>
/// Authors: Jason Shull
/// Description: Script contains how the Seller webpage will be formated
/// </summary>

import React from "react";
import "../styles/SellerLandingPage.css";
import Product from "../components/Product";
import SuggestedContent from "../components/SuggestedContent";

 //Format for seller landing page
const SellerLandingPage = () => {
    return (
        <div className="SellerLandingPage">

            <div class="header">
                <img className="spunchbob" src="https://i.imgur.com/hpdq0bd.jpeg" alt="spunchbob" width="400" height="300"/>
                <div class="bottomleft">Architectural Trends in 2026</div>
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Just Added"/>

                <div className="product_list">
                    <ul>
                    <li><Product name = "House" image = "https://i.imgur.com/R6N42eD.png"/></li>
                    <li><Product name = "Domicile" image = "https://i.imgur.com/U1EDTku.jpeg"/></li>
                    <li><Product name = "Abode" image = "https://i.imgur.com/xRYap68.jpeg"/></li>
                    </ul>
                </div>

                <SuggestedContent category = "Good for Your Company"/>

                <div className="product_list">
                    <ul>
                    <li><Product name = "Dwelling" image = "https://i.imgur.com/avsowwj.jpeg"/></li>
                    <li><Product name = "Castle" image = "https://i.imgur.com/jbNN0xv.png"/></li>
                    <li><Product name = "The Pit" image = "https://i.imgur.com/PHarVvi.png"/></li>
                    </ul>
                </div>

            </div>

            <div class="header">
                <img className="headerimage" src="https://i.imgur.com/sAokhhu.jpeg" alt="headerimage" width="400" height="300"/>
                <div class="bottomleft">Smart Home Collection</div>
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Tiny Home"/>

            <div className="product_list">
                    <ul>
                    <li><Product name = "Residence" image = "https://i.imgur.com/dHPXoMK.png"/></li>
                    <li><Product name = "Home" image = "https://i.imgur.com/jWyKJci.jpeg"/></li>
                    <li><Product name = "Hut" image = "https://i.imgur.com/fUfyj5j.jpeg"/></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};
 
export default SellerLandingPage;