import React from "react";
import "../styles/profile.css";
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


const Profile = () => {
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
        <h1>Skills</h1>
        <hr />
      </div>
      <div className="skills" >
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Image src={Html} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={Css} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={Js} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={Mongodb} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={Node} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={Python} rounded />
            </Col>
            <Col xs={6} md={3}>
              <Image src={ReactImg} rounded />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
