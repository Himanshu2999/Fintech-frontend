import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import accountRedaucer from "./reducer/accountRedaucer";
import { Provider } from "react-redux";


const mystore = configureStore({
  reducer: accountRedaucer
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


);
