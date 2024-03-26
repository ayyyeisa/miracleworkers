import React from "react";
import "../styles/Product.css";

const Product = ({name, image, link}) => {
//make this whole thing a button/link?
    return(
        <div className="product">
        <img onclick={link} src={image} alt="" />
        <div className="product_info">
                <p>{name}</p>
            </div> 
        </div>
    );
}
export default Product;