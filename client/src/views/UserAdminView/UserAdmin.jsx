import React, { useState, useEffect } from "react";
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
import AddUserModal from "../../components/AddUserModal";
import EditUserModal from "../../components/EditUserModal";

export default function UserAdmin() {
  const [users, setUsers] = useState([]);
  const [update, setForceUpdate] = useState(false);
  const [openAddModal, setAddModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [openEditModal, setEditModal] = useState({
    status: false,
    user: undefined,
  });

  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    fetch("http://localhost:8080/v1/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        userId,
      },
    })
      .then((response) => {
        if (response && response.status === 200) {
          return response.json();
        } else {
          console.error("Error at retrieving user list");
          return [];
        }
      })
      .then((data) => {
        if (data) {
          setUsers(data);
        }
      })
      .catch((err) => console.error(err));
  }, [openAddModal, update, openEditModal.status]);

  const forceUpdate = () => {
    setForceUpdate(!update);
  };

  const handleAddModal = () => {
    setAddModal(!openAddModal);
  };

  const handleEditModal = (user) => {
    if (user) {
      setEditModal({
        status: !openEditModal.status,
        user,
      });
    } else {
      setEditModal({
        status: !openEditModal.status,
        user: {},
      });
    }
  };

  const handleChange = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const usersFound = users.filter((user) => user.name.includes(searchValue));

    setSearchedUsers(usersFound);
  };

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
                    onChange={handleChange}
                  />
                  <MDBBtn
                    outline
                    color="white"
                    rounded
                    size="md"
                    type="submit"
                    className="mx-3 mb-0"
                    onClick={handleSearch}
                  >
                    Search
                  </MDBBtn>
                </div>
                <div
                  className="scrollbar d-flex justify-content-start flex-wrap overflow-auto"
                  style={{ maxHeight: "75vh" }}
                >
                  {searchedUsers.length > 0
                    ? searchedUsers.map((searchedUser, index) => (
                        <UserCard
                          key={index}
                          id={searchedUser._id}
                          name={searchedUser.name}
                          email={searchedUser.email}
                          forceUpdate={forceUpdate}
                          role={"Client"}
                          updateUser={handleEditModal}
                        />
                      ))
                    : users.map((user, index) => (
                        <UserCard
                          key={index}
                          id={user._id}
                          name={user.name}
                          email={user.email}
                          forceUpdate={forceUpdate}
                          role={"Client"}
                          updateUser={handleEditModal}
                        />
                      ))}
                </div>
              </MDBCol>
              <MDBCol sm="1"></MDBCol>
            </MDBRow>
            <MDBView
              className="position-absolute add-button-positioning shape z-index-9"
              onClick={handleAddModal}
              hover
            >
              <MDBAnimation type="rotateIn" duration="2s">
                <MDBIcon icon="plus-circle" size="4x" className="shape" />
              </MDBAnimation>
              <MDBMask overlay="black-light"></MDBMask>
            </MDBView>
          </MDBMask>
        </MDBView>
      </MDBContainer>

      <AddUserModal open={openAddModal} toggle={handleAddModal} />
      <EditUserModal
        open={openEditModal.status}
        toggle={handleEditModal}
        user={openEditModal.user}
      />
    </>
  );
}
