import React from "react";
import Library from "../images/library.png"
import Blog from "../images/blog.png"
import Todo from "../images/todo.png"

const Profile = () => {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white"
  };

  const verticalAlign = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "calc(100vh - 56px)",
    // backgroundColor: "green"
  };

  return (
    <div style={verticalAlign}>
      <div style={{ width: "100%" }}>
        <div style={style}>
          <div>
            <h1>Library App</h1>
            <p>I am a Web Developer !</p>
          </div>
          <div>
            <a href={'https://albert-felix-react-library-app.netlify.app'} target='blank'>
              <img src={Library} alt='library' width='200' height='auto'/>
            </a>
          </div>
        </div>

        <br />
        <br />

        <div style={style}>
          <div>
            <a href={'https://albert-felix-angular-blog-app.netlify.app'} target='blank'>
              <img src={Blog} alt='library' width='200' height='auto'/>
            </a>
          </div>
          <div>
            <h1>Blog App</h1>
            <p>I am a Web Developer !</p>
          </div>
        </div>

        <br />
        <br />

        <div style={style}>
          <div>
            <h1>Todo App</h1>
            <p>I am a Web Developer !</p>
          </div>
          <div>
            <a href={'https://albert-felix-todo-app.netlify.app'} target='blank'>
              <img src={Todo} alt='library' width='200' height='auto'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
