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
          <a href="https://www.linkedin.com/in/linhdinh0908/"> LinkedIn 
            <i className="fa fa-linkedin-square fa-lg" />
          </a>
          <a href="https://www.github.com/linhdinh0908/">Github 
            <i className="fa fa-github fa-lg" />
          </a>
        </div>
      </div>

      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          Hello, I'm <span className="highlighted-text">Linh</span>
        </span>
      </div>
      <div className="profile-details-role">
        <span className="primary-text">
          {" "}
          <h1>
            <Typical
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

      <div className="project-button-wrapper">
        <h3>Check out my work </h3>
        <a href="#projects">
          <img
            src={Arrow}
            alt="project button"
            className="project-button"
          ></img>
        </a>
      </div>
    </div>
  );
}
