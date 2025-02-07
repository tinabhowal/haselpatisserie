import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import './Productss.css';
import { motion} from 'framer-motion';
import ParallaxFloat from '../ParallaxFloat/ParallaxFloat';
import bigProductssBg from '../../images/productssBigBg.jpg';
import smallProductssBg from '../../images/productssSmallBg.jpg';
import { useLocation } from 'react-router-dom';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const Productss = () => {


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('categories');

  const productsSectionRef = useRef<HTMLDivElement>(null);
  
const [y, setY] = useState<number>(200);
  const [largeScreen, setLargeScreen] = useState<boolean>(window.innerWidth > 768);
  useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth <=768){
        setY(50);
        setLargeScreen(false)
      }else{
        setY(200);
        setLargeScreen(true)
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return(() => {
      window.removeEventListener('resize', handleResize);
    })
  },[])

  useEffect(() => {
    if(category && productsSectionRef.current){
      productsSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  },[category])
 
  return (
    <div className='homeDiv'> 
      <Navigation /> 
      <section className="header"> 
        <ParallaxFloat backgroundImages={{
        smallScreen: smallProductssBg,
        default: bigProductssBg,
      }}
      
      optionalContent = {largeScreen ? (
      <div className="aboutTop-heading">
              <motion.div
                className="first-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                Browse Custom Cakes & Healthy Snacks
              </motion.div>
      
              <motion.p
                className="second-text"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.2,  duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                Guilt-Free Goodness Awaits!
              </motion.p>
              </div>) : null}/>

      </section>


      <motion.section
            ref={productsSectionRef}
            className="products"
            initial={{opacity:0, y: y}}
            whileInView={{opacity: 1, y:0, }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{duration:0.9, ease: 'easeInOut'}}
        >
      {category? <Products initialCategory={category} /> : <Products />}
      
      </motion.section>

      <section>
        <Bottom />
      </section>
 
     <footer>
      <Footer />
     </footer>
    </div>
  );
};

export default React.memo(Productss);


