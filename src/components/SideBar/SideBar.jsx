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
    width: 250px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
  
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
`;

const SideBar = () => {
  return (
    <Container>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/indicator" className={({ isActive }) => (isActive ? "active" : "")}>Indicator</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/settings">Settings</NavLink>

    </Container>
  );
};

export default SideBar;
