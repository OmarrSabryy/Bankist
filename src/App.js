import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Header, Features } from "./containers";
const App = () => {
  return (
    <div className=".App">
      <Navbar />
      <Header />
      <Features />
    </div>
  );
};

export default App;
