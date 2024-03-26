/*
    <Link to={link}>
        <img src={image} alt="" />
    </Link>
*/

import React from "react";
import "../styles/Product.css";
import {Link} from 'react-router-dom';

const Product = ({name, image, link}) => {
//make this whole thing a button/link?
    return(
        <div className="product">
            <img src={image} alt="" />
        <div className="product_info">
                <p>{name}</p>
            </div> 
        </div>
    );
}
export default Product;