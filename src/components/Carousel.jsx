import React, { useState, useEffect } from 'react';
import img1 from '../assets/c1.jpg';
import img2 from '../assets/c2.jpg';
import img3 from '../assets/c3.jpg';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, imageUrl: img1 },
    { id: 2, imageUrl: img2 },
    { id: 3, imageUrl: img3 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Transition to next slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="flex justify-center items-center">
      <img src={slides[currentSlide].imageUrl} alt={`Slide ${slides[currentSlide].id}`} className="w-[500px] p-5 pt-5 flex justify-center items-center" />
      
    </div>
  );
};

export default Carousel;
 