import React, { useState } from "react";
import { Form, Jumbotron, Button } from "react-bootstrap";
import "../styles/contact.css";

const Contact = () => {
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
            setName("")
            setEmail("")
            setMessage("")
          } else {
            alert("Message sending failed");
          }
        });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h2>Contact</h2>
        <hr />
      </div>
      <Jumbotron>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>*Name</Form.Label>
            <Form.Control
              onChange={onNameChange}
              type="text"
              placeholder="Full Name"
              value={name}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>*Email address</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>*Message</Form.Label>
            <Form.Control
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
      <div className="reference">
        <p>phone: +91 9788061021</p>
        <p>email: albertfelixleo@gmail.com</p>
      </div>
      <div className="social-accounts">
        <div className="account" />
        <div className="account" />
        <div className="account" />
      </div>
    </div>
  );
};

export default Contact;
