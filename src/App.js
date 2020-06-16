import React from "react";
import Header from "./components/header";
import "./styles.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Profile />
      <Footer />
    </div>
  );
}
