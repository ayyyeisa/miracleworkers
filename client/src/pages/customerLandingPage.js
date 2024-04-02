/*Author: Isa Luluquisin, Kait
// Description: This script contains the content of the customer landing screen. It is formatted as
// shown in the sample document given at the beginning of the project.
*/

import React from "react";
import "../styles/customerLandingPage.css";
import "../styles/carousel.css";
import AutoplayCarousel from "../components/AutoplayCarousel";
import Product from "../components/Product";
import SuggestedContent from "../components/SuggestedContent"

//Format for customer landing page
const customerLandingPage = () => {
    return (
        <div className="customerLandingPage">    
            <div className="carousel">
                <AutoplayCarousel />
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Trending homes designs"/>

                <div className="product_list">
                    <ul>
                    <li><Product link = "/sampleProduct" name = "Lantern Home" image = "https://picsum.photos/id/230/400/250" /> </li>
                    <li><Product link = "/sampleProduct" name = "Sphere House" image = "https://picsum.photos/id/237/400/250"/> </li>
                    <li><Product link = "/sampleProduct" name = "Japanese Style Cabin" image = "https://picsum.photos/id/231/400/250"/> </li>
                    </ul>
                </div>

                <div className="suggested_content">
                <SuggestedContent category = "Garden Magic"/>

                <div className="product_list">
                    <ul>
                    <li><Product link = "/sampleProduct" name = "Green House" image = "https://picsum.photos/id/232/400/250" /></li>
                    <li><Product link = "/sampleProduct" name = "Garden Log Cabin" image = "https://picsum.photos/id/233/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Vintage Villa" image = "https://picsum.photos/id/234/400/250"/></li>
                    </ul>
                </div>
              </div>
            
              <div class="header">
                <img className="bigPhoto" src = "https://images.surferseo.art/17bb9c9b-4894-43ed-97a0-ed9389bb657d.png"/>
                <div class="bigPhotoText">Smart Home Collection</div>
            </div>

              <div className="suggested_content">
                <SuggestedContent category = "Tiny Home"/>

                <div className="product_list">
                    <ul>
                    <li><Product link = "/sampleProduct" name = "Loft Home" image = "https://picsum.photos/id/235/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Country House" image = "https://picsum.photos/id/236/400/250"/></li>
                    <li><Product link = "/sampleProduct" name = "Vacation House" image = "https://picsum.photos/id/238/400/250"/></li>
                    </ul>
                </div>
              </div>
            </div>
        </div>

    );
    
};
 
export default customerLandingPage;