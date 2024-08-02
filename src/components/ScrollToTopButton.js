import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ScrollToTopButton.css"; // Create a CSS file for styling

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "visible" : "hidden"}`}>
      <Link to="#" onClick={scrollToTop}>
      <i class="fa-solid fa-arrow-up"></i>
      </Link>
    </div>
  );
};

export default ScrollToTopButton;