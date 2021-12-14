import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
import personalImage from "../../assets/Linh.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Aspiring Front End Developer with a background in business, along with a passion for learning. Strong professional with a BSC willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Bachel of Commerce - Ryerson Univeristy",
        "Front End development",
        "HTML, CSS, Javascript, Python, SQL",
        "React and React Native",

      ],
      heading: "Highlights:",
      
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="row">
          
          <div className="col-4">
            <div className="about-me-profile-background">
              <img
                className="about-me-profile"
                src={personalImage}
                alt="Me smiling against a white background"
                title="headshot"
              />
            </div>
          </div>
          
          <div className="col-8">
            <div className="about-me-card">
              <div className="about-me-details">
                <span className="about-me-description">
                  {SCREEN_CONSTSANTS.description}
                </span>
                <div className="about-me-highlights">
                  <div className="highlight-heading">
                    <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
