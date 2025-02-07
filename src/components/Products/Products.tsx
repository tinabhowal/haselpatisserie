import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'; 
import './Products.css';

interface ProductsProps {
  showBestsellersOnly?: boolean;
  initialCategory?: string
}

const Products = ({ showBestsellersOnly = false, initialCategory }: ProductsProps) => {

  const cakesFromStore = useSelector((state: RootState) => state.cakes.cakes);

  const cakes = showBestsellersOnly
    ? cakesFromStore.filter((cake) => cake.BestSeller === true)
    : cakesFromStore;

  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  
  const categories = [
    'All',
    'Cakes',
    'Cookies',
    'Crackers',
    'Dessert',
    'Healthy Bites',
    'Pet Goodies',
    'Hampers'
  ];

   
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

 

  const filteredProducts =
    selectedCategory === 'All'
      ? cakes
      : cakes.filter((item) => item.Category === selectedCategory);

  const onClickCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const toggled = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const generateWhatsAppLink = (productImage: string, productName: string, productDescription: string) => {
    const phoneNumber = '+919742727643'; 
    const message = `Hello, I want to enquire about the product: ${productName}. ${productDescription ? `Description: ${productDescription}` : ''}%0A%0AImage: ${productImage}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};


useEffect(() => {
 
  if (initialCategory) {
    setSelectedCategory(initialCategory);
  }
}, [initialCategory]);

  return (
    <div className="productsSection">
      <div className="contents">
        <div className='productsSectionHeading'>{showBestsellersOnly ? 'Our Best Sellers!' : 'Our Products'}</div>
        {window.innerWidth <=768? (
          <div className="categoryButtons">
          
            <select
              value={selectedCategory || 'All'}
              onChange={(e) => onClickCategory(e.target.value)}
              className='categoryDropdown'
            >
              {categories.map((item) => (
                <option
                key={item}
                value={item}
                >{item}</option>
                ))}
            </select>
          
        </div>
        ) : (
          <div className="categoryButtons">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => onClickCategory(item)}
              className={item === selectedCategory ? 'selected' : ''}
            >
              {item}
            </button>
          ))}
        </div>
        )}

        <div className="productTilesContainer">
          {filteredProducts.map((item, index) => (
            <div
              className={`productTiles ${flipped[index] ? 'flipped' : ''}`}
              key={index}
              onClick={() => toggled(index)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="tileInner">
                <div className="tileFront">
                  {item.BestSeller && <div className="bestseller-badge">Bestseller</div>}
                  <div className="productTilesImage">
                    <LazyLoadImage
                      src={item.ImagePath}
                      alt={item.Name}
                      effect="opacity"
                      threshold={100}
                      width="100%"
                      height="100%"
                      srcSet={`http://localhost:8080/${item.ImagePath} 300w, http://localhost:8080/${item.ImagePath} 600w, http://localhost:8080/${item.ImagePath} 1200w`}
                      sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                    />
                  </div>
                  <div className="productTilesDescription">{item.Name}</div>
                </div>

                <div className="tileBack">
                  <h3>{item.Name}</h3>
                  <p>{item.Description}</p>
                  <a
                    href={generateWhatsAppLink(`http://localhost:8080/${item.ImagePath}`, item.Name, item.Description)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    Contact via WhatsApp
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;























// import React, { useState } from "react";
// import { RootState } from "../../store/store";
// import { useSelector } from "react-redux";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import "./Products.css";
// import { motion, AnimatePresence } from "framer-motion";
// import ProductDetails from "../ProductDetails/ProductDetails";
// // import { productType } from "../../types/types";

// const Products = () => {



//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  
  

//   const ulVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const liVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };


//   const cakesFromStore = useSelector((state:RootState) => state.cakes.cakes);
//   const cakes = cakesFromStore.filter((cake) => cake.BestSeller === true);

//   //console.log('cakes', cakes)
//   const openModal = (product:any) => {
//     setShowModal(true);
//     setSelectedProduct(product)
//   }

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   }

//   const categories = ["All", "Cup cake", "Energy bar",  "Birthday cake", "Healthy snacks", "Choco chips"];


//   const onClickCategory = (category: string, 
//   ) => {
//     setSelectedCategory(category);
//   }

  

//   const filteredProducts = selectedCategory === "All"? cakes : cakes.filter((item) => item.Category === selectedCategory) 


//   return (
//     <div className="section">
//       <div className="contents">
//         <h1>Our best sellers!</h1>
//         <div className="categoryButtons" 
//         // ref={categoryButtonsRef}
//         >
//           {categories.map((item) => (
//             <button 
//             onClick={() => onClickCategory(item)} 
//             // onClick={(event) => onClickCategory(item, event)} 
//             key={item}
//             className={item === selectedCategory? 'selected' : ''}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//         <div className="productTilesContainer">
//           {filteredProducts.map((item, index) => (

//             // <div className="productTilesContainer" key={index}>
              
//               <div className="productTiles" key={index}>
//               {item.BestSeller && <div className="bestseller-badge">Bestseller</div>}
//                 <div className="productTilesImage">
//                   <LazyLoadImage
//                     src={item.ImagePath}
//                     alt=""
//                     effect="blur"
//                     width="100%"
//                     height="100%"
//                     srcSet={`http://localhost:8080/${item.ImagePath} 300w, http://localhost:8080/${item.ImagePath} 600w, http://localhost:8080/${item.ImagePath} 1200w`}
//                     sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
//                   />
//                 </div>
//                 <motion.ul
//                   className="productTilesUl"
//                   initial="hidden"
//                   whileHover="visible"
//                   variants={ulVariants}
//                 >
//                  <motion.li variants={liVariants} onClick={() => openModal(item)}><img src='' alt=""></img></motion.li>
//                  {/* <AnimatePresence>
//                  {showModal && selectedProduct && ( 
                  
//                  <ProductDetails product={selectedProduct} onClose={closeModal} ></ProductDetails>
                  
//                  )}
//                  </AnimatePresence> */}
                 
//                  {/* <motion.li variants={liVariants}><img src='' alt=""></img></motion.li>
//                  <motion.li variants={liVariants}><img src='' alt=""></img></motion.li> */}
//                 </motion.ul>

                
//                 <div className="productTilesDescription">{item.Name}</div>

                
//               </div>
//             //  {/* </div>  */}
//           ))}
//         </div>

        
//       </div>
//     </div>
//   );

  
// };

// export default Products;







