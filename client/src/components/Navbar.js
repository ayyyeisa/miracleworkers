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
                <NavLink to="/" activeStyle>
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
};

export const SmallerSellerNavBar = () => {
    return (
        <smallNav>
            <SmallNavMenu>
                <SmallNavLink to="/my-account" activeStyle>
                    My Account
                </SmallNavLink>
                <SmallNavLink to="/location-editor" activeStyle>
                    Location Editor
                </SmallNavLink>
                <SmallNavLink to="/message-inbox" activeStyle>
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
                <SmallNavLink to="/dummyPages/myaccount" activeStyle>
                    My Account
                </SmallNavLink>
                <SmallNavLink to="/dummyPages/myfavorites" activeStyle>
                    My Favorites
                </SmallNavLink>
                <SmallNavLink to="/dummyPages/mycart" activeStyle>
                    My Cart
                </SmallNavLink>
            </SmallNavMenu>
        </smallNav>
    );
};