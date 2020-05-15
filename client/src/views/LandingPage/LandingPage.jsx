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
                  <MDBNavLink to="/register">Sign up</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/login">Sign in</MDBNavLink>
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
    </>
  );
}
