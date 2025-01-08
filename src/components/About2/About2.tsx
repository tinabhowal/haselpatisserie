import React, { useState, useEffect, useMemo, memo } from "react";
import { motion } from "framer-motion";
import './About2.css';
import Navigation from "../Navigation/Navigation";
// import img from "../../images/quin-engle-QRpNjzEX1eU-unsplash.webp";
import About2Feedback from "./About2Feedback";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import About2ScrollComponentMemoized from "./About2ScrollComponent";
import scroll1 from "../../images/anton-mqg-xlHRMGs-unsplash.webp";
import scroll2 from "../../images/brent-ninaber-r98McHBXGN8-unsplash (1).webp";
import scroll3 from "../../images/brooke-lark-pGM4sjt_BdQ-unsplash.webp";
import scroll4 from "../../images/codioful-formerly-gradienta-7brhZmwXn08-unsplash.webp";
import scroll5 from "../../images/confectionery.webp";
import scroll6 from "../../images/deva-williamson-S2jw81lfrG0-unsplash.webp";
import scroll7 from "../../images/aboutBackground.webp";
import Form from "./Form";
import imageCompression from 'browser-image-compression';




const About2: React.FC = () => {
  // const [loading, setLoading] = useState(true);

  // Preload images function
  // const preloadImages = (imageArray: string[]) => {
  //   const promises = imageArray.map((src) => {
  //     return new Promise<void>((resolve, reject) => {
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = () => resolve();  // Resolve the promise when image is loaded
  //       img.onerror = () => reject();  // Reject if there's an error
  //     });
  //   });
  //   return Promise.all(promises);  // Wait until all images are loaded
  // };


  // Preload images in useEffect
  // useEffect(() => {
  //   preloadImages(memoizedImages)
  //     .then(() => setLoading(false))  // Once images are preloaded, set loading to false
  //     .catch((error) => {
  //       console.error("Failed to preload images", error);
  //       setLoading(false);  // Still render even if preloading fails
  //     });
  // }, [memoizedImages]);  // Preload the images only once when the component mounts

  // // Render loading state while images are being preloaded
  // if (loading) {
  //   return <div>Loading...</div>;  // You can customize this loading screen
  // }



  const memoizedImages = useMemo(() => {
    return [
      scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7, 
      scroll1, scroll2, scroll3, scroll4, scroll5, scroll6, scroll7, 
    ];
  }, []); 

  const memoizedScrollChildren = useMemo(() => 
    memoizedImages.map((imgUrl, idx) => (
      <img key={idx} src={imgUrl} alt={`${idx}`}  />
    )), 
    [memoizedImages]
  );

  





  return (
    <div className="about2Page">
      <Navigation />
      
      <section className="aboutTop">
        <div className="aboutTop-heading">
        <motion.div
          className="first-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Your health is our priority
        </motion.div>

        <motion.p
          className="second-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.2,  duration: 1.5 }}
        >
          Go guilt free because now healthy is also tasty!
        </motion.p>
        </div>
      </section>

      <motion.section 
        className="aboutMiddle"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}    
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* <motion.div className="image-container">
          <motion.img
            src={img}
            alt="Scaling Image"
            className="scaling-image"
          />
        </motion.div> */}

        
<div className="middle">
          <div>
          <p className="middleText-heading">
          From Your Heart to Our Cart!
          </p>
          </div>

          <div className="middleText-body">
          <div className="middleText">

          <div className="middleText-content-subHeading">
          <p>
          Order with ease on WhatsApp, Instagram, email, or phone.
          </p>
          </div>

          <div className="middleText-content">
          
          <div className="middleText2">
          <p>
            <a href="https://wa.me/+919742727643?text=Hi%20%0AI%20would%20like%20to%20place%20an%20order%20and%20would%20like%20to%20discuss%20the%20same." 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <FaWhatsapp />
            </a>
            <a href="https://wa.me/+919742727643?text=Hi%20%0AI%20would%20like%20to%20place%20an%20order%20and%20would%20like%20to%20discuss%20the%20same." 
            target="_blank" 
            rel="noopener noreferrer">
            Chat on Whatsapp
            </a>
          </p>
        </div>


        <div className="middleText2">
          <p>
            <a href="https://www.instagram.com/hazelpatisserie?igsh=cHVzNmI2NGJzbmUy" 
            target="_blank" 
            rel="noopener noreferrer">
             <FaInstagram/>
            </a>
            <a href="https://www.instagram.com/hazelpatisserie?igsh=cHVzNmI2NGJzbmUy" 
            target="_blank" 
            rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>

        <div className="middleText2">
          <p>
            <a href="mailto:rupal.sngh@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            >
             <CiMail style={{strokeWidth: 1, fill: '#c38576', stroke: '#c38576',}}/>
            </a>
            <a href="mailto:rupal.sngh@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            // style={{display: 'inline-flex', alignItems: 'center', alignContent: 'center'}}
            >
              rupal.sngh@gmail.com
            </a>
          </p>
        </div>

        <div className="middleText2">
          <p>
             <CiPhone  style={{strokeWidth: 1, fill: '#c38576', stroke: '#c38576'}}/>
             +91 974 2727 643
          </p>
        </div>

        </div>

        </div>


        <div className="middleForm">
        <div className="middleText-content-subHeading">
          <p>
          Or drop us a message and we will get back to you 
          </p>
          </div>
          <Form />
        </div>

        </div>
        </div>
      </motion.section>



      <section className="about2FeedbackSection">
        <div className="feedbacksectionHeading">We promise we didnot bribe them (much) ! 😄</div>
        <About2Feedback />
      </section>


      <section className="scrollComponent">
        <div className="scrollComponent-heading">Follow our <a href="https://www.instagram.com/hazelpatisserie?igsh=cHVzNmI2NGJzbmUy" target="_blank" rel="noreferrer">Instagram</a> for updates and offers</div>
        <About2ScrollComponentMemoized baseVelocity={-0.2}>
          {/* {memoizedImages.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} alt={` ${idx}`}  />
          ))} */}
          {memoizedScrollChildren}
        </About2ScrollComponentMemoized>

        <About2ScrollComponentMemoized baseVelocity={0.2}>
          {/* {memoizedImages.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} alt={`${idx}`} />
          ))} */}
          {memoizedScrollChildren}
        </About2ScrollComponentMemoized>

      </section>
    </div>
  );
};

export default About2;









