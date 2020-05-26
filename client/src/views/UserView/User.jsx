import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBView,
  MDBCol,
  MDBRow,
  MDBMask,
  MDBAnimation,
  MDBIcon,
  MDBProgress,
} from "mdbreact";

import NavBar from "../../components/NavBar";
import getCurrentDate from "../../utils/getCurrentDate";
import setProgressBarColor from "../../utils/setProgressBarColor";

import "./User.css";

export default function User() {
  const [date, setDate] = useState(undefined);

  const completionProgress = 75;

  useEffect(() => {
    const currentDate = getCurrentDate();

    setDate(currentDate);
  }, []);

  const handleAddModal = () => {
    console.log("Added menu");
  };

  return (
    <>
      <MDBContainer fluid className="px-0">
        <MDBView src="background.jpg" className="user-view">
          <MDBMask
            overlay="black-strong"
            className="flex-start flex-row text-white user-mask"
          >
            <MDBRow className="h-10">
              <MDBCol md="12">
                <NavBar />
              </MDBCol>
            </MDBRow>

            <MDBRow fluid className="h-10 mx-1">
              <MDBCol md="3">
                <div className="calories-target-box">
                  <div className="glass"></div>
                  <div className="content w-100">
                    <h4>Daily calories target: 2000</h4>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="9">
                <div className="calories-target-box">
                  <div className="glass"></div>
                  <div className="content w-100">
                    <h4>{date}</h4>
                    <MDBProgress
                      material
                      value={completionProgress}
                      height="20px"
                      className="w-100"
                      color={setProgressBarColor(completionProgress)}
                    >
                      {completionProgress}%
                    </MDBProgress>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow fluid className="h-75 mx-1 mt-5">
              <MDBCol md="3">
                <MDBRow fluid>
                  <MDBCol md="12 d-flex flex-row justify-content-center">
                    <div className="calories-target-box w-100">
                      <div className="glass"></div>
                      <div className="content w-100">
                        <h3>Recent Meals</h3>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow fluid className="h-85 recent-meals-row">
                  <MDBCol
                    md="12"
                    className="d-flex flex-column recent-meals-box mt-1 overflow-auto"
                  >
                    <div className="w-100 h-25 test-div">asd</div>
                    <div className="w-100 h-25 test-div">asd</div>
                    <div className="w-100 h-25 test-div">asd</div>
                    <div className="w-100 h-25 test-div">asd</div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="9">
                <MDBRow fluid className="h-100">
                  <MDBCol md="4">
                    <h1 className="text-center">Breakfast</h1>
                    <div className="w-100 h-25 test-div">asd</div>
                    <div className="w-100 h-25 test-div">asd</div>
                  </MDBCol>
                  <MDBCol md="4">
                    <h1 className="text-center">Lunch</h1>
                    <div className="w-100 h-25 test-div">asd</div>
                  </MDBCol>
                  <MDBCol md="4">
                    <h1 className="text-center">Dinner</h1>
                    <div className="w-100 h-25 test-div">asd</div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
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
    </>
  );
}
