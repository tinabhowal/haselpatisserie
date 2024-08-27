import React from 'react';
import './ProductDetails.css';
import {motion} from 'framer-motion'

interface props {
    product: {
        img: string;
        ul: {
            img1: string;
            img2: string;
            img3: string;
        };
        title: string;
        description: string;
    };
    onClose: () => void
}
const ProductDetails = (props:props) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(e.target === e.currentTarget){
            props.onClose()
        }
    }
  return (
    <motion.div
    className='modal'
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y:0}}
    exit={{opacity: 0, y: 20}}
    transition={{duration: 0.3}}
    onClick={handleBackgroundClick}>
        <div className="modal-content">
        <div>
        <img src={props.product.img} alt={props.product.title}></img>
        </div>
        <div>
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
            <button onClick={props.onClose}>Close</button>
        </div>
        
        </div>
    </motion.div>
  )
}

export default ProductDetails