import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export default function AddUserModal({ open, toggle }) {
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (event) => {
    event.preventDefault();

    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleAdd = (event) => {
    event.preventDefault();

    console.log(userData);

    fetch("http://localhost:8080/v1/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    })
      .then((response) => {
        if (response && response.status === 200) {
          return response.text();
        } else {
          console.error("Error at adding user");
          return "Error";
        }
      })
      .then((data) => {
        console.log(data);
        toggle();
      })
      .catch((err) => console.error(err));
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={open} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Add User</MDBModalHeader>
        <MDBModalBody>
          <div className="form-group" onChange={handleChange}>
            <label htmlFor="formGroupExampleInput">Name</label>
            <input type="text" className="form-control" id="name" />
            <label htmlFor="formGroupExampleInput">Email</label>
            <input type="text" className="form-control" id="email" />
            <label htmlFor="formGroupExampleInput">Password</label>
            <input type="text" className="form-control" id="password" />
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" onClick={handleAdd}>
            Submit
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
