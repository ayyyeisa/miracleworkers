/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to
/// </summary>

import React from "react";

// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Seller from "./pages/sellerLandingPage";
import { BuyerPageFramework, SellerPageFramework } from "./pages/Pageframework";
import Page from "./pages/DefaultPage";
import Structures from "./pages/structures";
import Brands from "./pages/brands";
import Company from "./pages/company";
import Houses from "./pages/houses";
import Resources from "./pages/resources";

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
                    element={<BuyerPageFramework component={<Houses />} />} />
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
            </Routes>
        </Router>
    );
}

export default App;