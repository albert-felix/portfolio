import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title" data-aos="fade-up">
        <h2>About</h2>
        <hr />
        <div className="about-details">
          <div className="me" data-aos="fade-up">
            <h5>Me</h5>
            <p>
              {" "}
              I am a person having an undergraduate in Civil Engineering and
              Masters in Urban Planning, is now a Web Developer{" "}
            </p>
            <q>Its better late than never - to chase our dreams...!</q>
            <p>.....</p>
          </div>

          <div className="interests" data-aos="fade-up">
            <h5>Interests</h5>
            <p>
              {" "}
              I like to play Table Tennis, Badminton and also like to watch
              Movies
            </p>
            <p>.....</p>
          </div>
          <div className="certifications" data-aos="fade-up">
            <h5>Certifications</h5>
            <p>
              I have done a "Full Stack Web Developing" course in GUVI, Chennai
            </p>
            <p>I have completed 3 days workshop in "Angular" from GeekNCoder</p>
            <p>
              "CareerEdge" from TCS - A 15 day course about the soft skills
              required in the working environment
            </p>
            <p>.....</p>
            <a
              href="https://drive.google.com/file/d/13e0IgdaBX05WNXvB6j2OprkavWU8bj77/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>View My Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
