import React from "react";
import "../styles/customerLandingPage.css";
import "../styles/carousel.css";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import SuggestedContent from "../components/SuggestedContent"

//Format for customer landing page
const customerLandingPage = () => {
    Carousel();
    return (
        <div className ="carousel"> 
            <div class="carousel">
                <div class="carouselSlide">
                    <img className="bigPhoto" src = "https://img1.rapidleaks.com/2019/12/Things-To-Do-In-Venice.jpg"/>
                    <div class="bigPhotoText">Architectural Trends in 2026</div>
                </div>
                <div class="carouselSlide">
                    <img className="bigPhoto" src = "https://homesnapshots.com/wp-content/uploads/sites/2/2019/08/67424.jpg"/>
                    <div class="bigPhotoText">Architectural Trends in 2026</div>
                </div>
                <div class="carouselSlide">
                    <img className="bigPhoto" src = "https://i.ebayimg.com/images/g/coUAAOSwutpjRiRk/s-l1200.jpg"/>
                    <div class="bigPhotoText">Architectural Trends in 2026</div>
                </div>
                <div class="carouselSlide">
                    <img className="bigPhoto" src = "https://bambubuild.com/wp-content/uploads/2017/11/Gassho-zukuri_farmhouse-01-1293x800.jpg"/>
                    <div class="bigPhotoText">Architectural Trends in 2026</div>
                </div>
            </div>  

            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>     

            <div className="customerLandingPage">    
            
            <div class="header">
                <img className="bigPhoto" src = "https://img1.rapidleaks.com/2019/12/Things-To-Do-In-Venice.jpg"/>
                <div class="bigPhotoText">Smart Home Collection</div>
            </div>

            <div className="suggested_content">
                <SuggestedContent category = "Trending homes designs"/>

                <div className="product_list">
                    <ul>
                    <li><Product name = "Lantern House" image = "https://homesnapshots.com/wp-content/uploads/sites/2/2019/08/67424.jpg"/></li>
                    <li><Product name = "Grasshopper Hanging House" image = "https://i.ebayimg.com/images/g/coUAAOSwutpjRiRk/s-l1200.jpg"/></li>
                    <li><Product name = "Slanted Roof Japanese Style Cabin" image = "https://bambubuild.com/wp-content/uploads/2017/11/Gassho-zukuri_farmhouse-01-1293x800.jpg"/></li>
                    </ul>
                </div>

            </div>
            </div>
        </div>

    );
    
};
 
export default customerLandingPage;