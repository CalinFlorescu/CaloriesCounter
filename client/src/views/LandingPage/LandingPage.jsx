import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBView,
  MDBMask,
} from "mdbreact";

import "./LandingPage.css";

export default function ({ children }) {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };

  const displayChildren = () => {
    const ChildComponent = children;

    return <ChildComponent />;
  };

  return (
    <>
      <header>
        <MDBNavbar color="black" fixed="top" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand href="/">
              <strong>CC</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={onClick} />
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/register">Register</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBView src="background.jpg">
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
          >
            {displayChildren()}
          </MDBMask>
        </MDBView>
      </header>

      <main>
        <MDBContainer className="text-center my-5">
          <p align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </MDBContainer>
      </main>
    </>
  );
}
