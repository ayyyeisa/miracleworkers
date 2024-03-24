import React from "react";

// Components
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages
import Home from "./pages/dummy3";
import SellerLandingPage from "./pages/sellerLandingPage";
import Blogs from "./pages/customerLandingPage";
import SignUp from "./pages/dummy4";
import Contact from "./pages/dummy1";
import PageFramework from "./pages/dummy2";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route 
                    exact path="/" 
                    element={<PageFramework component={<Home/>} />} />
                <Route 
                    path="/about" 
                    element={<PageFramework component={<SellerLandingPage/>} />} />
                <Route
                    path="/contact"
                    element={<PageFramework component={<Contact/>} />} />
                <Route 
                    path="/blogs" 
                    element={<PageFramework component={<Blogs/>} />} />
                <Route
                    path="/sign-up"
                    element={<PageFramework component={<SignUp/>} />} />
            </Routes>
        </Router>
    );
}
 
export default App;