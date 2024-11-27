import React from 'react';
import "../assets/styles/Description.css"
import Bedroomicons from "../assets/images/Bedroom-icons.svg"
import bathroomicons from "../assets/images/bathroom-icons.svg"
import area from "../assets/images/Area.svg";
import sparkicon from "../assets/images/sparkicon.svg"
function Description() {
  return (
    <div className="description-container">
      {/* Description Section */}
      <div className="description-section">
        <h3>Description</h3>
        <p>
          Discover your own piece of paradise with the Seaside Serenity Villa. <br /> With an open floor plan, breathtaking ocean views from every <br /> room, and direct access to a pristine sandy beach, this property is <br /> the epitome of coastal living.
        </p>
        <div className="details">
          <div className="detail-item">
            <img src={Bedroomicons} alt="icon" /> Bedrooms
            <h4>04</h4>
          </div>
          <div className="detail-item">
           <img src={bathroomicons} alt="bathroom-icons" />Bathrooms
            <h4>03</h4>
          </div>
          <div className="detail-item last">
            <img src={area} alt="area" /> Area
            <h4>2,500 Square Feet</h4>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="features-section">
        <h3>Key Features and Amenities</h3>
        <ul className="features-list">
          <li><img src={sparkicon} alt="" /> Expansive oceanfront terrace for outdoor entertaining</li>
          <li><img src={sparkicon} alt="" /> Gourmet kitchen with top-of-the-line appliances</li>
          <li><img src={sparkicon} alt="" /> Private beach access for morning strolls and sunset views</li>
          <li><img src={sparkicon} alt="" /> Master suite with a spa-inspired bathroom and ocean-facing balcony</li>
          <li><img src={sparkicon} alt="" /> Private garage and ample storage space</li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
