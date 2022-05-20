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
`;

const SideBar = () => {
  return (
    <Container>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/indicator"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Indicator
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      
    </Container>
  );
};

export default SideBar;
