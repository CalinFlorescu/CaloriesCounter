import React, { useState } from "react";
import { MDBView, MDBMask } from "mdbreact";

import "./LandingPage.css";

import NavBar from "../../components/NavBar";

export default function ({ children }) {
  const displayChildren = () => {
    const ChildComponent = children;

    return <ChildComponent />;
  };

  return (
    <>
      <NavBar />

      <MDBView src="background.jpg">
        <MDBMask
          overlay="black-strong"
          className="flex-center flex-column text-white text-center"
        >
          {displayChildren()}
        </MDBMask>
      </MDBView>
    </>
  );
}
