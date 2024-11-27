import { useState } from "react";
import "../assets/styles/ImageSlider.css";
import arrowright from "../assets/images/right-arrow.svg";
import arrowleft from "../assets/images/left-arrow.svg";
import iconlocation from "../assets/images/icon-location.svg";
import photo1 from "../assets/images/photo-1.svg";
import photo3 from "../assets/images/photo-3.svg";
import photo4 from "../assets/images/photo-4.svg";
import photo5 from "../assets/images/photo-5.svg";
import photo6 from "../assets/images/photo-6.svg";
import photo7 from "../assets/images/photo-7.svg";
import photo8 from "../assets/images/photo-8.svg";
import photo9 from "../assets/images/photo-9.svg";

const ImageSlider = () => {
  const images = [photo1, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

  // State to track the current image index and the number of active lines
  const [currentIndex, setCurrentIndex] = useState(0);  // Start from the first image
  const [activeLines, setActiveLines] = useState(1);  // Ensure the first line is active by default

  // Handler to move to the next image
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1); // Move to the next image
      if (activeLines < images.length) {
        setActiveLines(activeLines + 1); // Increase active lines count
      }
    }
  };

  // Handler to move to the previous image
  const handlePrev = () => {
    if (currentIndex === 0) {
      // If we are at the first image, reset to the first image and keep the first line active
      setCurrentIndex(0);
      setActiveLines(1); // Keep first line active
    } else {
      // Decrease active lines and move to the previous image
      setCurrentIndex(prevIndex => prevIndex - 1);
      if (activeLines > 1) {
        setActiveLines(activeLines - 1); // Decrease active lines count
      }
    }
  };

  // Handler for thumbnail clicks
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setActiveLines(index + 1); // Set the number of active lines based on the clicked thumbnail index
  };

  return (
    <div className="slider-container">
      <div className="property-card-image">
        <div className="property-location">
          <h2 className="property-title">Seaside Serenity Villa</h2>
          <span className="location-badge">
            <img src={iconlocation} alt="location" />
            Malibu, California
          </span>
        </div>
        <div className="property-price">
          <div className="prices">price</div>
          <div className="value">$1,250,000</div>
        </div>
      </div>

      <div className="image-lists">
        {/* Thumbnail Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === currentIndex ? "active-thumbnail" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="center">
        {/* Main Display Image */}
        <img
          src={images[currentIndex]}
          alt={`Selected ${currentIndex}`}
          style={{
            height: "416px",
            width: "605px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="slider-controls">
        <button className="slider-arrow left-arrow" onClick={handlePrev}>
          <img src={arrowleft} alt="left arrow" />
        </button>

        <div className="lines">
          {images.map((_, index) => (
            <div
              key={index}
              className={`line ${index < activeLines ? "active-line" : "notactive"}`}
            ></div>
          ))}
        </div>

        <button
          className="slider-arrow right-arrow"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1} // Disable right arrow at last image
        >
          <img src={arrowright} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
