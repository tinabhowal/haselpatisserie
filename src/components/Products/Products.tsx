import React, { useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Products.css";
import { motion, AnimatePresence } from "framer-motion";
import ProductDetails from "../ProductDetails/ProductDetails";
import { productType } from "../../types/types";
const Products = () => {



  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<productType | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');

  
  

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };


  const cakesFromStore = useSelector((state:RootState) => state.cakes.cakes);
  const cakes = cakesFromStore.filter((cake) => cake.BestSeller === true);

  //console.log('cakes', cakes)
  const openModal = (product:any) => {
    setShowModal(true);
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  }

  const categories = ["All", "Cup cake", "Energy bar",  "Birthday cake", "Healthy snacks", "Choco chips"];

  //const categoryButtonsRef = useRef<HTMLDivElement>(null);

  const onClickCategory = (category: string, 
    // event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedCategory(category);

    // if (categoryButtonsRef.current){
    //   const buttons = categoryButtonsRef.current.querySelectorAll('button');
    //   buttons.forEach((button) => button.classList.remove('selected'));
    //   event?.currentTarget.classList.add('selected');
    // }
  }

  

  const filteredProducts = selectedCategory === "All"? cakes : cakes.filter((item) => item.Category === selectedCategory) 

  // const fixedImagePath = (item: string) => {
  //   return item.replace(/\\/g, "/");
  // };

  return (
    <div className="section">
      <div className="contents">
        <h1>Our best sellers!</h1>
        <div className="categoryButtons" 
        // ref={categoryButtonsRef}
        >
          {categories.map((item) => (
            <button 
            onClick={() => onClickCategory(item)} 
            // onClick={(event) => onClickCategory(item, event)} 
            key={item}
            className={item === selectedCategory? 'selected' : ''}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="productTilesContainer">
          {/* {productTiles.map((item, index) => ( */}
          {filteredProducts.map((item, index) => (
            <div className="productTilesContainer" key={index}>
              
              <div className="productTiles">
              {/* <div className={item.bestseller? 'bestseller':'productTiles'}> */}
              {item.BestSeller && <div className="bestseller-badge">Bestseller</div>}
                <div className="productTilesImage">
                  <LazyLoadImage
                    src={item.ImagePath}
                    alt=""
                    effect="blur"
                    width="100%"
                    height="100%"
                    // srcSet={`${fixedImagePath(item.ImagePath)} 300w, ${fixedImagePath(item.ImagePath)} 600w, ${fixedImagePath(item.ImagePath)} 1200w`}
                    srcSet={`http://localhost:8080/${item.ImagePath} 300w, http://localhost:8080/${item.ImagePath} 600w, http://localhost:8080/${item.ImagePath} 1200w`}

                    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                  />
                </div>
                <motion.ul
                  className="productTilesUl"
                  initial="hidden"
                  whileHover="visible"
                  variants={ulVariants}
                >
                 <motion.li variants={liVariants} onClick={() => openModal(item)}><img src='' alt=""></img></motion.li>
                 <AnimatePresence>
                 {showModal && selectedProduct && (
                  
                  <ProductDetails product={item} onClose={closeModal}></ProductDetails>
                  
                 )}
                 </AnimatePresence>
                 <motion.li variants={liVariants}><img src='' alt=""></img></motion.li>
                 <motion.li variants={liVariants}><img src='' alt=""></img></motion.li>
                </motion.ul>
                <div className="productTilesDescription">{item.Name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
