import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Login,
  Layout,
  Home,
  ServiceDelivery,
  Policy,
  Education,
  MedicationTechnologies,
  AfricanPalliativeCare,
  MedicationTechnologiesList,
  ServiceDeliveryList,
  IndicatorList,
  PolicyList,
  EducationList,
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
          <Route path="/service" element={<ServiceDelivery />} />
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