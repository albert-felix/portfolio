import React, { useState } from "react";
import { Form, Jumbotron, Button } from "react-bootstrap";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const onNameChange = event => setName(event.target.value);
  const onEmailChange = event => setEmail(event.target.value);
  const onMessageChange = event => setMessage(event.target.value);

  const onSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill in all the fields");
    } else {
      console.log(name, email, message);
    }
  };

  return (
    <div className="contact">
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
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>*Email address</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>*Message</Form.Label>
            <Form.Control onChange={onMessageChange} as="textarea" rows="3" />
          </Form.Group>
        </Form>

        <Button variant="dark" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Jumbotron>
    </div>
  );
};

export default Contact;
