// import React, { useState, useEffect, useMemo } from "react";
// import { motion } from "framer-motion";
// import './About2.css';
// import Navigation from "../Navigation/Navigation";
// import img from "../../images/Group 47.png";
// import About2Feedback from "./About2Feedback";
// import About2ScrollComponentMemoized from "./About2ScrollComponent";
// import scroll1 from "../../images/anton-mqg-xlHRMGs-unsplash.jpg";
// import scroll2 from "../../images/brent-ninaber-r98McHBXGN8-unsplash (1).jpg";
// import scroll3 from "../../images/brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
// import scroll4 from "../../images/codioful-formerly-gradienta-7brhZmwXn08-unsplash.jpg";
// import scroll5 from "../../images/confectionery.png";
// import scroll6 from "../../images/deva-williamson-S2jw81lfrG0-unsplash.jpg";
// import scroll7 from "../../images/aboutBackground.png";


// const About2: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   // Preload images function
//   const preloadImages = (imageArray: string[]) => {
//     const promises = imageArray.map((src) => {
//       return new Promise<void>((resolve, reject) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = () => resolve();  // Resolve the promise when image is loaded
//         img.onerror = () => reject();  // Reject if there's an error
//       });
//     });
//     return Promise.all(promises);  // Wait until all images are loaded
//   };

//   const memoizedImages = useMemo(() => {
//     return [
//       scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7,
//       scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7
//     ];
//   }, []); 

//   // Preload images in useEffect
//   useEffect(() => {
//     preloadImages(memoizedImages)
//       .then(() => setLoading(false))  // Once images are preloaded, set loading to false
//       .catch((error) => {
//         console.error("Failed to preload images", error);
//         setLoading(false);  // Still render even if preloading fails
//       });
//   }, [memoizedImages]);  // Preload the images only once when the component mounts

//   // Render loading state while images are being preloaded
//   if (loading) {
//     return <div>Loading...</div>;  // You can customize this loading screen
//   }

//   return (
//     <div className="about2Page">
//       <Navigation />
      
//       <section className="aboutTop">
//         <motion.h1
//           className="first-text"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 0.8, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Go guilt free
//         </motion.h1>

//         <motion.p
//           className="second-text"
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           Because now healthy is also tasty
//         </motion.p>
//       </section>

//       <motion.section 
//         className="aboutMiddle"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: 'easeInOut' }}    
//         viewport={{ once: false, amount: 0.1 }}
//       >
//         <motion.div className="image-container">
//           <motion.img
//             src={img}
//             alt="Scaling Image"
//             className="scaling-image"
//           />
//         </motion.div>
//       </motion.section>

//       <section className="scrollComponent">
//         <About2ScrollComponentMemoized baseVelocity={-0.2}>
//           {memoizedImages.map((imgUrl, idx) => (
//             <img key={idx} src={imgUrl} alt={` ${idx}`} style={{ width: '200px', height: '200px', marginRight: '10px' }} />
//           ))}
//         </About2ScrollComponentMemoized>

//         <About2ScrollComponentMemoized baseVelocity={0.2}>
//           {memoizedImages.map((imgUrl, idx) => (
//             <img key={idx} src={imgUrl} alt={`${idx}`} style={{ width: '200px', height: '200px', marginRight: '10px' }} />
//           ))}
//         </About2ScrollComponentMemoized>
//       </section>

//       <section className="about2FeedbackSection">
//         <About2Feedback />
//       </section>
//     </div>
//   );
// };

// export default About2;









import React, { useMemo } from "react";
import { motion } from "framer-motion";
import './About2.css';
import Navigation from "../Navigation/Navigation";
import img from "../../images/Group 47.png";
import About2Feedback from "./About2Feedback";
import About2ScrollComponent from "./About2ScrollComponent";
import scroll1 from "../../images/anton-mqg-xlHRMGs-unsplash.jpg";
import scroll2 from "../../images/brent-ninaber-r98McHBXGN8-unsplash (1).jpg";
import scroll3 from "../../images/brooke-lark-pGM4sjt_BdQ-unsplash.jpg";
import scroll4 from "../../images/codioful-formerly-gradienta-7brhZmwXn08-unsplash.jpg";
import scroll5 from "../../images/confectionery.png";
import scroll6 from "../../images/deva-williamson-S2jw81lfrG0-unsplash.jpg";
import scroll7 from "../../images/aboutBackground.png";


const About2ScrollComponentMemoized = React.memo(About2ScrollComponent);

const About2: React.FC = () => {
  
  const memoizedImages = useMemo(() => {
    return [
      scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7,
      scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7
    ];
  }, []); 

  return (
    <div className="about2Page">
      <Navigation />
      
      <section className="aboutTop">
        <motion.h1
          className="first-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
        >
          Go guilt free
        </motion.h1>

        <motion.p
          className="second-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Because now healthy is also tasty
        </motion.p>
      </section>

      <motion.section 
        className="aboutMiddle"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}    
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div className="image-container">
          <motion.img
            src={img}
            alt="Scaling Image"
            className="scaling-image"
          />
        </motion.div>

        {/* <motion.div className="image-container">
          <motion.div className="middleText"> 
            Sample text goes here. Add your content here.
          </motion.div>
        </motion.div> */}
      </motion.section>

      <section className="scrollComponent">
        <About2ScrollComponentMemoized baseVelocity={-0.2}>
          {memoizedImages.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} alt={` ${idx}`} style={{ width: '200px', height: '200px', marginRight: '10px' }} />
          ))}
        </About2ScrollComponentMemoized>

        <About2ScrollComponentMemoized baseVelocity={0.2}>
          {memoizedImages.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} alt={`${idx}`} style={{ width: '200px', height: '200px', marginRight: '10px' }} />
          ))}
        </About2ScrollComponentMemoized>
      </section>




      <section className="about2FeedbackSection">
        <About2Feedback />
      </section>
    </div>
  );
};

export default About2;














