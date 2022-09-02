import React, { useState } from "react";
import "../styles/Home.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  const [swipeAction, setSwipeAction] = useState(false);

  return (
    <div className="home">
      <Header />
      <Cards />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
