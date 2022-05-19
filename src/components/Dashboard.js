import React from 'react'
import { Outlet } from 'react-router';
import styled from 'styled-components';

const DashboardContainer = styled.section`
 

`;

 const Dashboard = () => {
  return (
    <DashboardContainer>
      <div className='navDashboard'>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>

      <Outlet />
    </DashboardContainer>
  );
}

export default Dashboard;
