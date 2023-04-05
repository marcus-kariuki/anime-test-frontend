import React, { useState } from "react";
import Header from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import AnimeList from "./AnimeList";
import "../App.css";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Slider />
      <About/>
      <AnimeList/>
      
    </div>
  );
}

export default Home;
