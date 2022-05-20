import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';
import Topbar from './topbar/Topbar';

const DashboardContainer = styled.section`
`;

const Dashboard = () => {
  return (

    <DashboardContainer>
      <Topbar />
      <div className='navDashboard'>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Indicator</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      <Outlet />
    </DashboardContainer>
  );
}

export default Dashboard;
