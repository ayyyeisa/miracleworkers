/// <summary>
/// Authors: Jason Shull, Parker Libby
/// Description: This sript handles all of the links that the files need to navigate to for the navbar
/// </summary>

import React from "react";
import { Nav, NavLink, NavMenu, SmallNavMenu, smallNav } from "./NavbarElements";

export const BuyerNavBar = () => {
    return (
        <Nav>
            <NavMenu>
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
                <NavLink to="/My Account" activeStyle>
                    My Account
                </NavLink>
                <NavLink to="/Location Editor" activeStyle>
                    Location Editor
                </NavLink>
                <NavLink to="/Message Inbox" activeStyle>
                    Message Inbox
                </NavLink>
            </SmallNavMenu>
        </smallNav>
    );
};