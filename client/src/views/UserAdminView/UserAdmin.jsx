import React from "react";
import {
  MDBContainer,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBAnimation,
} from "mdbreact";

import "./UserAdmin.css";
import "./scrollbar.css";

import NavBar from "../../components/NavBar";
import UserCard from "../../components/UserCard";

export default function UserAdmin() {
  return (
    <>
      <MDBContainer fluid className="px-0">
        <MDBView src="background.jpg">
          <MDBMask
            overlay="black-strong"
            className="flex-start flex-row text-white"
          >
            <MDBRow className="h-10">
              <MDBCol md="12">
                <NavBar />
              </MDBCol>
            </MDBRow>

            <MDBRow fluid className="h-85 mt-6">
              <MDBCol sm="1"></MDBCol>
              <MDBCol sm="10 flex-row">
                <div className="input-group md-form form-sm form-1 pl-0 w-75 flex-column-start justify-content-center align-search">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text black lighten-3"
                      id="basic-text1"
                    >
                      <MDBIcon className="text-white" icon="search" />
                    </span>
                  </div>
                  <input
                    className="form-control my-0 py-1 white-text"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  -
                  <MDBBtn
                    outline
                    color="white"
                    rounded
                    size="md"
                    type="submit"
                    className="mx-3 mb-0"
                  >
                    Search
                  </MDBBtn>
                </div>
                <div
                  className="scrollbar d-flex justify-content-start flex-wrap overflow-auto"
                  style={{ maxHeight: "75vh" }}
                >
                  <UserCard />
                  {/* <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard /> */}
                </div>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
            </MDBRow>
            <MDBView
              className="position-absolute add-button-positioning shape z-index-9"
              hover
            >
              <MDBAnimation type="rotateIn" duration="2s">
                <MDBIcon waves icon="plus-circle" size="4x" className="shape" />
              </MDBAnimation>
              <MDBMask overlay="black-light"></MDBMask>
            </MDBView>
          </MDBMask>
        </MDBView>
      </MDBContainer>
    </>
  );
}
