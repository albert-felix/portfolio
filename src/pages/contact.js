import React, { useState, useEffect } from "react";
import { Form, Jumbotron, Button, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import Github from "../images/contact/github.png";
import Instagram from "../images/contact/instagram.png";
import Linkedin from "../images/contact/linkedin.png";
import Twitter from "../images/contact/twitter.png";
import Email from "../images/contact/email.png";
import Phone from "../images/contact/phone.png";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = event => setName(event.target.value);
  const onEmailChange = event => setEmail(event.target.value);
  const onMessageChange = event => setMessage(event.target.value);

  const onSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill in all the fields");
    } else {
      const request = {
        name,
        email,
        message
      };

      const config = {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      };

      fetch("https://jdhj3.sse.codesandbox.io/send", config)
        .then(data => data.json())
        .then(response => {
          if (response.status === "success") {
            alert("Message sent");
            setName("");
            setEmail("");
            setMessage("");
          } else {
            alert("Message sending failed");
          }
        });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title" data-aos="fade-up">
        <h2>Contact</h2>
        <hr />
      </div>
      <Jumbotron className="jumbotron" data-aos="fade-up">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>*Name</Form.Label>
            <Form.Control
              className="input"
              onChange={onNameChange}
              type="text"
              placeholder="Full Name"
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>*Email address</Form.Label>
            <Form.Control
              className="input"
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>*Message</Form.Label>
            <Form.Control
              className="input"
              onChange={onMessageChange}
              as="textarea"
              rows="3"
              value={message}
            />
          </Form.Group>
        </Form>

        <Button variant="dark" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Jumbotron>

      <div className="social-accounts">
        <div className="account" data-aos="flip-left">
          <a
            href="https://github.com/albert-felix"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="contact-image" src={Github} />
          </a>
        </div>
        <div className="account" data-aos="flip-left">
          <a
            href="https://www.linkedin.com/in/albert-felix-leo-801a85112/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="contact-image" src={Linkedin} />
          </a>
        </div>
        <div className="account" data-aos="flip-left">
          <a
            href="https://www.instagram.com/albert_._felix/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="contact-image" src={Instagram} />
          </a>
        </div>
        <div className="account" data-aos="flip-left">
          <a
            href="https://twitter.com/AlbertF37684346"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="contact-image" src={Twitter} />
          </a>
        </div>
      </div>

      <div className="reference">
        <div className="reference-item">
          <Image className="reference-image" src={Phone} />
          <a href="tel:9788061021">
            <p> - (+91) 9788061021</p>
          </a>
        </div>
        <div className="reference-item">
          <Image className="reference-image" src={Email} />
          <p> - albertfelixleo@gmail.com</p>
        </div>
      </div>

      <div className="footer">
        <hr />
        Developed by Albert Felix
      </div>
    </div>
  );
};

export default Contact;
