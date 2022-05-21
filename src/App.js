import React, { useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Login,
  Layout,
  CreateIndicator,
  Home,
  ProtectedRoutes,
  ServiceDelivery,
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
          <Route path="/indicator" element={<CreateIndicator />} />
          <Route path="/service" element={<ServiceDelivery />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
