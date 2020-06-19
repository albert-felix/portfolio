import React from "react";
import "../styles/skills.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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
      <div className="skill-title">
        <h2>Skills</h2>
        <hr />
      </div>
      <div className="skills">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Image src={Html} rounded />
              <div>HTML 5</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Css} rounded />
              <div>CSS 3</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Js} rounded />
              <div>Javascript</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Mongodb} rounded />
              <div>MongoDB</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Node} rounded />
              <div>NodeJs</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Python} rounded />
              <div>Python</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={ReactImg} rounded />
              <div>ReactJs</div>
            </Col>
            <Col xs={6} md={3}>
              <Image src={Postgres} rounded />
              <div>Postgres</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project-title">
        <h2>Projects</h2>
        <hr />
      </div>
    </div>
  );
};

export default Skills;
