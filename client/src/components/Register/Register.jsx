import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBtnGroup } from "mdbreact";
import "./Register.css";

export default function Register() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4"></MDBCol>
        <MDBCol md="5">
          <form>
            <p className="h2 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Name
            </label>
            <br />
            <input type="name" id="name" className="form-control" />
            <br />
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Email
            </label>
            <input type="email" id="email" className="form-control" />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Password
            </label>
            <input type="password" id="password" className="form-control" />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Confirm Password
            </label>
            <input type="password" id="password" className="form-control" />
            <div className="text-center">
              <MDBBtn color="indigo" className="mt-5" type="submit">
                Sign up
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="4"></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
