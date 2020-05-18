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
} from "mdbreact";
import "./NavBar.css";

export default function NavBar() {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };
  return (
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
  );
}
