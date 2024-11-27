import React, { useState } from 'react';
import "../assets/styles/InquiryForm.css";
import successsymbol from "../assets/images/successsymbol.svg";

function InquiryForm() {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent form submission reload
    setFormSubmitted(true); // Set formSubmitted to true
  };

  return (
    <div className="inquiry-form-container">
      {/* Left Section */}
      <div className="form-header">
        <h2>Inquire About Seaside <br /> Serenity Villa</h2>
        <p>
          Interested in this property? Fill out the form below, and <br />
          our real estate experts will get back to you with more <br />
          details, including scheduling a viewing and answering <br />
          any questions you may have.
        </p>
      </div>

      {/* Right Section (Form or Confirmation) */}
      {!formSubmitted ? (
        <form className="inquiry-form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="Enter First Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter Last Name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Enter Phone Number" required />
            </div>
          </div>
          <div className="form-group">
            <label className="selectedproperty" htmlFor="selectedProperty">Selected Property</label>
            <input
              type="text"
              className="selectedinput"
              id="selectedProperty"
              value="Seaside Serenity Villa, Malibu, California"
              disabled
            />
          </div>
          <div className="form-group">
            <label className="message" htmlFor="message">Message</label>
            <textarea id="message" className="areatext" placeholder="Enter your Message here.." required></textarea>
          </div>
          <div className="form-footer">
            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="submit-button">
              Send Your Message
            </button>
          </div>
        </form>
      ) : (
        <div className="inquiry-form-1">
          <div className="success-icon">
            <span><img src={successsymbol} alt="mark" /></span> {/* Unicode for checkmark */}
          </div>
          <h2>Message Sent!</h2>
          <p>Our team has received your message and will get back to <br /> <span> you shortly.</span></p>
        </div>
      )}
    </div>
  );
}

export default InquiryForm;
