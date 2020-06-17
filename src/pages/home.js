import React from "react";
import "../styles/home.css"

const Home = () => {

  const style = {
    display:"flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    height: "calc(100vh)",
  };


  return (
    <div className="home" id="home" style={style}>
      <div>
        <h1>Albert Felix</h1>
        <p>I am a Web Developer !</p>
      </div>
    </div>
  );
};

export default Home;
