import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation'
import './AboutUs.css';
import ParallaxFloat from '../ParallaxFloat/ParallaxFloat';
import aboutUsBigBg from '../../images/aboutUsBigBg.jpg';
import aboutUsSmallBg from '../../images/aboutUsSmallBg.png';
import { motion} from 'framer-motion';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const AboutUs = () => {
const [largeScreen, setLargeScreen] = useState<boolean>(window.innerWidth > 768);
useEffect(() => {

    const handleResize = () => {
      if(window.innerWidth <=768){
        
        setLargeScreen(false)
      }else{
        
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
    <div className='aboutUsParentDiv'>
        <Navigation />
        <section style={{height: '100vh'}}>
        <ParallaxFloat backgroundImages={{
            smallScreen: aboutUsSmallBg,
            default: aboutUsBigBg,
        }}
        optionalContent = {largeScreen ? (
            <div className="aboutTop-heading">
                    <motion.div
                      className="first-text"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 0.8, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      Amrita & Rupal
                    </motion.div>
            
                    <motion.p
                      className="second-text"
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 0.8, y: 0 }}
                      transition={{ delay: 0.2,  duration: 1.5 }}
                    >
                      From our home kitchen to yours 
                    </motion.p>
                    </div>) : null}
        />
        </section>
        <motion.div className="aboutUsContent"
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once:true}}
        transition={{duration: 0.9, ease: 'easeInOut'}}>
            <h2>About Us</h2>
            <div className='aboutUsContent-p '>
            <p>
                Welcome to Hazel Patisserie, where every bite is a step toward better, cleaner indulgence. Co-founded by Amrita and Rupal, a small team of passionate home bakers we started our journey in the kitchen, baking treats for our families and friends. What began as a personal quest to create delicious, homemade goodies soon grew into a mission to offer something better than what we saw in stores.
            </p> 
            <p>
                As we baked for the people we loved, we noticed something troubling—many commercial baked goods were loaded with artificial additives, refined sugars, and unhealthy ingredients. That’s when we made a decision: we would bake clean, guilt-free treats that not only tasted better but were made from scratch with the purest ingredients.
            </p>
             <p> 
                At Hazel Patisserie, we believe in the power of simplicity. We craft every treat from scratch using only the finest whole ingredients. Our cakes, cookies, crackers, and more are made without refined flour, refined sugars, or any hidden nasties. Instead, we use a wholesome blend of millets, whole wheat, and other nutrient-rich grains to create textures and flavors that are both unique and nourishing.
            </p> 
             <p>  
                Everything we bake—from the spongy cakes to our in-house compotes, fillings, and frostings—is created by hand in our kitchen. No shortcuts. No mass production. Just the care and love that comes from baking with purpose.
             </p> 
            <p> 
                Our mission is simple: to provide a healthier, tastier alternative to the overly processed options that dominate the market. Whether you're enjoying a slice of cake, a homemade cracker, or a batch of freshly baked cookies, you can rest assured that you’re indulging in something truly wholesome.
            </p> 
            <p>
                At Hazel Patisserie, we're not just baking treats—we’re baking a healthier, more mindful way of enjoying food. One bite at a time.
            </p>
            </div>
        </motion.div>

        <section>
        <Bottom />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AboutUs