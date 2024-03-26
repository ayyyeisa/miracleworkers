import React from "react";
import "../styles/Product.css";
import {Link} from 'react-router-dom'

const Product = ({name, image}) => {
//make this whole thing a button/link?
    return(
        <div className="product">
        <Link to="/dummyPages/sampleProduct">
            <img src="" alt="" />
        </Link>
        <div className="product_info">
                <p>{name}</p>
            </div> 
        </div>
    );
}
export default Product;