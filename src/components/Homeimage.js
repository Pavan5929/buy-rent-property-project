import React from 'react'
import image from "../assets/images/home-image.svg"
import "../assets/styles/Homeimage.css"
import manuelvilla from "../assets/images/manuelvilla.svg"
import frame from '../assets/images/Frame.svg';
import Group from '../assets/images/Group.svg';
import Trustpilotback from '../assets/images/Trustpilotback.png'

function Homeimage() {
  return (
    <div className='image'>
    
    <img src={image} alt="home" />

      <div className="card">
      <div className="card-header">
        <img
          src={manuelvilla}
          alt="profile"
          className="profile-pic"
        />
        <div className="user-info">
          <h3>Manuel Villa</h3>
          <p>Renter</p>
          <span className="partner">Moved with <img src={frame} alt="frame" /> <strong>Estatery</strong></span>
        </div>
      </div>
      <div className='group'>
        
        <img src={Group} alt="group" />
      
      <blockquote className='blockquote'>
        I loved how smooth the move was, and finally got the house we wanted.
      </blockquote>
      </div>
      <hr />
      <div className="card-footer">
        <div className="footer-item">
          <h2>$1,500</h2>
          <p>Saved up to</p>
        </div>
        <div className="footer-item">
          <h2>-24 hrs</h2>
          <p>Process time</p>
        </div>
      </div>
    </div>


     <div className="trustpilot-card">
      
      <div className="trustpilot-content">
        <div className='excellent'>
        <h2 className="rating-title">Excellent</h2>
        <div className="trustpilot-logo">
          <span className="trustpilot-star">★</span>
          <span>Trustpilot</span>
          </div>
        </div>
        <div className="stars">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <span key={index} className="star">
                ★
              </span>
            ))}
        </div>
        <p className="review-count">From 3,264 reviews</p>
    <img src={Trustpilotback} alt="background" />
      </div>

      
    </div>
    </div>
  )
}

export default Homeimage
