import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/skills.css";
import Library from "../images/library.png";
import Blog from "../images/blog.png";
import Todo from "../images/todo.png";
import MeetingRoom from "../images/meeting.PNG";
import Html from "../images/skills/html.png";
import Css from "../images/skills/css.png";
import Js from "../images/skills/js.png";
import Mongodb from "../images/skills/mongodb.png";
import Node from "../images/skills/node.png";
import Python from "../images/skills/python.png";
import ReactImg from "../images/skills/react.png";
import Postgres from "../images/skills/postgres.png";
import BootstrapImg from "../images/skills/bootstrap.png";
import GitImg from "../images/skills/git.png";
import AngularImg from "../images/skills/angular.png";
import ExpressImg from "../images/skills/express.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="profile" id="profile">
      {/* ----------Skills Section----------- */}
      <div className="skill-title" data-aos="fade-up">
        <h2>Skills</h2>
        <hr />
      </div>
      <div className="skills">
        <Container>
          <Row>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Html} rounded />
              <div>HTML 5</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Css} rounded />
              <div>CSS 3</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Js} rounded />
              <div>Javascript</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Mongodb} rounded />
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Node} rounded />
              <div>NodeJs</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Python} rounded />
              <div>Python</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={ReactImg} rounded />
              <div>React</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={Postgres} rounded />
              <div>Postgres</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={BootstrapImg} rounded />
              <div>Bootstrap</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={ExpressImg} rounded />
              <div>Express</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={AngularImg} rounded />
              <div>Angular</div>
            </Col>
            <Col xs={6} md={3} data-aos="fade-up">
              <Image className="skill-image" src={GitImg} rounded />
              <div>Git</div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ----------------Projects Section----------------- */}

      <div id="projects" className="project-title" data-aos="fade-up">
        <h2>Projects</h2>
        <hr />
      </div>
      <div className="projects">
        <div className="project project1" data-aos="zoom-in">
          <a
            href="https://albert-felix-meeting-room.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="project-image" src={MeetingRoom} rounded />
          </a>
          <div className="project-details">
            <div>
              <h5>
                <u>Meeting Room App</u>
              </h5>
              <ul>
                <li>Developed with React</li>
                <li>Booking rooms, Creating new rooms</li>
                <li>UI using React-bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project project2" data-aos="zoom-in">
          <div className="project-details">
            <div>
              <h5>
                <u>Library App</u>
              </h5>
              <ul>
                <li>Developed with React and MongoDB</li>
                <li>Cart and Checkout Features</li>
                <li>SignUp and SignIn Features</li>
              </ul>
            </div>
          </div>
          <a
            href="https://albert-felix-react-library-app.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="project-image" src={Library} rounded />
          </a>
        </div>
        <div className="project project3" data-aos="zoom-in">
          <a
            href="https://albert-felix-angular-blog-app.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="project-image" src={Blog} rounded />
          </a>
          <div className="project-details">
            <div>
              <h5>
                <u>Blog App</u>
              </h5>
              <ul>
                <li>Developed with Angular</li>
                <li>Simple Blogging Application</li>
                <li>Add, Update and Delete Article Features</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project project4" data-aos="zoom-in">
          <div className="project-details">
            <div>
              <h5>
                <u>Todo App</u>
              </h5>
              <ul>
                <li>Developed with React</li>
                <li>Displays Remaining and Completed task</li>
                <li>My First Application</li>
              </ul>
            </div>
          </div>
          <a
            href="https://albert-felix-todo-app.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="project-image" src={Todo} rounded />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
