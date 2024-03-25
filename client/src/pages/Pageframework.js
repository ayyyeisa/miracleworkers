/// <summary>
/// Authors: Jason Shull
/// Description:
/// </summary>

import React from "react";

import { BuyerNavBar, SellerNavBar, SmallerSellerNavBar, SmallerBuyerNavBar} from "../components/Navbar";

// This page component includes the navbar components.
// Takes in the main page component as a paramater.
export const BuyerPageFramework = ({ component }) => {
    return (
        <div className="app-container">
            <SmallerBuyerNavBar/>
            <BuyerNavBar />
            <div className="content-container">
                <div className="main-content">
                    {component}
                </div>
            </div>
        </div>
    );
};

export const SellerPageFramework = ({ component }) => {
    return (
        <div className="app-container">
            <SmallerSellerNavBar />
            <SellerNavBar />
            <div className="content-container">
                <div className="main-content">
                    {component}
                </div>
            </div>
        </div>
    );
};
