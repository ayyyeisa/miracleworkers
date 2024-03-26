/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to for the navbar
/// </summary>

import React from "react";
import { Nav, NavLink, NavMenu, SmallNavMenu, SmallNavLink } from "./NavbarElements";

export const BuyerNavBar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/customerLandingPage" activeStyle>
                    HOME
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
                <NavLink to="/Discover" activeStyle>
                    Discover
                </NavLink>
                <NavLink to="/Design" activeStyle>
                    Design
                </NavLink>
                <NavLink to="/Construct" activeStyle>
                    Construct
                </NavLink>
                <NavLink to="/Community" activeStyle>
                    Community
                </NavLink>
                <NavLink to="/Support" activeStyle>
                    Support
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export const SmallerSellerNavBar = () => {
    return (
        <smallNav>
            <SmallNavMenu>
                <SmallNavLink to="/My Account" activeStyle>
                    My Account
                </SmallNavLink>
                <SmallNavLink to="/Location Editor" activeStyle>
                    Location Editor
                </SmallNavLink>
                <SmallNavLink to="/Message Inbox" activeStyle>
                    Message Inbox
                </SmallNavLink>
            </SmallNavMenu>
        </smallNav>
    );
};

export const SmallerBuyerNavBar = () => {
    return (
        <smallNav>
            <SmallNavMenu>
                <SmallNavLink to="/dummyPages/myAccount" activeStyle>
                    My Account
                </SmallNavLink>
                <SmallNavLink to="/dummyPages/myFavorites" activeStyle>
                    My Favorites
                </SmallNavLink>
                <SmallNavLink to="/dummyPages/myCart" activeStyle>
                    My Cart
                </SmallNavLink>
            </SmallNavMenu>
        </smallNav>
    );
};