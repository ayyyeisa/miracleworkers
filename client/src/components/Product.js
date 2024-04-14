/// <summary>
/// Authors: Isa Luluquisin, Corinne Scheidecker
/// Description: Script for Product Component
/// </summary>

import React from "react";
import "../assets/Product.css";
import {Link} from 'react-router-dom'

const Product = ({title, image, link, designer, price}) => {
    return(
        <div className="container">
            <Link to= {link}>
                <img className="productPhoto" src={image} alt="" />
            </Link>
            <div className="productInfo" >
                <strong>{title}</strong>
                <section><small>Designed by: {designer}</small></section>
                <section><small>Price: ${price}</small></section>
            </div>
        </div>
    );
}
export default Product;