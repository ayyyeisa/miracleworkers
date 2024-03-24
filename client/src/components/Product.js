import React from "react";
import "../styles/Product.css";

function Product({name, image, link}) {
//make this whole thing a button/link?
    return(
        <div className="product">
            <div className="product_info">
                <p>{name}</p>
            </div>
        <img src={image} alt="" /> 
        </div>
    );
}
export default Product;