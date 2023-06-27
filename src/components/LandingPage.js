import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../css/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { googleFonts } from "google-fonts";
import carouselHighFive from "../static/carouselHighFive.jpg";
import sharingSkill from "../static/sharingSkill.jpg";
import hairCutting from "../static/hairCutting.jpg";
import zoomTeaching from "../static/zoomTeaching.jpg";
import ubImage from "../static/ub.png";
/*remove later*/
import logo from "../static/logo.png";
import brandName from "../static/sharesquare.png";

export default function LandingPage() {
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isAboutUsClicked, setAboutUsClicked] = useState(false);
  const [isContactUsClicked, setContactUsClicked] = useState(false);

  const homeClicked = () => {
    setIsHomeClicked(true);
    setAboutUsClicked(false);
    setContactUsClicked(false);
  };

  const aboutUsClicked = () => {
    setAboutUsClicked(true);
    setIsHomeClicked(false);
    setContactUsClicked(false);
  };

  const contactUsClicked = () => {
    setContactUsClicked(true);
    setIsHomeClicked(false);
    setAboutUsClicked(false);
  };

  const surveyButtonClicked = () => {
    const surveyDiv = document.querySelector(".surveyDiv");
    surveyDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // remove later below
    <div className="landingPage">
      <div className="navContainer" id="navSection">
        <nav className="navbar border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid navGridDiv">
            <div className="logoBrandDiv">
              <a class="navbar-brand" href="#">
                <img className="logoImage" src={logo}></img>
                <img className="brandName" src={brandName}></img>
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse navLinksDiv"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav navLinks">
                <a
                  className={`nav-link navLinks ${
                    isHomeClicked ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#navSection"
                  onClick={homeClicked}
                  style={{ color: isHomeClicked ? "white" : "#645d5d" }}
                >
                  Home
                </a>
                <a
                  className={`nav-link navLinks ${
                    isAboutUsClicked ? "active" : ""
                  }`}
                  href="#aboutUsSection"
                  onClick={aboutUsClicked}
                  style={{ color: isAboutUsClicked ? "white" : "#645d5d" }}
                >
                  About Us
                </a>
                <a
                  className={`nav-link navLinks ${
                    isContactUsClicked ? "active" : ""
                  }`}
                  href="#footerSection"
                  onClick={contactUsClicked}
                  style={{ color: isContactUsClicked ? "white" : "#645d5d" }}
                >
                  Contact Us
                </a>
              </div>
              <div className="signUpDiv">
                <a className="signUpLink" href="#">
                  {/* Sign Up */}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* remove later above */}
      {/* <Navbar /> */}

      <div className="landingPageContainerOne">
        {/* top Image Part */}
        <div class="topImageSection">
          <div className="imageOneDiv">
            <div className="imageDiv">
              <img src={sharingSkill} className="imageOne" />
            </div>
            <div className="captionDiv">
              <p className="caption">
                Connect with Your Fellow Students Around Campus
              </p>
            </div>
          </div>
          <div className="imageTwoDiv">
            <div className="imageDiv">
              <img src={carouselHighFive} className="imageTwo" />
            </div>
            <div className="captionDiv">
              <p className="caption">
                Build Lasting Relationships through Collaboration
              </p>
            </div>
          </div>
          <div className="imageThreeDiv">
            <div className="imageDiv">
              <img src={hairCutting} className="imageThree" />
            </div>
            <div className="captionDiv">
              <p className="caption">Share Your Talents, Hone Your Skills</p>
            </div>
          </div>
          <div className="imageFourDiv">
            <div className="imageDiv">
              <img src={zoomTeaching} className="imageFour" />
            </div>
            <div className="captionDiv">
              <p className="caption">
                Earn a side income by providing services
              </p>
            </div>
          </div>
        </div>

        {/* right part of top image section */}
        <div className="rightTopImageSectionDiv">
          <div className="topHeadingDiv">
            <h2 className="topHeading">
              Start a Campus Side Hustle, Doing What You Love!
            </h2>
          </div>

          <div className="callToActionDIv">
            <div className="paraInfoDiv">
              <p className="paraInfo">
                Get Started with <span className="brandName">sharesquare</span>{" "}
                - The Ultimate Campus Marketplace!
              </p>
            </div>
            <div className="callToActionButtonDiv">
              <button className="signUpButton" onClick={surveyButtonClicked}>
                Take our quick survey!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* survey link/ub image section */}
      <div className="surveyDiv">
        <iframe
          src="https://akt73qahsnf.typeform.com/to/wLCkrPkY"
          frameborder="0"
          scrolling="no"
          width="100%"
          height="400px"
        ></iframe>
      </div>
      <div className="landingPageContainerTwo">
        <div className="sectionTwo">
          <div className="captionDiv">
            <h3 className="captionSlogan">
              Your Campus, Your Marketplace: Skills, Services, Success!
            </h3>
            <p className="shortDesc">
              Sharesquare is a platform that helps students monetize their
              skills and services by connecting them to student buyers{" "}
            </p>
          </div>
          <div className="imageDiv">
            <img src={ubImage} className="ubImage" />
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="aboutUsDiv" id="aboutUsSection">
        <div className="aboutUsTitle">
          <h3>Our Story</h3>
        </div>
        <div className="aboutDesc">
          <p className="contentDesc">
            Sharesquare was born out of a passion for creating connections and
            empowering the student community. We recognized that students across
            campuses were seeking ways to share their skills, talents, and
            resources but lacked a platform that was tailored to their unique
            needs and lifestyle. Our mission is to bridge this gap by providing
            an innovative marketplace that not only enables students to earn and
            learn but also fosters a thriving and collaborative community.
          </p>
        </div>
      </div>

      {/* footer */}

      <div class="footerContainer" id="footerSection">
        <div class="footerContent">
          <p>&copy; 2023 Sharesquare. All rights reserved.</p>
          <p>Contact us: infosharesquare@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
