import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AfricanPalliativeCare } from './components/africanPalliativeCare/AfricanPalliativeCare';
import { ServiceDeliveryList } from './components/serviceDelivery/ServiceDeliveryList';
import { PolicyList } from './components/policy/PolicyList';
import {EducationList} from'./components/education/EducationList'
import { MedicationTechnologiesList } from './components/medicationTechnologies/MedicationTechnologiesList';
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
  Indicator,
  ProtectedRoutes,
  AfricanPalliativeCareList,
  
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
          <Route path="/indicator" element={<Indicator />} />
          <Route path="/medi-tech-list" element={<MedicationTechnologiesList/>}/>
          <Route path="/education-list" element={<EducationList/>}/>
          <Route path="/africa-palliative-list" element={<AfricanPalliativeCareList/>}/>
          <Route path="/indicator-list" element={<IndicatorList/>}/>
          
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;