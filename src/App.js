import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Homeimage from "./components/Homeimage";
import Benefit from "./components/Benefit";
import Location from "./components/Location";
import ForTenantsforLandlords from "./components/ForTenantsforLandlords";
import Spampromise from "./components/Spampromise";
import Footer from "./components/Footer";
import Property from "./components/Property";
 // Import the target component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="heroimage">
                <HeroSection />
                <div className="image">
                  <Homeimage />
                </div>
              </div>
              <Benefit />
              <Location />
              <ForTenantsforLandlords />
              <Spampromise />
            </>
          }
        />
        <Route path="/property" element={<Property/>} /> {/* Define Sample.js route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
