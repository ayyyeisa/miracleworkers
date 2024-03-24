/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to for the navbar
/// </summary>

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

export const BuyerNavBar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/customerLandingPage" activeStyle>
                    Landing Page
                </NavLink>
                <NavLink to="/houses" activeStyle>
                    Houses
                </NavLink>
                <NavLink to="/structures" activeStyle>
                    Structures
                </NavLink>
                <NavLink to="/brands" activeStyle>
                    Brands
                </NavLink>
                <NavLink to="/resources" activeStyle>
                    Resources
                </NavLink>
                <NavLink to="/company" activeStyle>
                    Company
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export const SellerNavBar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/discover" activeStyle>
                    Discover
                </NavLink>
                <NavLink to="/design" activeStyle>
                    Design
                </NavLink>
                <NavLink to="/construct" activeStyle>
                    Construct
                </NavLink>
                <NavLink to="/community" activeStyle>
                    Community
                </NavLink>
                <NavLink to="/support" activeStyle>
                    Support
                </NavLink>
            </NavMenu>
        </Nav>
    );
}