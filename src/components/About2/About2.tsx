import React, {  useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import './About2.css';
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
// import img from "../../images/quin-engle-QRpNjzEX1eU-unsplash.webp";
import About2Feedback from "./About2Feedback";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { CiMail, CiPhone } from "react-icons/ci";
import About2ScrollComponent from "./About2ScrollComponent";
import scroll1 from "../../images/20230517_114107973_iOS.png";
import scroll2 from "../../images/IMG_3949.png";
import scroll3 from "../../images/IMG_3971.png";
import scroll4 from "../../images/IMG_4866.png";
import scroll5 from "../../images/IMG_5610.png";
import scroll6 from "../../images/IMG_7607.png";
import smallAboutBg from '../../images/aboutSmallbg.jpg';
import bigAboutBg from '../../images/aboutbg2.jpg';


import Form from "./Form";
import ParallaxFloat from "../ParallaxFloat/ParallaxFloat";
import Bottom from "../Bottom/Bottom";
import Footer from "../Footer/Footer";


const About2: React.FC = React.memo(() => {

  const [largeScreen, setLargeScreen] = useState<boolean>(window.innerWidth > 768);
  
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768){
        setLargeScreen(false);
      }else{
        setLargeScreen(true);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize)

    return(() => {
      window.removeEventListener('resize', handleResize)
    })
  },[])



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
      {/* <About2ScrollComponent baseVelocity={0.2}>
        {memoizedScrollChildren}
      </About2ScrollComponent> */}
    </>
  ), [memoizedScrollChildren]);


  const location = useLocation();
  const middleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get('scrollTo');

    if(scrollTo === 'enquiries' && middleRef.current){
      middleRef.current.scrollIntoView({behavior: 'smooth'})
    }
  },[location.search])
  
  return (
    <div className="about2Page">
      <Navigation />
      
      <section className="aboutTop">
      <ParallaxFloat backgroundImages={{
        smallScreen: smallAboutBg,
        default: bigAboutBg,
      }}
      optionalContent = {largeScreen ? (<div className="aboutTop-heading">
        <motion.div
          className="first-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Reach Out to Bangalore’s Best Bakery 
        </motion.div>

        <motion.p
          className="second-text"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.2,  duration: 1.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Custom Cakes & Treats Made Easy!
        </motion.p>
        </div>) : null}/>
        

        
      </section>
 

      <motion.section 
        className="aboutMiddle"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}    
        viewport={{ once: true, amount: 0.1 }}
        ref={middleRef}
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
          Order with ease on WhatsApp, Instagram, or phone.
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
            <a href="mailto:hazelpatisserie.enquiry@gmail.com"
            target="_blank" 
            rel="noopener noreferrer"
            
            >
              hazelpatisserie.enquiry@gmail.com
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

      <section>
        <Bottom />
      </section>
        
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
});

export default React.memo(About2);











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