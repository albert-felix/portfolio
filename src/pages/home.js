import React from "react";


const Home = () => {

  const style = {
    display:"flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    height: "calc(100vh - 112px)",
  };


  return (
    <div id="home" style={style}>
      <div>
        <h1>Albert Felix</h1>
        <p>I am a Web Developer !</p>
      </div>
    </div>
  );
};

export default Home;
