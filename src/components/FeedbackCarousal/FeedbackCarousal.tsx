import React, { useState, useEffect } from 'react';
import './FeedbackCarousal.css';
import img1 from '../../images/20230517_114107973_iOS.png';
import img2 from '../../images/Adobe Express - file.jpg';
import img3 from '../../images/IMG_3949.png';
import img4 from '../../images/IMG_4866.png';

const images = [
 img1, img2, img3, img4
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



// import './FeedbackCarousal.css';
// import img1 from '../../images/20230517_114107973_iOS.png';
// import img2 from '../../images/Adobe Express - file.jpg';
// import img3 from '../../images/IMG_3949.png';
// import img4 from '../../images/IMG_4866.png';
// import { useState } from 'react';

// const images = [
//   img1, img2, img3, img4
// ];

// const FeedbackCarousal: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   // Function to go to the next image
//   const goToNext = () => {
//     setActiveIndex((prevIndex) => {
//       if (prevIndex < images.length - 1) {
//         return prevIndex + 1;
//       }
//       return prevIndex; // Prevent going past the last image
//     });
//   };

//   // Function to go to the previous image
//   const goToPrevious = () => {
//     setActiveIndex((prevIndex) => {
//       if (prevIndex > 0) {
//         return prevIndex - 1;
//       }
//       return prevIndex; // Prevent going past the first image
//     });
//   };

//   const getImageClass = (index: number) => {
//     if (index === activeIndex) return 'carousel-image active'; // The middle image
//     return 'carousel-image';
//   };

//   return (
//     <div className="carousel-container">
//       <div className="carousel-wrapper">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`carousel ${index}`}
//             className={getImageClass(index)}
//             style={{
//               transform: `translateX(-${(activeIndex - 1) * 33.33}%)`,
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Navigation Buttons */}
//       <button className="carousel-button prev" onClick={goToPrevious}>
//         Prev
//       </button>
//       <button className="carousel-button next" onClick={goToNext}>
//         Next
//       </button>
//     </div>
//   );
// };

// export default FeedbackCarousal;
