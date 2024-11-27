import React from 'react';
import "../assets/styles/ForTenantsforLandlords.css";
import virtualicon from "../assets/images/virtual-icon.svg";
import dealicon from "../assets/images/deal-icon.svg";
import startedicon from "../assets/images/startedicon.svg";
function ForTenantsforLandlords() {
  return (
     <section className="info-section">
        <div className='info'>
      <div className="info-header">
        <h2>
          We make it easy for <br /> <span className="highlight">tenants <span>and </span>landlords.</span>
        </h2>
        <p>
          Whether it's selling your current home, getting <br /> financing, or buying a new home, we make it easy and <br /> efficient. 
          The best part? You'll save a bunch of money <br /> and time with our services.
        </p>
      </div>

      <div className="info-cards">
        <div className="card-virtual">
            <div className='icon'>
               <img src={virtualicon} alt="icon" />
            </div>
            <div className='virtual'>
          <h4>Virtual home tour</h4>
          <p>
            You can communicate directly with landlords and we provide you with a virtual tour before you buy or rent the property.
          </p>
          </div>
        </div>
        <div className="card-light">
            <div className='icon'>
               <img src={dealicon} alt="icon" />
            </div>
            <div className='light'>
          <h4>Find the best deal</h4>
          <p>
            Browse thousands of properties, save your favorites, and set up search alerts so you don’t miss the best home deal!
          </p>
          </div>
        </div>
        <div className="card-start">
            <div className='icon'>
               <img src={startedicon} alt="icon" />
            </div>
            <div className='start'>
          <h4>Get started</h4>
          <p>
            Find your dream property in just a few clicks with our efficient tools and services.
          </p>
          </div>
        </div>
      </div>

      <hr className='horizontal' />

      <div className="info-stats">
        <div className="stat">
          <h3>7.4%</h3>
          <p>Property Return Rate</p>
        </div>
        <div className="stat">
          <h3>3,856</h3>
          <p>Property in Sell & Rent</p>
        </div>
        <div className="stat">
          <h3>2,540</h3>
          <p>Daily Completed Transactions</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ForTenantsforLandlords
