import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import App from "./App";
import MenuLateral from "./components/Menu";
import Footer from "./components/Footer";
import "./index.css";
import { Menu } from "lucide-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuLateral />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);