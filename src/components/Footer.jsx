import React from 'react'
import Footer from "../styles/Footer.css"
import '@fortawesome/fontawesome-free/css/all.css';

const Foot = () => {
    return (
      <footer>
        <div className="footer-logo">Community Bubble</div>
        <div className="footer-social-icons">
          <a href="#" className="footer-social-icon">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="footer-social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="footer-social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-copyright">&copy; CommunityBubble</div>
        <div className="footer-made-by">Made by Aditya</div>
      </footer>
    );
  };
  
  export default Foot;