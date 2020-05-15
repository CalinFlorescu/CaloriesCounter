import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBtnGroup } from "mdbreact";
import "./Login.css";

export default function Login() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="5">
          <form>
            <p className="h2 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center">
              <MDBContainer fluid>
                <MDBRow>
                  <MDBCol md="12 mt-4">
                    <label className="grey-text">Your Role</label>
                    <MDBBtnGroup size="md">
                      <MDBBtn color="info">Client</MDBBtn>
                      <MDBBtn color="success">Client Admin</MDBBtn>
                      <MDBBtn color="warning">Admin</MDBBtn>
                    </MDBBtnGroup>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <MDBBtn color="indigo" className="mt-5" type="submit">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
