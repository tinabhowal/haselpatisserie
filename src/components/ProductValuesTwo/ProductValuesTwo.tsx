import img1 from '../../images/productvalues1.png';
import img2 from '../../images/productvalues2.png';
import img3 from '../../images/productvalues3.jpg';
import img4 from '../../images/productvalues4.jpg';
import img5 from '../../images/productvalues5.png';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductValuesTwo.css';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
 
const ProductValuesTwo = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const imageSliderSettings: Settings = {
    dots: false,
    lazyLoad: "progressive",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
  };

  const textSliderSettings: Settings = {
    dots: false,
    lazyLoad: "progressive",
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  const slides = [
    {
      image: img1,
      heading: 'Pure, Guilt-Free Indulgence',
      text: 'Our treats are made with clean, wholesome ingredients—no refined flour, no refined sugars, and absolutely no artificial additives.',
    },
    {
      image: img2,
      heading: 'Handcrafted with Love',
      text: 'Every cake, cookie, and cracker is made from scratch, including our in-house compotes, fillings, and frostings. No shortcuts, just honest baking.',
    },
    {
      image: img3,
      heading: 'Nutritious & Delicious',
      text: 'We use a blend of millets, whole wheat, and nutrient-rich grains to create treats that are both flavorful and nourishing.',
    },
    {
      image: img4,
      heading: 'A Passion for Better Baking',
      text: 'Started by home bakers, we’re on a mission to offer a healthier, tastier alternative to overly processed store-bought sweets.',
    },
    {
      image: img5,
      heading: 'Pet-Friendly Treats',
      text: 'We care about your furry friends too! Our pet-friendly cakes and cookies are made with safe, natural ingredients—so your pets can celebrate with you.',
    },
  ];

  return (
    <>
      <div className='whyUs'>Why choose us?</div>
      <div className='container'>

        {/* Image Slider with arrows */}
        <div className='slider-container'>
          <Slider
            {...imageSliderSettings}
            asNavFor={nav1 as any}
            ref={(slider) => setNav2(slider)}
          >
            {slides.map((slide, index) => (
              <div key={index} className='productss'>
                <div className='productImage'>
                  <img src={slide.image} alt={`slide-${index}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Slider without arrows */}
        <div className='slider-container'>
          <Slider
            {...textSliderSettings}
            asNavFor={nav2 as any}
            ref={(slider) => setNav1(slider)}
          >
            {slides.map((slide, index) => (
              <div key={index} className='productss'>
                <div className='productDescription'>
                  <p className='productDescription-heading'>{slide.heading}</p>
                  <p>{slide.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </>
  );
};

export default ProductValuesTwo;
