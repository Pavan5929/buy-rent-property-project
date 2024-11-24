import React from "react";
import bluehose from '../assets/images/bluehouse.png'
import "../assets/styles/Benefit.css"
import issurance from '../assets/images/issurance.svg'
import bestprice from '../assets/images/bestprice.svg'
import lowest from '../assets/images/lowest.svg'
import control from '../assets/images/control.svg'
function Benefit() {
  return (
    <div className="benefit">
      {/* Left Section */}
      <div className="benefits-left">
        <h2>The new way to find <br />your  new home</h2>
        <p>
          Find your dream place to live in with <br /> more than 10k+ properties
          listed.
        </p>
        <button className="browse-button">Browse Properties</button>
        <img
          src={bluehose} // Replace with the correct path for your image
          alt="Home Illustration"
          className="home-illustration"
        />
      </div>

      {/* Right Section */}
      <div className="benefits-right">
        <div className="benefit-item">
          <div className="icon">
            {/* Replace with an appropriate icon */}
            <img
              src={issurance}
              alt="Property Insurance Icon"
            />
          </div>
      
          <div className="content">
            <h3>Property Insurance</h3>
            <p>
              We offer our customer property <br></br> protection of liability coverage
              and <br></br>insurance for their better life.
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="icon">
            <img src={bestprice} alt="Best Price Icon" />
          </div>
          <div className="content">
            <h3>Best Price</h3>
            <p className="best">
              Not sure what you should be charging <br /> for your property? No need to
              worry, let us  do the numbers for you.
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="icon">
            <img src={lowest} alt="Lowest Commission Icon" />
          </div>
          <div className="content">
            <h3>Lowest Commission</h3>
            <p>
              You no longer have to negotiate <br /> commissions and haggle with other <br />
              agents. It only costs 2%!
            </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="icon">
            <img src={control} alt="Overall Control Icon" />
          </div>
          <div className="content">
            <h3>Overall Control</h3>
            <p>
              Get a virtual tour, and schedule visits <br></br> before you rent or buy any
              properties. <br></br>  You get overall control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
