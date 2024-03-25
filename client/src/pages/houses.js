/// <summary>
/// Authors: Jason Shull
/// Description: Script contains how the Houses webpage will be formated
/// </summary>

import React from "react";

import "../styles/customerLandingPage.css";
import Product from "../components/Product";

//Format for customer landing page
const Houses = () => {
    return (
//navbar goes here
<div>
<div className="CustomerLandingPage">
    <h1>
        3D Printing Architectural Trends in 2026 
    </h1>
        <img className="header"
        src="https://capestone.com/media/2022/05/Website-header-CAT.jpg"alt=""></img>

    <h1>
        Just Added
    </h1>
    <div className="just_added">
       <Product
       name = "joshhutcherson"
       image = "https://cdn.vox-cdn.com/thumbor/PzidjXAPw5kMOXygTMEuhb634MM=/11x17:1898x1056/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/72921759/vlcsnap_2023_12_01_10h37m31s394.0.jpg"
       />

    <h1>
        Smart Home Collection
    </h1>
    <h1>
        Tiny Home
    </h1>
    </div>
    </div>
    </div>

    );
};

export default Houses;