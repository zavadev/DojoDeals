import React from 'react';
import './AboutFooter.css';

function AboutFooter() {
  return (
    <>
      <footer id="about-footer-all">
        <p>Made by Nathan Zavala</p>
        <div className="about-link-divs">
          <a href="https://github.com/zavadev" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/doulyb7dt/image/upload/v1652985719/DojoDeals/github-11-32_xs9guh.png" alt="Github logo" />
          </a>
        </div>
        <div className="about-link-divs">
          <a href="https://www.linkedin.com/in/nathan-zavala/" target="_blank" rel="noopener noreferrer" >
            <img border="0" alt="Linked In logo" src="https://res.cloudinary.com/doulyb7dt/image/upload/v1652986668/DojoDeals/linkedin-3-32_gfslop.png"  />
          </a>
        </div>
      </footer>
    </>
  )
}
export default AboutFooter;
