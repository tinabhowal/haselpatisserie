import React, {  Suspense, useMemo,} from "react";
import { motion } from "framer-motion";
import './About2.css';
import Navigation from "../Navigation/Navigation";
// import img from "../../images/quin-engle-QRpNjzEX1eU-unsplash.webp";
import About2Feedback from "./About2Feedback";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { CiMail, CiPhone } from "react-icons/ci";
import About2ScrollComponent from "./About2ScrollComponent";
import scroll1 from "../../images/anton-mqg-xlHRMGs-unsplash.webp";
import scroll2 from "../../images/anton-mqg-xlHRMGs-unsplash.webp";
import scroll3 from "../../images/anton-mqg-xlHRMGs-unsplash.webp";
import scroll4 from "../../images/anton-mqg-xlHRMGs-unsplash.webp";
import scroll5 from "../../images/confectionery.webp";
import scroll6 from "../../images/confectionery.webp";


import Form from "./Form";
// const About2ScrollComponent = React.lazy(() => import('./About2ScrollComponent'));

const About2: React.FC = React.memo(() => {

  

  const memoizedImages = useMemo(() => {
    const images = [scroll1, scroll2, scroll3, scroll4, scroll5, scroll6];
    return [...images]; 
  }, []);

  const memoizedScrollChildren = useMemo(() =>
    memoizedImages.map((imgUrl, idx) => (
      <img key={idx} src={imgUrl} alt={`${idx}`} 
      // loading="eager" 
      loading="lazy"
      className="scrollImage" 
      />
    )), 
    [memoizedImages]
  );

  
  const scrollComponent = useMemo(() => (
    <>
      <About2ScrollComponent baseVelocity={-0.2}>
        {memoizedScrollChildren}
      </About2ScrollComponent>
      <About2ScrollComponent baseVelocity={0.2}>
        {memoizedScrollChildren}
      </About2ScrollComponent>
    </>
  ), [memoizedScrollChildren]);


  
  return (
    <div className="about2Page">
      <Navigation />
      
      <section className="aboutTop">
        {/* <div className="aboutTop-heading">
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
        </div> */}
      </section>
 

      <motion.section 
        className="aboutMiddle"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}    
        viewport={{ once: false, amount: 0.1 }}
      >

        
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


<section className="scrollComponent">
        <div className="scrollComponent-heading">
          Follow our <a href="https://www.instagram.com/hazelpatisserie" target="_blank" rel="noreferrer">Instagram</a> for updates and offers
        </div>
        {scrollComponent}
      </section>

      <section className="about2FeedbackSection">
        <div className="feedbacksectionHeading">We promise we didnot bribe them (much) ! 😄</div>
        <About2Feedback />
      </section>

        
      
    </div>
  );
});

export default About2;











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





// {/* <section className="scrollComponent">
// <div className="scrollComponent-heading">
//           Follow our <a href="https://www.instagram.com/hazelpatisserie" target="_blank" rel="noreferrer">Instagram</a> for updates and offers
//         </div>
// <Suspense fallback={<div>Loading...</div>}>
//   <About2ScrollComponent baseVelocity={-0.2}>
//     {memoizedScrollChildren}
//   </About2ScrollComponent>
// </Suspense>
// <Suspense fallback={<div>Loading...</div>}>
//   <About2ScrollComponent baseVelocity={0.2}>
//     {memoizedScrollChildren}
//   </About2ScrollComponent>
// </Suspense>
// </section>    */}