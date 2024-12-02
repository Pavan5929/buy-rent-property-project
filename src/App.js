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
import ScrollToTop from "./components/ScrollToTop";
import Browsemoreproperties from "./components/Browsemoreproperties";
 // Import the target component
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop/>
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
        <Route path="/browse-more" element={<Browsemoreproperties />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
