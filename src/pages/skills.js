import React from "react";
import "../styles/skills.css";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";
import Library from "../images/library.png";
import Blog from "../images/blog.png";
import Todo from "../images/todo.png";
import Html from "../images/skills/html.png";
import Css from "../images/skills/css.png";
import Js from "../images/skills/js.png";
import Mongodb from "../images/skills/mongodb.png";
import Node from "../images/skills/node.png";
import Python from "../images/skills/python.png";
import ReactImg from "../images/skills/react.png";
import Postgres from "../images/skills/postgres.png";

const Skills = () => {
  // const verticalAlign = {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  //   height: "calc(100vh - 36px)",
  //   flexFlow: "wrap",
  //   right:'0',
  //   left:"0",
  //   marginLeft:"auto",
  //   marginRight:"auto",
  //   width: "80%",
  // };

  return (
    <div className="profile" id="profile">
      {/* ----------Skills Section----------- */}
      <div className="skill-title">
        <h2>Skills</h2>
        <hr />
      </div>
      <div className="skills">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Html} rounded />
              <div>HTML 5</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Css} rounded />
              <div>CSS 3</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Js} rounded />
              <div>Javascript</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Mongodb} rounded />
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Node} rounded />
              <div>NodeJs</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Python} rounded />
              <div>Python</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={ReactImg} rounded />
              <div>ReactJs</div>
            </Col>
            <Col xs={6} md={3}>
              <Image className = "skill-image" src={Postgres} rounded />
              <div>Postgres</div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ----------------Projects Section----------------- */}

      <div className="project-title">
        <h2>Projects</h2>
        <hr />
      </div>
      <div className="projects">
        <div className="project project1">
          <Image className="project-image" src="" rounded />
          <div className="project-details">
            <div>
              <h5>
                <u>Meeting Room App</u>
              </h5>
              <ul>
                <li>Developed with React</li>
                <li>Book rooms, Add new rooms</li>
                <li>UI using React-bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project project2">
          <Image className="project-image" src={Library} rounded />
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
        </div>
        <div className="project project3">
          <Image className="project-image" src={Blog} rounded />
          <div className="project-details">
            <div>
              <h5>
                <u>Blog App</u>
              </h5>
              <ul>
                <li>Developed with Angular</li>
                <li>Simple Blogging Application</li>
                <li>Add, Update and Delete Articles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project project4">
          <Image className="project-image" src={Todo} rounded />
          <div className="project-details">
            <div>
              <h5>
                <u>Todo App</u>
              </h5>
              <ul>
                <li>Developed with React</li>
                <li>Add task, Completed task, Remaining task</li>
                <li>My First Application</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
