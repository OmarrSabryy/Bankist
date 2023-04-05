import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header, Features, Operations, Testimonials } from "./containers";
const App = () => {
  return (
    <div className=".App">
      <Navbar />
      <Header />
      <Features />
      <Operations />
      <Testimonials />
    </div>
  );
};

export default App;
