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
    onClose: () => void;
    
}
const ProductDetails = (props:props) => {
    const handleBackgroundClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if(e.target === e.currentTarget){
            props.onClose()
        }
    } 

  return (
  
    <div style={{position:'relative'}}>
                             {/* <motion.div
                                className="overlayy" 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.1 }}
                                // transition={{
                                //     duration: 0.2,
                                //     ease: [0.4, 0, 0.2, 1]
                                // }}
                                onClick={handleBackgroundClick}
                            /> */}
                            <motion.div
                                className="focused-itemm"
                                initial={{ scale: 0, opacity: 0 }} 
                                animate={{ scale: 1, opacity: 1 }} 
                                exit={{ scale: 0.5, opacity: 0 }} 
                                // transition={{
                                //     duration: 0.2,
                                //     ease: [0.4, 0, 0.2, 1]
                                // }}
                                transition={{ duration: 0.1, ease: [0.4, 0, 0.2, 1]}}
    
                            >
                                <>

                                <div>
    <img className='modal-content-img' src={`http://localhost:8080/${props.product.ImagePath}`}
        // {props.product.ImagePath} 
        alt={props.product.Name}>

        </img>
        </div>
        <div>
            <h2>{props.product.Name}</h2>
            <p>{props.product.Description}</p>
            <button onClick={props.onClose}>Close</button>
        </div>
                                </>
                            </motion.div>

</div>
  )
}

export default ProductDetails;





