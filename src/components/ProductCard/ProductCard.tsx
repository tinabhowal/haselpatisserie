// import React from 'react';
// import './ProductCard.css';

// const ProductCard = () => {
//   return (
//     <div>ProductCard</div>
//   )
// }

// export default ProductCard

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./ProductModal.css";

// const ProductCard = ({ product }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div
//       className="product-card"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => setIsModalOpen(true)}
//     >
//       <img src={product.images[0]} alt={product.name} className="product-image" />
//       {isHovered && (
//         <div className="quick-view">
//           <h3>{product.name}</h3>
//           <p>{product.shortDescription}</p>
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setIsModalOpen(false)}>
//               ✖
//             </button>
//             <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
//               {product.images.map((img, index) => (
//                 <div key={index}>
//                   <img src={img} alt={product.name} className="modal-image" />
//                 </div>
//               ))}
//             </Slider>
//             <div className="modal-description">
//               <h2>{product.name}</h2>
//               <p>{product.description}</p>
//               <p><strong>Ingredients:</strong> {product.ingredients}</p>
//               <button className="order-btn">Order Now</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;





import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCard.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProductCard = () => {

  const cakes = useSelector((state: RootState) => state.cakes);

  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    {cakes.map((product) => (
        <div
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={`${process.env.REACT_APP_BACKEND_URL}/${product.ImagePath}`} alt={product.Name} className="product-image" />
        {isHovered && (
          <div className="quick-view">
            <h3>{product.Name}</h3>
            {/* <p>{product.Description}</p> */}
          </div>
        )}
  
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                ✖
              </button>
              
              <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                {product.ImagePath && product.ImagePath.length > 1 ? Array.from(product.ImagePath).map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={product.Name} className="modal-image" />
                  </div>
                )) : (
                    <div>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${product.ImagePath}`} alt={product.Name} className="modal-image" />
                  </div>
                )} 
              </Slider>
              <div className="modal-description">
                <h2>{product.Name}</h2>
                <p>{product.Description}</p>
                <p><strong>Ingredients:</strong> {product.Ingredients}</p>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          </div>
        )}
      </div>

    ))}
    
    </>
  );
};

export default ProductCard;
