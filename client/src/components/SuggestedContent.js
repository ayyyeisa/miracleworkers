/// <summary>
/// Authors: Corinne Scheidecker
/// Description: Script for SuggestedContent component
/// </summary>

import React from "react";
import "../assets/SuggestedContent.css";
import "./Product";

//later I'm gonna try to pass an array of products as a prop
const SuggestedContent = ({category}) => 
{
    return(
        <div className="row">
            <div className = "category">
                <p>{category}</p>
            </div>
        </div>
    )

}
export default SuggestedContent;