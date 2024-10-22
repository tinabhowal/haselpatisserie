import React, { useState, useEffect } from 'react';
import './FeedbackCarousal.css';

const images = [
  'https://via.placeholder.com/300x200?text=1',
  'https://via.placeholder.com/300x200?text=2',
  'https://via.placeholder.com/300x200?text=3',
  'https://via.placeholder.com/300x200?text=4',
  'https://via.placeholder.com/300x200?text=5',
];

const FeedbackCarousal: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getImageClass = (index: number) => {
    if (index === activeIndex) return 'carousel-image active'; // The middle image
    return 'carousel-image';
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${(activeIndex - 1) * 33.33}%)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel ${index}`}
            className={getImageClass(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousal;
