import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="footer-info">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Audio Description</li>
            <li>Help Center</li>
            <li>Gift Card</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>privacy</li>
            <li>Legal Notices</li>
            <li>Cookue Preferences</li>
            <li>Carporate information</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="serviceCode">
          <button>Service Code</button>
        </div>
        <div className="copyRight">
          <p>&copy; 1997-2022 Netflix,inc</p>
        </div>
      </div>
    </div>
  );
}
