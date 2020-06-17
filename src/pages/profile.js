import React from "react";
import { Figure, Jumbotron, Card, Button, Media } from "react-bootstrap";
import Library from "../images/library.png";
import Blog from "../images/blog.png";
import Todo from "../images/todo.png";

const Profile = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width:"80%"
  };

  const verticalAlign = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "calc(100vh - 56px)",
    flexFlow: "wrap",
    right:'0',
    left:"0",
    marginLeft:"auto",
    marginRight:"auto",
    width: "80%",
    // backgroundColor: "green"
  };

  return (
    <section  id="profile" style={verticalAlign} >
      {/* <div style={style}> */}
      <Card style={{ width: '18rem', marginBottom:"1rem" }} bg="dark" text="light">
  <Card.Img variant="top" src={Library} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', marginBottom:"1rem" }} bg="dark" text="light">
  <Card.Img variant="top" src={Blog} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', marginBottom:"1rem" }} bg="dark" text="light">
  <Card.Img variant="top" src={Todo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem', marginBottom:"1rem" }} bg="dark" text="light">
  <Card.Img variant="top" src={Todo} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Jumbotron>
<Media >
<a href="https://albert-felix-react-library-app.netlify.app/home" target="_blank" rel="noreferrer noopener">
  <img
    width={170}
    height={100}
    className="mr-3"
    src={Library}
    alt="Generic placeholder"
  />
  </a>
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
</Jumbotron>



 {/* </div> */}
    </section>
  );
};

export default Profile;
