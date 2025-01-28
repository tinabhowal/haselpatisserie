import img1 from '../../images/productValues1.jpg';
import img2 from '../../images/productvalues2.jpg';
import img3 from '../../images/productvalues3.jpg';
import img4 from '../../images/productvalues4.jpg';
import img5 from '../../images/productvalues5.jpg';
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
      text: 'First paragraph text.',
    },
    {
      image: img2,
      text: 'Second paragraph text.',
    },
    {
      image: img3,
      text: 'Third paragraph text.',
    },
    {
      image: img4,
      text: 'Fourth paragraph text.',
    },
    {
      image: img5,
      text: 'Fifth paragraph text.',
    },
  ];

  return (
    <>
      <h2 className='whyUs' style={{fontFamily: "Montaga, serif", fontSize: "2rem", fontWeight: 400, color: "#212121"}}>Why choose us?</h2>
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
