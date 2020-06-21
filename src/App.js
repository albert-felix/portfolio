import React from "react";
import Header from "./components/header";
import "./styles.css";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}
