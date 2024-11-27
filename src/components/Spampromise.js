import React from 'react'
import "../assets/styles/Spampromise.css"
function Spampromise() {
  return (
      <section className="landlord-cta">
      <p className="no-spam">No Spam Promise</p>
      <h2>Are you a landlord?</h2>
      <p className="description">
        Discover ways to increase your home's value and get listed. No Spam.
      </p>
      <form className="cta-form">
        <input
          type="email"
          placeholder="Enter your email address"
          className="email-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <p className="join-info">
        Join <span className="highlight">10,000+</span> other landlords in our
        estately community.
      </p>
    </section>
  )
}

export default Spampromise
