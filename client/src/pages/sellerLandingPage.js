/// <summary>
/// Authors: Jason Shull
/// Description: Script contains how the Seller webpage will be formated
/// </summary>

import React from "react";
import "../styles/SellerLandingPage.css";
import Product from "../components/Product";
import SuggestedContent from "../components/SuggestedContent";
import AutoplayCarousel from "../components/AutoplayCarousel";
import "../styles/customerLandingPage.css";
import "../styles/carousel.css";

 //Format for seller landing page
const SellerLandingPage = () => {
    return (
        <div className="SellerLandingPage">

            <div className="carousel">
                <AutoplayCarousel />
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Just Added"/>

                <div className="product_list">
                    <ul>
                    <li><Product link = "/sampleProduct" name = "Mansion" image = "https://picsum.photos/id/230/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Modern" image = "https://picsum.photos/id/231/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Humble Living" image = "https://picsum.photos/id/232/400/250"/></li>
                    </ul>
                </div>

                <SuggestedContent category = "Good Fit for Your Company"/>

                <div className="product_list">
                    <ul>
                    <li><Product link = "/sampleProduct" name = "Office Building" image = "https://picsum.photos/id/229/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Hospital" image = "https://picsum.photos/id/228/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "School" image = "https://picsum.photos/id/227/400/250"/></li>
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
                    <li><Product link = "/sampleProduct" name = "Ranch-Style" image = "https://picsum.photos/id/256/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Farmhouse" image = "https://picsum.photos/id/225/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Cottage" image = "https://picsum.photos/id/254/400/250"/></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};
 
export default SellerLandingPage;