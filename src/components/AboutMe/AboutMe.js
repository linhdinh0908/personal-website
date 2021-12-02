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
      "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for State Mnanagement",
        "Building REST API",
        "Managing database",
      ],
      heading: "Here are a Few Highlights:",
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
