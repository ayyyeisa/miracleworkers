/*Author: Isa Luluquisin, Kait
// Description: This script contains the content of the customer landing screen. It is formatted as
// shown in the sample document given at the beginning of the project.
*/

import React from "react";
import "../assets/customerLandingPage.css";
import "../assets/carousel.css";
import AutoplayCarousel from "../components/AutoplayCarousel";
import Product from "../components/Product";
import Collections from "../components/Collections";
import SuggestedContent from "../components/SuggestedContent";
import { productList1, productList2, productList3 } from "../components/ProductLists";

//Format for customer landing page
const customerLandingPage = () => {
    return (
        <div className="customerLandingPage">    
            <div className="carousel">
                <AutoplayCarousel />
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Trending Home Designs"/>

                <div className="product_list">
                    {productList1.map((product) => {
                        return <div className="product"><Product {...product}/></div>;
                    })}
                </div>
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Garden Magic"/>

                <div className="product_list">
                    {productList2.map((product) => {
                            return <div className="product"><Product {...product}/></div>;
                    })}
                </div>
            </div>    

            <div style={{clear: 'both'}} >          
                <Collections 
                    link = "/dummyPages/sampleProduct" 
                    title = "Smart Home Collection" 
                    image = "https://images.surferseo.art/17bb9c9b-4894-43ed-97a0-ed9389bb657d.png"
                    designer = "designer" 
                    price = "4000"/>
            </div>  
                
            <div className="suggested_content">
                <SuggestedContent category = "Tiny Home"/>

                <div className="product_list">
                    {productList3.map((product) => {
                        return <div className="product"><Product {...product}/></div>;
                    })}

                </div>

            </div>
        </div>
    );
    
};
 
export default customerLandingPage;