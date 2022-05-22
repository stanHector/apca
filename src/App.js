import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AfricanPalliativeCare } from './components/africanPalliativeCare/AfricanPalliativeCare';
import { ServiceDeliveryList } from './components/serviceDelivery/ServiceDeliveryList';
import { PolicyList } from './components/policy/PolicyList';
import {
  Login,
  Layout,
  CreateIndicator,
  Home,
  ServiceDelivery,
  Policy,
  Education,
  MedicationTechnologies,
  IndicatorList,
  ProtectedRoutes,
  // AfricanPalliativeCare,
  
} from "./export";

function App() {
  const [user, setUser] = useState({});
  const [location, setLocation] = useState(useLocation());

  console.log(user)
  return (
    <div className="App">
      {/* <TopNav /> */}
      <Routes>
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<ProtectedRoutes user={user}>
            <Layout />
          </ProtectedRoutes> }>
          <Route index element={<Home />} />
          {/* <Route path="/indicator" element={<CreateIndicator />} /> */}
          <Route path="/service-list" element={<ServiceDeliveryList />} />
          <Route path="/policy-list" element={<PolicyList />} />
          <Route path="medi-tech" element={<MedicationTechnologies/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/africa-palliative" element={<AfricanPalliativeCare/>}/>
          <Route path="/indicator-list" element={<IndicatorList/>}/>
          
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;