import React from "react";
import Header from "./components/header";
import "./styles.css";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Footer from "./components/footer";
import About from "./pages/about";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      {/* <About /> */}
    </div>
  );
}
