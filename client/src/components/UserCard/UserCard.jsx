import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText } from "mdbreact";
import "./UserCard.css";

export default function UserCard(props) {
  const { username, email, role } = props;
  return (
    <div className="mx-2 w-30 mt-2">
      <MDBCard color="elegant-color" className="card-body">
        <MDBCardTitle className="h3 white-text">
          {username ? username : "Username"}
        </MDBCardTitle>
        <MDBCardText className="white-text">
          Email address: {email ? email : "email"}
          <br />
          Role: {role ? role : "Role"}
        </MDBCardText>
      </MDBCard>{" "}
    </div>
  );
}
