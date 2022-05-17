import React from "react";
import ReactDOM from "react-dom/client";
//* redux setup *//
import { Provider } from "react-redux";
import { store } from "./state/store";
//* End of redux setup *//

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
