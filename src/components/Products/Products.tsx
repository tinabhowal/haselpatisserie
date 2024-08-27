import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Products.css";
import { motion, AnimatePresence } from "framer-motion";
import pic1WebP from "../../images/umesh-soni--gyo40AXZ_U-unsplash.webp";
import pic2WebP from "../../images/umesh-soni--gyo40AXZ_U-unsplash.webp";
import pic3WebP from "../../images/quin-engle-QRpNjzEX1eU-unsplash.webp";
import pic4WebP from "../../images/tetiana-bykovets-L3q11Xtvsfs-unsplash.webp";
import pic5WebP from "../../images/pexels-marcia-salido-346903577-14133143.webp";
import pic6WebP from "../../images/tetiana-bykovets-L3q11Xtvsfs-unsplash.webp";
import ProductDetails from "../ProductDetails/ProductDetails";

const Products = () => {

  interface productType {
    product: {
        img: string;
        ul: {
            img1: string;
            img2: string;
            img3: string;
        };
        title: string;
        description: string;
        bestseller: boolean
    };
    onClose: () => void
}

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

  const productTiles = [
    {
      img: pic1WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Cup Cake",
      category: "Cup Cake",
      description: "hggjhghkhjgkjhlkjhlkh",
      bestseller: false
    },
    {
      img: pic2WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Energy Bar",
      category: "Energy Bar",
      description: "hggjhghk",
      bestseller: false
    },
    {
      img: pic3WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Birthday Cake",
      category: "Birthday Cake",
      description: "hggjhghk",
      bestseller: false
    },
    {
      img: pic4WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Healthy Snack",
      category: "Healthy Snack",
      description: "hggjhghk",
      bestseller: true
    },
    {
      img: pic5WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Choco Chips",
      category: "Choco Chips",
      description: "hggjhghk",
      bestseller: false
    },
    {
      img: pic6WebP,
      ul: {
        img1: "",
        img2: "",
        img3: "",
      },
      title: "Choco Chips",
      category: "Choco Chips",
      description: "hggjhghk",
      bestseller: true
    },
  ];

  const openModal = (product:any) => {
    setShowModal(true);
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  }

  const categories = ["All", "Cup Cake", "Energy Bar",  "Birthday Cake", "Healthy Snack", "Choco Chips"];

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

  const filteredProducts = selectedCategory === "All"? productTiles : productTiles.filter((item) => item.category === selectedCategory) 

  return (
    <div className="section">
      <div className="contents">
        <h1>Our Products</h1>
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
              {item.bestseller && <div className="bestseller-badge">Bestseller</div>}
                <div className="productTilesImage">
                  <LazyLoadImage
                    src={item.img}
                    alt=""
                    effect="blur"
                    width="100%"
                    height="100%"
                    srcSet={`${item.img} 300w, ${item.img} 600w, ${item.img} 1200w`}
                    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                  />
                </div>
                <motion.ul
                  className="productTilesUl"
                  initial="hidden"
                  whileHover="visible"
                  variants={ulVariants}
                >
                 <motion.li variants={liVariants} onClick={() => openModal(item)}><img src={item.ul.img1} alt=""></img></motion.li>
                 <AnimatePresence>
                 {showModal && selectedProduct && (
                  
                  <ProductDetails product={item} onClose={closeModal}></ProductDetails>
                  
                 )}
                 </AnimatePresence>
                 <motion.li variants={liVariants}><img src={item.ul.img2} alt=""></img></motion.li>
                 <motion.li variants={liVariants}><img src={item.ul.img3} alt=""></img></motion.li>
                </motion.ul>
                <div className="productTilesDescription">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;





