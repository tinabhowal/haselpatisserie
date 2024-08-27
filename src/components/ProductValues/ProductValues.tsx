import './ProductValues.css';
import img1 from '../../images/michele-blackwell-evRB-x0TJkM-unsplash.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ProductValues = () => {

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef})
    const x = useTransform(scrollYProgress, [0,1], ['0%', '-100%'])
    return (  
            <div className='carousal' ref={targetRef}>
                <div className='contentContainer'>
                    <motion.div className='items' style={{x}}>

                    <motion.div
                    initial={{opacity:0, y: 150}}
                    whileInView={{opacity: 1, y:0, }}
                    transition={{duration:0.5, ease: 'easeOut'}}
                    >
                        <div className='descriptionAndProduct'>
                            <div className='description'>gkhkj</div>
                            <div className='product'><img src={img1} alt='product1'></img></div>
                        </div>
                    </motion.div>

                    <motion.div
                    initial={{opacity:0, y: 150}}
                    whileInView={{opacity: 1, y:0, }}
                    transition={{duration:0.5, ease: 'easeOut'}}
                    >
                        <div className='descriptionAndProduct'>
                            <div className='description'>gkhkj</div>
                            <div className='product'><img src={img1} alt='product1'></img></div>
                        </div>
                    </motion.div>
            
                    <motion.div
                    initial={{opacity:0, y: 150}}
                    whileInView={{opacity: 1, y:0, }}
                    transition={{duration:0.5, ease: 'easeOut'}}
                    >
                        <div className='descriptionAndProduct'>
                            <div className='description'>gkhkj</div>
                            <div className='product'><img src={img1} alt='product1'></img></div>
                        </div>
                        </motion.div>

                    </motion.div>
              </div>
            </div>
            
        
    );
}

export default ProductValues;








