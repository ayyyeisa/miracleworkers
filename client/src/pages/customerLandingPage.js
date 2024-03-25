import React from "react";
import "../styles/customerLandingPage.css";
import "../styles/Carousel.css";
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
                    <li><Product name = "Lantern Home" image = "https://homesnapshots.com/wp-content/uploads/sites/2/2019/08/67424.jpg"/></li>
                    <li><Product name = "Sphere House" image = "https://robbreport.com/wp-content/uploads/2023/02/Credit-Jilbert-Daniel-8-1.jpg?w=1000"/></li>
                    <li><Product name = "Japanese Style Cabin" image = "https://aspiremetro.com/wp-content/uploads/2022/07/haiku.jpeg"/></li>
                    </ul>
                </div>

                <div className="suggested_content">
                <SuggestedContent category = "Garden Magic"/>

                <div className="product_list">
                    <ul>
                    <li><Product name = "Green House" image = "https://i.etsystatic.com/21692876/r/il/503d7d/2734910657/il_570xN.2734910657_53ld.jpg"/></li>
                    <li><Product name = "Garden Log Cabin" image = "https://media.glampinghub.com/CACHE/images/accommodations/riverfront-log-home-cabin-1493371670946/7e8853f03105db72ce48cc20205ef360.jpg"/></li>
                    <li><Product name = "Vintage Villa" image = "https://www.victoriabuzz.com/wp-content/uploads/2017/04/Tulip-House-on-Beach-Drive.jpg"/></li>
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
                    <li><Product name = "Loft Home" image = "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_411/at%2Fnews-culture%2F2023-01%2Fposter-azure-printed-homes"/></li>
                    <li><Product name = "Country House" image = "https://assets.newatlas.com/dims4/default/1c7f7c6/2147483647/strip/true/crop/1000x525+0+71/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2017-luxury-tiny-houses-market-2.jpg&na.image_optimisation=0"/></li>
                    <li><Product name = "Vacation House" image = "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2023/04/tiny-home-modern-e1681126651196.jpeg"/></li>
                    </ul>
                </div>
              </div>
            </div>
        </div>

    );
    
};
 
export default customerLandingPage;