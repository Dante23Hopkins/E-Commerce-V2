import React, { useState } from "react";
import "../styles/home.css";

function Home() {
  const images = [
    "https://u7q2x7c9.stackpathcdn.com/photos/25/77/379252_31593_XXXL.webp",
    "https://u7q2x7c9.stackpathcdn.com/photos/25/77/379253_8320_XXXL.webp",
    "https://media.self.com/photos/631b936db10ec0652ae20ae6/1:1/w_3319,h_3319,c_limit/best-hiking-water-bottle.jpeg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  function handleClick() {
    setCurrentImage((currentImage + 1 + images.length) % images.length);
  }

  // slideshow interval timer
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

 
  return (
    <div className="container">
      <h1>Rain</h1>
      <img src={images[currentImage]} className="slideimg" alt="homemain" />
      <div className="slidebutton">
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
        <input
          value="JavaScript"
          type="radio"
          name="select"
          id=""
          onClick={handleClick}
        />
      </div>
      
      <div className="welcome">
        <h1>STAY HYDRATED AND REFRESHED ON-THE-GO WITH OUR WIDE SELECTION OF STYLISH AND DURABLE WATER BOTTLES, PERFECT FOR ANY ADVENTURE OR DAILY ROUTINE!</h1>
        <a href="/products"><button className="explore">SHOP NOW!</button></a>
      </div>
    </div>

    
    
  );
}

export default Home;