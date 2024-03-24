import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
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

export const SellerNavBar = () =>
{
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/InsertLink" activeStyle>
                    Insert Link Name
                </NavLink>
                <NavLink to="/InsertLink" activeStyle>
                    Insert Link Name
                </NavLink>
                <NavLink to="/InsertLink" activeStyle>
                    Insert Link Name
                </NavLink>
                <NavLink to="/InsertLink" activeStyle>
                    Insert Link Name
                </NavLink>
                <NavLink to="/InsertLink" activeStyle>
                    Insert Link Name
                </NavLink>
            </NavMenu>
        </Nav>
    );
}