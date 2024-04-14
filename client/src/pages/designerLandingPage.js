/// <summary>
/// Authors: Corinne Scheidecker, Isa Luluquisin
/// Description: Script contains how the default webpage will be formated
/// </summary>

import React from "react";
import "../assets/SellerLandingPage.css";
import Product from "../components/Product";
import Collections from "../components/Collections";
import SuggestedContent from "../components/SuggestedContent";
import AutoplayCarousel from "../components/AutoplayCarousel";
import "../assets/customerLandingPage.css";
import "../assets/carousel.css";
import DesignUpload from "../components/DesignUpload";
import "../assets/designUpload.css";
import { productList4, productList5, productList6 } from "../components/ProductLists";

 //Format for seller landing page
const DesignerLandingPage = () => {
    return (
        <div className="SellerLandingPage">
             
            <DesignUpload 
                designLink = "/dummyPages/designUploadPage" 
                photoText = "Upload Your First Design" 
                image = ""/>

            <div className="carousel">
                <AutoplayCarousel />
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Just Added"/>

                <div className="product_list">
                    <div className="product_list">
                        {productList4.map((product) => {
                            return <div className="product"><Product {...product}/></div>;
                        })}
                    </div>
                </div>
            </div>    

            <div className="suggested_content">
                <SuggestedContent category = "Good Fit for Your Company"/>

                <div className="product_list">
                    <div className="product_list">
                        {productList5.map((product) => {
                            return <div className="product"><Product {...product}/></div>;
                        })}
                    </div>
                </div>

            </div>
            
            <div style={{clear: 'both'}}>
                <Collections 
                    link = "/dummyPages/sampleProduct" 
                    title = "Smart Home Collection" 
                    image = "https://i.imgur.com/sAokhhu.jpeg"/>
            </div>
            
            <div className="suggested_content">
                <SuggestedContent category = "Tiny Home"/>

                <div className="product_list">
                        {productList6.map((product) => {
                            return <div className="product"><Product {...product}/></div>;
                        })}
                </div>
            </div>

        </div>

    );
};
 
export default DesignerLandingPage;