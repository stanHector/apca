import React, { useState } from 'react'
import { Routes, Route, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  KnowledgePalliativeCareList,
  KnowledgePalliativeCare,
  AgendaForPC,
  AgendaForPCList,
  WebBasePCCLearningHouse,
  WebBasePCCLearningHouseList

} from "./export";



function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  

  
  return (
    <div className="App">
      {/* <TopNav /> */}
      <Routes>
        <Route path="login" element={<Login  />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes isLoggedIn={isLoggedIn}>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Home />} />
          {/* <Route path="/indicator" element={<CreateIndicator />} /> */}
          <Route path="/service-list" element={<ServiceDeliveryList />} />
          <Route path="/policy-list" element={<PolicyList />} />
          <Route path="/indicator" element={<Indicator />} />
          <Route path="/service" element={<ServiceDelivery />} />
          <Route
            path="/medi-tech-list"
            element={<MedicationTechnologiesList />}
          />
          <Route path="/education-list" element={<EducationList />} />
          <Route
            path="/africa-palliative-list"
            element={<AfricanPalliativeCareList />}
          />
          <Route path="/indicator-list" element={<IndicatorList />} />
          <Route path="/agenda-pc" element={<AgendaForPCList />} />
          <Route
            path="/knowledge-care-list"
            element={<KnowledgePalliativeCareList />}
          />
          <Route
            path="web-based-pc"
            element={<WebBasePCCLearningHouseList />}
          />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;