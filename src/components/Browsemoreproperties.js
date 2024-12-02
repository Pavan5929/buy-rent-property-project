import React from 'react'
import "../assets/styles/Browsemoreproperties.css"
import home1 from "../assets/images/home-1.svg";
import home2 from "../assets/images/Home-2.svg";
import home3 from "../assets/images/home-3.svg";
import home4 from "../assets/images/home-4.svg";
import home5 from "../assets/images/home-5.svg";
import home6 from "../assets/images/home-6.svg";
import home7 from "../assets/images/Home7.svg";
import home8 from "../assets/images/home8.svg";
import Bed from "../assets/images/Bed.svg";
import Bath from "../assets/images/Bath.svg";
import SquareMeters from "../assets/images/SquareMeters.svg";
import star from "../assets/images/star.svg";
import home9 from "../assets/images/home9.svg";
import { useNavigate } from 'react-router-dom';
function Browsemoreproperties() {

      const navigate = useNavigate(); // Initialize the navigation hook

  

  const handleCardClick = () => {

    navigate("/property"); // Navigate to the Sample page
    
  };
  return (
    <div className='basedonlocation'>
        <div className='location'>
            <h2>Based on your location</h2>
            <p>Some of our picked properties near your location</p>
        </div>

        <form className="form-browse">
        <input
          type="email"
          placeholder="Enter your email address"
          className="email-input"
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>



       <div className="properties">
        <div className="property-card" onClick={handleCardClick}>
          <img src={home1} alt="home1" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
          <h3><span className="price">$2,095</span><span className="month">/month</span></h3>

              <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h4>Palm Harbor</h4>
          <p>2699 Green Valley, Highland Lake, FL</p>
          <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>3 Beds</span>
            <span><img src={Bath} alt="bath" /> 2 Bathrooms</span>
            <span><img src={SquareMeters} alt="square" /> 5×7 m²</span>
          </div>
        </div>
        <div className="property-card" onClick={handleCardClick}>
          <img src={home2} alt="home2" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
             <h3><span className="price">$2,095</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h4>Beverly Springfield</h4>
          <p>2821 Lake Sevilla, Palm Harbor, TX</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>4 Beds</span>
            <span><img src={Bath} alt="bath" />2 Bathrooms</span>
            <span><img src={SquareMeters} alt="square" />6×7.5 m²</span>
          </div>
        </div>
        <div className="property-card" onClick={handleCardClick}>
          <img src={home3} alt="home3" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
           <h3><span className="price">$2,095</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h4>Faulkner Ave</h4>
          <p>909 Woodland St, Michigan, IN</p>
            <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>4 Beds</span>
            <span><img src={Bath} alt="bath" />3 Bathrooms</span>
            <span><img src={SquareMeters} alt="square" />8×10 m²</span>
          </div>
        </div>
        <div className="property-card" onClick={handleCardClick}>
          <img src={home4} alt="home4" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
             <h3><span className="price">$2,095</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h4>St. Crystal</h4>
          <p>210 US Highway, Highland Lake, FL</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>4 Beds</span>
            <span><img src={Bath} alt="bath" />2 Bathrooms</span>
            <span><img src={SquareMeters} alt="square" />6×8 m²</span>
          </div>
        </div>
        <div className="property-card" onClick={handleCardClick}>
          <img src={home5} alt="home5" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
            <h3><span className="price">$2,095</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
          <h4>Cove Red</h4>
          <p>243 Curlew Road, Palm Harbor, TX</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>2 Beds</span>
            <span><img src={Bath} alt="bath" />1 Bathroom</span>
            <span><img src={SquareMeters} alt="square" />5×7.5 m²</span>
          </div>
        </div>
        <div className="property-card" onClick={handleCardClick}>
          <img src={home6} alt="home6" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
          <h3><span className="price">$2,095</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <h4>Tarpon Bay</h4>
          <p>103 Lake Shores, Michigan, IN</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>3 Beds</span>
            <span><img src={Bath} alt="bath" />1 Bathroom</span>
            <span><img src={SquareMeters} alt="square" />5×7 m²</span>
          </div>
        </div>

         <div className="property-card" onClick={handleCardClick}>
          <img src={home7} alt="home7" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
          <h3><span className="price">$2,400</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <h4>St.Crystal</h4>
          <p>210 US Highway, Highland Lake, FL</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>4 Beds</span>
            <span><img src={Bath} alt="bath" />2 Bathroom</span>
            <span><img src={SquareMeters} alt="square" />6×8 m²</span>
          </div>
        </div>

        
         <div className="property-card" onClick={handleCardClick}>
          <img src={home8} alt="home8" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
          <h3><span className="price">$1,500</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <h4>Cove Red</h4>
          <p>243 Curiew Road,Palm Harbor,TX</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>2 Beds</span>
            <span><img src={Bath} alt="bath" />1 Bathroom</span>
            <span><img src={SquareMeters} alt="square" />5×7 m²</span>
          </div>
        </div>


         
         <div className="property-card" onClick={handleCardClick}>
          <img src={home9} alt="home9" />
          <span className="badge"><img src={star} alt="star" />Popular</span>
          <div className="like">
          <h3><span className="price">$1,600</span><span className="month">/month</span></h3>
            <div class="circle">
              <svg
                class="heart"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="none"
                  stroke="#6c5ce7"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <h4>Tarpon Bay</h4>
          <p>103 Lake Shore,michigan,IN</p>
             <hr className="propertyline" />
          <div className="details-1">
            <span><img src={Bed} alt="bed"/>3 Beds</span>
            <span><img src={Bath} alt="bath" />1 Bathroom</span>
            <span><img src={SquareMeters} alt="square" />5×7 m²</span>
          </div>
        </div>
      </div>
        
       
    </div>
  )
}

export default Browsemoreproperties
