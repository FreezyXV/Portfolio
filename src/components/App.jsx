import React from "react";
import "../assets/App.css";
import "../assets/index.css";
import Header from "../components/Header";
import Langueages from "../components/Languages";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Langueages />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
