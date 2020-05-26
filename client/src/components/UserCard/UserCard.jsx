import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact";
import "./UserCard.css";

export default function UserCard({
  name,
  email,
  role,
  id,
  updateUser,
  forceUpdate,
}) {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/v1/api/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        userId,
      },
    })
      .then((response) => {
        if (response && response.status === 200) {
          forceUpdate();
          return response.json();
        } else {
          console.error("Error at deleting user");
          return "Error";
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mx-2 w-30 mt-2">
      <MDBCard color="elegant-color" className="card-body">
        <MDBCardTitle className="h3 white-text">
          {name ? name : "Username"}
        </MDBCardTitle>
        <MDBCardText className="white-text">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol md="8">
                {" "}
                Email address: {email ? email : "email"}
                <br />
                Role: {role ? role : "Role"}
              </MDBCol>
              <MDBCol
                md="4"
                className="d-flex flex-row flex-end justify-content-between"
              >
                <MDBView hover onClick={handleDelete}>
                  <MDBIcon far size="2x" icon="trash-alt" />
                  <MDBMask overlay="black-light"></MDBMask>
                </MDBView>

                <MDBView
                  hover
                  onClick={() => updateUser({ name, email, id, role })}
                >
                  <MDBIcon far size="2x" icon="edit" />
                  <MDBMask overlay="black-light"></MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardText>
      </MDBCard>{" "}
    </div>
  );
}
