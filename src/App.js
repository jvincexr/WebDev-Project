import React from "react";
import Navbar from "./components/Navbar";
import Content1 from "./components/Content1";
import About from "./components/About";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import YoutubeVid from "./components/YoutubeVid";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className='font-maitree'>
      <Navbar />

      <section id="content1">
        <Content1 />
      </section>

      <section id="youtubevid">
      <YoutubeVid/>
      </section>

      <section id="about">
        <About />
      </section>
      
      
      <section id="artworks">
        <Artworks />
      </section>

      <section id="carousel">
        <Carousel />
      </section>

      <secton id="footer">
        <Footer />
      </secton>


    </div>
  );
}

export default App;
