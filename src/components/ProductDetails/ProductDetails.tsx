import React from 'react';
import './ProductDetails.css';
import {motion} from 'framer-motion'

interface props {
    product: {
        ImagePath: string;
        ul: {
            img1: string;
            img2: string;
            img3: string;
        };
        Name: string;
        Description: string;
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
        <img src={`http://localhost:8080/${props.product.ImagePath}`}
        // {props.product.ImagePath} 
        alt={props.product.Name}>

        </img>
        </div>
        <div>
            <h2>{props.product.Name}</h2>
            <p>{props.product.Description}</p>
            <button onClick={props.onClose}>Close</button>
        </div>
        
        </div>
    </motion.div>
  )
}

export default ProductDetails;