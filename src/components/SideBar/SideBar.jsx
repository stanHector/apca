import { Label } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  height: 100%;

  a {
    text-decoration: none;
  }

  .active {
    color: #f00;
  }
  flex: 0.5;
    height: calc(100vh - 50px );
    /* background-color: rgb(243, 241, 239); */
    // position: sticky;
    background: #F4F6F6;
    top: 50px;
    height:100%;
    width:17%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
  
    overflow-x: hidden; /* Disable horizontal scroll */
    // padding-top: 20px;
    margin-top:50px;
`;

const SideBar = () => {
  return (
    <React.Fragment>
      <Container>
        <label style={{ fontWeight: "bold", marginTop: "12px", margin: "20px", textDecoration: "underline", color: "#694977", fontSize: "35px" }}>Dashboard</label>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Home</NavLink>
        <NavLink to="/indicator" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Indicator</NavLink>
        <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Service Delivery</NavLink>
        <NavLink to="/policy" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Policy</NavLink>
        <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Education</NavLink>
        <NavLink to="/medi-tech" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>Medication And Technologies</NavLink>
        <NavLink to="/africa-palliative" className={({ isActive }) => (isActive ? "active" : "")} style={{ margin: "10px" }}>A functional African palliative care research network in place</NavLink>
        {/* <NavLink to="/product" style={{ margin: "10px" }}>Product</NavLink>
        <NavLink to="/settings" style={{ margin: "10px" }}>Settings</NavLink> */}
        <NavLink to="/login" style={{ margin: "10px" }}>Logout</NavLink>

      </Container>
      {/* </div> */}

    </React.Fragment>
  );
};

export default SideBar;
