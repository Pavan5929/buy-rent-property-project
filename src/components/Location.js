import React, { useState } from "react";
import "../assets/styles/Location.css";
import { useNavigate } from "react-router-dom"; 
import key from "../assets/images/key.svg";
import buy from "../assets/images/buy.svg";
import sell from "../assets/images/sell.svg";
import home1 from "../assets/images/home-1.svg";
import home2 from "../assets/images/Home-2.svg";
import home3 from "../assets/images/home-3.svg";
import home4 from "../assets/images/home-4.svg";
import home5 from "../assets/images/home-5.svg";
import home6 from "../assets/images/home-6.svg";
import Bed from "../assets/images/Bed.svg";
import Bath from "../assets/images/Bath.svg";
import SquareMeters from "../assets/images/SquareMeters.svg";
import star from "../assets/images/star.svg";

function Location() {
  const navigate = useNavigate(); // Initialize the navigation hook
  
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  
  // List of all properties (you can add more properties as needed)
  const properties = [
    {
      id: 1,
      name: "Palm Harbor",
      address: "2699 Green Valley, Highland Lake, FL",
      price: "$2,095",
      beds: 3,
      bathrooms: 2,
      squareMeters: "5×7 m²",
      img: home1
    },
    {
      id: 2,
      name: "Beverly Springfield",
      address: "2821 Lake Sevilla, Palm Harbor, TX",
      price: "$2,095",
      beds: 4,
      bathrooms: 2,
      squareMeters: "6×7.5 m²",
      img: home2
    },
    {
      id: 3,
      name: "Faulkner Ave",
      address: "909 Woodland St, Michigan, IN",
      price: "$2,095",
      beds: 4,
      bathrooms: 3,
      squareMeters: "8×10 m²",
      img: home3
    },
    {
      id: 4,
      name: "St. Crystal",
      address: "210 US Highway, Highland Lake, FL",
      price: "$2,095",
      beds: 4,
      bathrooms: 2,
      squareMeters: "6×8 m²",
      img: home4
    },
    {
      id: 5,
      name: "Cove Red",
      address: "243 Curlew Road, Palm Harbor, TX",
      price: "$2,095",
      beds: 2,
      bathrooms: 1,
      squareMeters: "5×7.5 m²",
      img: home5
    },
    {
      id: 6,
      name: "Tarpon Bay",
      address: "103 Lake Shores, Michigan, IN",
      price: "$2,095",
      beds: 3,
      bathrooms: 1,
      squareMeters: "5×7 m²",
      img: home6
    },
  ];

  // Filter properties based on search term
  const filteredProperties = properties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/property/`); // Navigate to the Property page
  };

  return (
    <div className="property-listing">
      <div className="header">
        <div className="center-header">
          <h2>Based on your location</h2>
          <p>Some of our picked properties near your location.</p>
        </div>
        <div className="filters">
          <div className="categories">
            <button>
              <img src={key} alt="img" /> Rent
            </button>
            <button>
              <img src={buy} alt="img" /> Buy
            </button>
            <button>
              <img src={sell} alt="img" /> Sell
            </button>
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update the search term on change
          />
        </div>
      </div>
      
      <div className="properties-wrapper">
        <div className="properties">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card" onClick={() => handleCardClick(property.id)}>
              <img src={property.img} alt={property.name} />
              <span className="badge">
                <img src={star} alt="star" />Popular
              </span>
              <div className="like">
                <h3><span className="price">{property.price}</span><span className="month">/month</span></h3>
                <div className="circle">
                  <svg
                    className="heart"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="none"
                      stroke="#6c5ce7"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <h4>{property.name}</h4>
              <p>{property.address}</p>
              <hr className="propertyline" />
              <div className="details-1">
                <span><img src={Bed} alt="bed" />{property.beds} Beds</span>
                <span><img src={Bath} alt="bath" /> {property.bathrooms} Bathrooms</span>
                <span><img src={SquareMeters} alt="square" /> {property.squareMeters}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="browse">

           <button 
        className="browse-more"
        onClick={() => navigate("/browse-more")} // Navigate on click
      >  Browse Properties</button>
         
      </div>
    </div>
  );
}

export default Location;
