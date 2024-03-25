/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to for the navbar
/// </summary>

import React from "react";
import "../styles/Product.css";

function Product({name,image, link}) {
    return (
        <div className="product">
            <img src={image} alt="" />
            <div className= "product_info">
                <p>{name}</p>
            </div>
        </div>
    );
}

export default Product;
