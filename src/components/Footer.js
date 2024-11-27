import React from 'react';
import frame from '../assets/images/Frame.svg';
import "../assets/styles/Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <span className="logo-icon">
            <img src={frame} alt="icon" />
          </span>
          <span className="logo-text">Estatery</span>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>SELL A HOME</h4>
            <ul>
              <li><a href="#">Request an offer</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Stories</a></li>
            </ul>
          </div>

           <div className="footer-column">
            <h4>BUY, RENT AND SELL</h4>
            <ul>
              <li><a href="#">Buy and sell properties</a></li>
              <li><a href="#">Rent home</a></li>
              <li><a href="#">Builder trade-up</a></li>
            </ul>
          </div>

            <div className="footer-column">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#">Company</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>BUY A HOME</h4>
            <ul>
              <li><a href="#">Buy</a></li>
              <li><a href="#">Finance</a></li>
            </ul>
          </div>
         
        
          <div className="footer-column">
            <h4>TERMS & PRIVACY</h4>
            <ul>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>RESOURCES</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='footer-line'/>

       <div className="footer-bottom">
      <p>©2021 Estatery. All rights reserved</p>
      <div className="social-icons">
        <a href="#" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
