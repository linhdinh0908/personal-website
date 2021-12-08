import React from "react";
import Typical from "react-typical";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profile.css";
import Arrow from "../../assets/arrow.png"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="colz">
        <div className="colz-icon">
          <a href="https://www.linkedin.com/in/linhdinh0908">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          Hello, I'M <span className="highlighted-text">Linh</span>
        </span>
      </div>
      <div className="profile-details-role">
        <span className="primary-text">
          {" "}
          <h1>
            <Typical
              loop={Infinity}
              steps={[
                
                "Front End Enthusiast 💻",
                1000,
                "4th Year Business Student",
                1000,
                "Self Starter",
                1000,
              ]}
            />
          </h1>
        </span>
        <span className="profile-role-tagline">
          Knack of building applications with front end operations.
        </span>
      </div>

      <div className="profile-options">
        <button className="btn primary-btn"> Contact Me</button>
        <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
          <button className="btn highlighted-btn">View My Resume</button>
        </a>
      </div>

      <div className="project-button-wrapper">
        <p>View my work </p>
        <a href="#projects">
          <img src={Arrow} alt="project-button" className="project-button"></img>
        </a>
      </div>
    </div>
  );
}
