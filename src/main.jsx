import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import App from "./App";
import MenuLateral from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";
import IA from "./components/IA";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuLateral/>
      <Header />
      <App />
      <IA />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);