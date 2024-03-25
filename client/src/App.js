/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to
/// </summary>

import React from "react";

// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Seller from "./pages/sellerLandingPage";
import Buyer from "./pages/customerLandingPage";
import { BuyerPageFramework, SellerPageFramework } from "./pages/Pageframework";
import Page from "./pages/DefaultPage";
import Structures from "./pages/structures";
import Brands from "./pages/brands";
import Company from "./pages/company";
import Houses from "./pages/houses";
import Resources from "./pages/resources";
import Discover from "./pages/discover";
import Design from "./pages/design";
import Construct from "./pages/construct";
import Community from "./pages/community";
import Support from "./pages/support";

function App() {

    return (
        <Router>
            <Routes>
                <Route
                    exact path="/" //Path for it to be added too
                    element={<Page />} />
                <Route
                    exact path="/seller" //Path for it to be added too
                    element={<SellerPageFramework component={<Seller />} />} />
                <Route
                    exact path="/buyer" //Path for it to be added too
                    element={<BuyerPageFramework component={<Buyer />} />} />
                <Route
                    path="/houses" //Path for it to be added too
                    element={<BuyerPageFramework component={<Houses />} />} />
                <Route
                    path="/structures" //Path for it to be added too
                    element={<BuyerPageFramework component={<Structures />} />} />
                <Route
                    path="/brands" //Path for it to be added too
                    element={<BuyerPageFramework component={<Brands />} />} />
                <Route
                    path="/resources" //Path for it to be added too
                    element={<BuyerPageFramework component={<Resources />} />} />
                <Route
                    path="/company" //Path for it to be added too
                    element={<BuyerPageFramework component={<Company />} />} />    
                <Route
                    path="/discover" //Path for it to be added too
                    element={<SellerPageFramework component={<Discover />} />} />
                <Route
                    path="/design" //Path for it to be added too
                    element={<SellerPageFramework component={<Design />} />} />
                <Route
                    path="/construct" //Path for it to be added too
                    element={<SellerPageFramework component={<Construct />} />} />
                <Route
                    path="/community" //Path for it to be added too
                    element={<SellerPageFramework component={<Community />} />} />
                <Route
                    path="/support" //Path for it to be added too
                    element={<SellerPageFramework component={<Support />} />} />
            </Routes>
        </Router>
    );
}

export default App;
