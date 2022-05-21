import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { TopNav } from '../export';
import SideBar from './SideBar/SideBar';

const DashboardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 100vh;
  // width: 100%;
`;

const Layout = () => {
  return (
    <React.Fragment>
      <TopNav />
      <DashboardContainer>
        <SideBar />
        <Outlet />
      </DashboardContainer>
    </React.Fragment>
  );
}

export default Layout;
