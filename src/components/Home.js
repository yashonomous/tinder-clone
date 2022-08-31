import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Home.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
