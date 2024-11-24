import React from "react";
import "../assets/styles/Location.css"
function Location() {
  return (
    <div className="property-listing">
      <div className="header">
        <div className="center-header">
        <h2>Based on your location</h2>
        <p>Some of our picked properties near your location.</p>
        </div>
        <div className="filters">
            <div className="categories">
          <button>Rent</button>
          <button>Buy</button>
          <button>Sell</button>
          </div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="properties">
        <div className="property-card">
          <span className="badge">Popular</span>
          <h3>$2,095/month</h3>
          <h4>Palm Harbor</h4>
          <p>2699 Green Valley, Highland Lake, FL</p>
          <div className="details">
            <span>3 Beds</span>
            <span>2 Bathrooms</span>
            <span>5×7 m²</span>
          </div>
        </div>
        <div className="property-card">
          <span className="badge">Popular</span>
          <h3>$2,700/month</h3>
          <h4>Beverly Springfield</h4>
          <p>2821 Lake Sevilla, Palm Harbor, TX</p>
          <div className="details">
            <span>4 Beds</span>
            <span>2 Bathrooms</span>
            <span>6×7.5 m²</span>
          </div>
        </div>
        <div className="property-card">
          <span className="badge">Popular</span>
          <h3>$4,550/month</h3>
          <h4>Faulkner Ave</h4>
          <p>909 Woodland St, Michigan, IN</p>
          <div className="details">
            <span>4 Beds</span>
            <span>3 Bathrooms</span>
            <span>8×10 m²</span>
          </div>
        </div>
        <div className="property-card">
          <h3>$2,400/month</h3>
          <h4>St. Crystal</h4>
          <p>210 US Highway, Highland Lake, FL</p>
          <div className="details">
            <span>4 Beds</span>
            <span>2 Bathrooms</span>
            <span>6×8 m²</span>
          </div>
        </div>
        <div className="property-card">
          <h3>$1,500/month</h3>
          <h4>Cove Red</h4>
          <p>243 Curlew Road, Palm Harbor, TX</p>
          <div className="details">
            <span>2 Beds</span>
            <span>1 Bathroom</span>
            <span>5×7.5 m²</span>
          </div>
        </div>
        <div className="property-card">
          <h3>$1,600/month</h3>
          <h4>Tarpon Bay</h4>
          <p>103 Lake Shores, Michigan, IN</p>
          <div className="details">
            <span>3 Beds</span>
            <span>1 Bathroom</span>
            <span>5×7 m²</span>
          </div>
        </div>
      </div>
      <button className="browse-more">Browse more properties</button>
    </div>
  );
}

export default Location;
