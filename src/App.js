import React from 'react'
import { Routes, Route, Navigate, useLocation} from "react-router-dom";
import {TopNav, Login, Dashboard} from "./components/export"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <Navigate to="/login" /> : null}
      <TopNav />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Login />} />
          <Route path="team" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
