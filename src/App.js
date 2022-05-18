import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Education from "./components/education/Education";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Education from "./components/education/Education"
import CreateIndicator from './components/indicator/CreateIndicator'
import Policy from "./components/policy/Policy";
import ServiceDelivery from './components/serviceDelivery/ServiceDelivery'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div className="App">
      <Topbar/>
     <Education/>
    </div>
  );
}

export default App;
