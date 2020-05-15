import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBNotification,
} from "mdbreact";
import { Redirect } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [userData, setUserData] = useState({
    email: undefined,
    password: undefined,
    role: undefined,
  });
  const [popUp, setPopUp] = useState({
    status: false,
    message: undefined,
  });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const isNewRegister = sessionStorage.getItem("register");

    if (isNewRegister === "success") {
      sessionStorage.setItem("register", "");
      setPopUp({
        status: true,
        message: "You have registered with success!",
      });
    }
  }, []);

  const handleChange = (event) => {
    event.preventDefault();

    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const { role } = userData;

    fetch(`http://localhost:8080/v1/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        role,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response && response.status === 200) {
          return response.json();
        } else {
          console.error(response);
          setPopUp({
            status: true,
            message: response.text(),
          });
          return;
        }
      })
      .then((data) => {
        const { token, userId } = data;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);

        setRedirect(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      {redirect ? <Redirect to="/board" /> : null}
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4"></MDBCol>
          <MDBCol md="5">
            <form>
              <p className="h2 text-center mb-4">Sign in</p>
              <label className="grey-text">Your email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={handleChange}
              />
              <br />
              <label className="grey-text">Your password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={handleChange}
              />
              <div className="text-center">
                <MDBContainer fluid>
                  <MDBRow>
                    <MDBCol md="12 mt-4">
                      <label className="grey-text">Your Role</label>
                      <MDBBtnGroup size="md" onClick={handleChange}>
                        <MDBBtn id="role" value={2} color="info">
                          Client
                        </MDBBtn>
                        <MDBBtn id="role" value={1} color="success">
                          Client Admin
                        </MDBBtn>
                        <MDBBtn id="role" value={0} color="warning">
                          Admin
                        </MDBBtn>
                      </MDBBtnGroup>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <MDBBtn
                  color="indigo"
                  className="mt-5"
                  type="submit"
                  onClick={handleSignIn}
                >
                  Sign in
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBNotification
        show={popUp.statis}
        fade
        iconClassName="text-primary"
        title="Bootstrap"
        message={popUp.message}
        text="11 mins ago"
      />
    </>
  );
}
