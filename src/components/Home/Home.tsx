import React, { useRef } from 'react';
import Navigation from '../Navigation/Navigation';
//import ProductValues from '../ProductValues/ProductValues';
import ProductValuesTwo from '../ProductValuesTwo/ProductValuesTwo';
import Products from '../Products/Products';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../images/brent-ninaber-r98McHBXGN8-unsplash.jpg';
import img2 from '../../images/pexels-apoteosico-706134429-18136631.jpg';

import { motion, useInView} from 'framer-motion';

const Home = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    waitForAnimate: false
  };

  const slides = [
    {
      image: img1,
      text: 'First paragraph text.',
    },
    {
      image: img2,
      text: 'Second paragraph text.',
    },
  ];

  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: false, amount: 0});

  // const variants = {
  //       hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
  //       visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  //       outOfView: { opacity: 0.5, scale: 0.75, transition: { duration: 0.5 } },  
  //   };

  return (
    <div className='homeDiv'>
      <section className="header" style={{padding:0}}>
        <Navigation />
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div
                className="background"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="headerText">{slide.text}</div>
              </div>
            </div>
          ))}
        </Slider>
      </section>


      <motion.section
            // className="productValues"
            // ref={ref}
            // initial="hidden"
            // animate={isInView ? "visible" : "outOfView"}
            // variants={variants}

            initial={{opacity:0, y: 200}}
            whileInView={{opacity: 1, y:0, }}
            transition={{duration:0.9, ease: 'easeInOut'}}            
        >
          {/* <section style={{height: '500vh'}}> 
           <ProductValues /> */}

          <ProductValuesTwo />     
      </motion.section>

<motion.section
            
            // ref={ref}
            // initial="hidden"
            // animate={isInView ? "visible" : "outOfView"}
            // variants={variants}
            className="products"
            initial={{opacity:0, y: 200}}
            whileInView={{opacity: 1, y:0, }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{duration:0.9, ease: 'easeInOut'}}

            
            
        >
      {/* <section className="productsDetails"> */}
      <Products />
      {/* </section> */}

      </motion.section>
     
    </div>
  );
};

export default Home;








