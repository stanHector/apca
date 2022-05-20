import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';
import SideBar from './SideBar/SideBar';
import Topbar from './topbar/Topbar';

const DashboardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100vh;
  width: 100%;
`;

const Layout = () => {
  return (

    <DashboardContainer>
      <SideBar />
      <Outlet />
    </DashboardContainer>
  );
}

export default Layout;
