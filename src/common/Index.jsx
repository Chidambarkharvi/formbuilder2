import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/modules/home";
import FormBuilder from "../components/modules/form-builder";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormBuilder />} />
          <Route path="" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Index;
