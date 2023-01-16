import React from "react";
import "../styles/Communities.css";

const Communities = () => {
  return (
    <div className="comm_main_parent container">
      <div className="comm_subparent">
        <div className="comm_header">
          <p className="comm_header_p1">Join Top Tech Communities Around The Globe</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="comm_header_p2"></p>
          </div>
        </div>

        <ul className="comm_list">
          <li className="comm_list_item">
            <h2 className="comm_name">EddieHub</h2>
            <p className="comm_description">An Open Source community aimed at encouraging and promoting communication and technical expertise in an inclusive and welcoming environment</p>
            <a href="https://github.com/EddieHubCommunity" className="comm_link">Join now</a>
            {/* <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a> */}
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">WeMakeDevs</h2>
            <p className="comm_description">An Open Source community focused to educate everyone, irrespective of their college or branch, technical or non-technical background</p>
            <a href="https://github.com/WeMakeDevs" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">Acccessible For All</h2>
            <p className="comm_description">A community dedicated to making the web more accessible for everyone, and that starts by educating designers and developers in accessibility best practices from an early stage</p>
            <a href="https://github.com/AccessibleForAll" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">Hack Club</h2>
            <p className="comm_description">A worldwide community of high school hackers. By the students, for the students.</p>
            <a href="https://github.com/hackclub" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">Cloud Community</h2>
            <p className="comm_description">Cloud Study Network is a global community of 8000+ enthusiasts interested in cloud native & devops technologies.</p>
            <a href="https://github.com/cloudcommunity" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">CodeVisors</h2>
            <p className="comm_description">A community driven by tech enthusiasts and open source contributors to help young students to improve there technical skills by providing webinars.</p>
            <a href="https://github.com/CodeVisors" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name">FossAsia</h2>
            <p className="comm_description">Open Technologies developed in Asia and Around the Globe</p>
            <a href="https://github.com/fossasia" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name"> Sitepoint Community</h2>
            <p className="comm_description">SitePoint community is a community for web designers and developers to discuss everything web development from HTML, CSS, JavaScript, PHP, Photoshop, SEO, and more.</p>
            <a href="https://www.sitepoint.com/community/" className="comm_link">Join now</a>
          </li>
          <li className="comm_list_item">
            <h2 className="comm_name"> Woman Who Code</h2>
            <p className="comm_description">Empowering Women in Technology</p>
            <a href="https://www.womenwhocode.com/" className="comm_link">Join now</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Communities;
