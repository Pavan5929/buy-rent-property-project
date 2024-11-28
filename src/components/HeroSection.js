import { useState } from "react";
import DatePicker from "react-datepicker";
import icon1 from "../assets/images/Icon.svg"
import icon2 from "../assets/images/Icon2.png"
import "../assets/styles/HeroSection.css"
import home from "../assets/images/home-image.svg"
import "react-datepicker/dist/react-datepicker.css";
import calender from "../assets/images/Calendar.svg"


function HeroSection() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="hero">
      <div className="headline">
        <h1>Buy, rent, or sell <br></br>your property <br></br> easily</h1>
        <p className="great">
          A great platform to buy, sell, or even rent your <br></br> properties without
          any commisions.
        </p>
      </div>

      <div className="search">
        <div className="tabs">
          <a href="#">Rent</a>
          <a href="#">Buy</a>
          <a href="#">Sell</a>
        </div>
        </div>

        <div className="search-bar-1">
          <div className="search-option">
            <label className="search-label">Location</label>
            <span className="search-value">Barcelona, Spain </span>
          </div>
          <span className="line-1"></span>
          <div className="search-option">
            <label className="search-label">When</label>
            <div className="move">
            <span className="search-value">Select Move-in Date</span>

            <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={
          <img
          className="calender"
            src={calender}
            alt="Calendar Icon"
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        }
      />
      </div>
              
          </div>
              <span className="line-1"></span>
          <button className="search-button">Browse Properties</button>
         

        </div>
      
          <div className="numbers">
      <div className="stat-item">
        <div className="stat-icon">
          <img
            src={icon1} /* Replace with actual icon path */
            alt="Renters Icon"
          />
        </div>
        <div className="survey">
        <h3>50k+ renters</h3>
        <p>believe in our service</p>
        </div>
      </div>
      <div className="stat-item">
        <div className="stat-icon">
          <img
            src={icon2} /* Replace with actual icon path */
            alt="Properties Icon"
          />
        </div>
        <div className="survey">
        <h3>10k+ properties</h3>
        <p>and house ready for occupancy</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
