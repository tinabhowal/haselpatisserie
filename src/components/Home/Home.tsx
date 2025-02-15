import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import ProductValuesTwo from '../ProductValuesTwo/ProductValuesTwo';
import Products from '../Products/Products';
import './Home.css';
import { motion} from 'framer-motion';
import ParallaxFloat from '../ParallaxFloat/ParallaxFloat';
import bigHomeBg from '../../images/bakedwithlove3.jpg';
// import smallHomeBg from '../../images/brent-ninaber-r98McHBXGN8-unsplash (1).webp';
import smallHomeBg from '../../images/homesmallbg.jpg';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';


const Home = () => {

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
 
  return (
    <div className='homeDiv'> 
      <Navigation /> 
      

      <section className="header"> 
        <ParallaxFloat backgroundImages={{
        smallScreen: smallHomeBg,
        default: bigHomeBg,
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
                Personalized Cakes & Healthy Treats in Bangalore 
              </motion.div>
      
              <motion.p
                className="second-text"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.2,  duration: 1.5 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                Freshly Baked, Always Special!
              </motion.p>
              </div>) : null}/>

      </section>

     
      <motion.section
            className='productValuess'
            initial={{opacity:0, y: y}}
            whileInView={{opacity: 1, y:0, }}
            transition={{duration:0.9, ease: 'easeInOut'}}    
            viewport={{ once: true, amount: 0.1 }}        
        >
          <ProductValuesTwo />     
         
      </motion.section>

<motion.section
            className="products"
            initial={{opacity:0, y: y}}
            whileInView={{opacity: 1, y:0, }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{duration:0.9, ease: 'easeInOut'}}
        >
      <Products showBestsellersOnly={true}/>
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

export default React.memo(Home);








