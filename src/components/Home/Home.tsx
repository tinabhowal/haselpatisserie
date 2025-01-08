import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
//import ProductValues from '../ProductValues/ProductValues';
import ProductValuesTwo from '../ProductValuesTwo/ProductValuesTwo';
import Products from '../Products/Products';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../images/Group 45.png";
// import img2 from '../../images/donuts.jpg';
import { motion} from 'framer-motion';
import ParallaxFloat from '../ParallaxFloat/ParallaxFloat';


const Home = () => {

  const [y, setY] = useState<number>(200);

  useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth <=768){
        setY(100);
      }else{
        setY(200);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return(() => {
      window.removeEventListener('resize', handleResize);
    })
  },[])

  return (
    <div className='homeDiv'> 
      <Navigation /> 
      <section className="header" 
      > 
        <ParallaxFloat />
      </section>


      <motion.section
            initial={{opacity:0, y: y}}
            whileInView={{opacity: 1, y:0, }}
            transition={{duration:0.9, ease: 'easeInOut'}}    
            viewport={{ once: false, amount: 0.1 }}        
        >
          <ProductValuesTwo />     
      </motion.section>

<motion.section
            className="products"
            initial={{opacity:0, y: y}}
            whileInView={{opacity: 1, y:0, }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{duration:0.9, ease: 'easeInOut'}}
        >
      <Products />
      </motion.section>
     
    </div>
  );
};

export default Home;








