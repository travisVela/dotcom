import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
