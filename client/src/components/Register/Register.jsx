import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Redirect } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: undefined,
  });

  const handleChange = (event) => {
    event.preventDefault();

    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = userData;

    if (password === confirmPassword) {
      fetch("http://localhost:8080/v1/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then((response) => {
          if (response && response.status === 200) {
            sessionStorage.setItem("register", "success");
            setRedirect(true);
          } else {
            return response.text();
          }
        })
        .then((data) => {
          setError({
            status: true,
            message: data,
          });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      {redirect ? <Redirect to="/login" /> : null}
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4"></MDBCol>
          <MDBCol md="5">
            <form onChange={handleChange} onSubmit={handleSubmit}>
              <p className="h2 text-center mb-4">Sign up</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Name
              </label>
              <br />
              <input type="name" id="name" className="form-control" required />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                required
              />
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
    </>
  );
}
