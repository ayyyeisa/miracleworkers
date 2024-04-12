/// <summary>
/// Authors: Jason Shull, Parker Libby, Isa Luluquisin
/// Description: This sript handles all of the links that the files need to navigate to
/// </summary>

// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Seller from "./pages/sellerLandingPage";
import Designer from "./pages/designerLandingPage";
import Buyer from "./pages/customerLandingPage";
import { BuyerPageFramework, SellerPageFramework, DefaultPageFramework, DesignerPageFramework } from "./pages/Pageframework";
//import Page from "./pages/DefaultPage";
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
import MyAccount from "./pages/dummyPages/myAccount";
import MyFavorites from "./pages/dummyPages/myFavorites";
import MyCart from "./pages/myCart";
import './assets/App.css';
import { CreateAccountForm, CreateBuyerForm, CreateSellerForm, LoginForm, LoginScreenBase, Template } from './Login';
import './index.css';

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    {/** ROUTING FOR PRESSING THE HOME BUTTONS */}
                    <Route
                        exact path="/" //Path for it to be added too
                        element={<DefaultPageFramework component={<Buyer />} />} />
                    <Route
                        exact path="/login/buyer" //Path for it to be added too
                        element={<BuyerPageFramework component={<Buyer />} />} />
                    <Route
                        exact path="/login/seller" //Path for it to be added too
                        element={<SellerPageFramework component={<Seller />} />} />
                    <Route
                        exact path="/login/designer" //Path for it to be added too
                        element={<DesignerPageFramework component={<Designer />} />} />

                    {/** ROUTING FOR LOGIN */}
                    <Route
                        exact path="/login"
                        element={<Template children={<LoginScreenBase children={<LoginForm />} />} />} />
                    <Route
                        exact path="/SignUp"
                        element={<Template children={<LoginScreenBase children={<CreateAccountForm />} />} />} />
                    <Route
                        exact path="/SignUp/SellerSignUp"
                        element={<Template children={<LoginScreenBase children={<CreateSellerForm />} />} />} />
                    <Route
                        exact path="/SignUp/BuyerSignUp"
                        element={<Template children={<LoginScreenBase children={<CreateBuyerForm />} />} />} />

                    {/** ROUTING FOR DEFAULT NAVBAR AND SMALLNAVBAR */}
                    <Route
                        path="/houses" //Path for it to be added too
                        element={<DefaultPageFramework component={<Houses />} />} />
                    <Route
                        path="/structures" //Path for it to be added too
                        element={<DefaultPageFramework component={<Structures />} />} />
                    <Route
                        path="/brands" //Path for it to be added too
                        element={<DefaultPageFramework component={<Brands />} />} />
                    <Route
                        path="/resources" //Path for it to be added too
                        element={<DefaultPageFramework component={<Resources />} />} />
                    <Route
                        path="/company" //Path for it to be added too
                        element={<DefaultPageFramework component={<Company />} />} />
                    <Route
                        path="/dummyPages/myAccount" //Path for it to be added too
                        element={<DefaultPageFramework component={<MyAccount />} />} />
                    <Route
                        path="/dummyPages/myFavorites" //Path for it to be added too
                        element={<DefaultPageFramework component={<MyFavorites />} />} />
                    {/**include routing for myFavorites and Location Editor */}

                    {/** ROUTING FOR BUYER NAVBAR AND SMALLNAVBAR */}
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
                        path="/dummyPages/myAccount" //Path for it to be added too
                        element={<BuyerPageFramework component={<MyAccount />} />} />
                    <Route
                        path="/dummyPages/myFavorites" //Path for it to be added too
                        element={<BuyerPageFramework component={<MyFavorites />} />} />
                    <Route
                        path="/myCart" //Path for it to be added to
                        element={<BuyerPageFramework component={<MyCart />} />} />
                    {/** <Route */}
                    {/**path="/messages" //Path for it to be added to */}
                    {/**element={<BuyerPageFramework component={<MessageInbox />} />} />  */}

                    {/** ROUTING FOR SELLER NAVBAR AND SMALLNAVBAR */}
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
                    <Route
                        path="/dummyPages/myAccount" //Path for it to be added too
                        element={<SellerPageFramework component={<MyAccount />} />} />
                    {/**must also include small navbar routing like location editor and message inbox */}

                    {/** ROUTING FOR DESIGNER NAVBAR AND SMALLNAVBAR */}
                    <Route
                        path="/discover" //Path for it to be added too
                        element={<DesignerPageFramework component={<Discover />} />} />
                    <Route
                        path="/design" //Path for it to be added too
                        element={<DesignerPageFramework component={<Design />} />} />
                    <Route
                        path="/construct" //Path for it to be added too
                        element={<DesignerPageFramework component={<Construct />} />} />
                    <Route
                        path="/community" //Path for it to be added too
                        element={<DesignerPageFramework component={<Community />} />} />
                    <Route
                        path="/support" //Path for it to be added too
                        element={<DesignerPageFramework component={<Support />} />} />
                    <Route
                        path="/dummyPages/myAccount" //Path for it to be added too
                        element={<DesignerPageFramework component={<MyAccount />} />} />
                    {/**must also include small navbar routing like location editor and message inbox */}

                </Routes>
            </Router>

        </div>
    );
}

export default App;


/*
                <Route
                    //path="/" //Path for it to be added too
                    //element={<BuyerPageFramework component={<Buyer />} />} />
*/