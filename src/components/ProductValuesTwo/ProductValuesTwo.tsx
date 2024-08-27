 
import img1 from '../../images/michele-blackwell-evRB-x0TJkM-unsplash.jpg';
import img2 from '../../images/jesni-rawther-XAJRdCq7a0w-unsplash.jpg';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductValuesTwo.css';


const ProductValuesTwo = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  console.log('productvalues')

  const settings: Settings = {
    dots: false,
    lazyLoad: "progressive",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: img1,
      text: 'First paragraph text. ',
    },
    {
      image: img2,
      text: 'Second paragraph text. lohjhfhkbkkgddfffffffffffffffffcggg',
    },
  ];

  return (
    <>
   
    <h2 className='whyUs'>Why choose us?</h2>
    <div className='container'>
      <div className='slider-container'>
        <Slider
          {...settings}
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

      <div className='slider-container'>
        <Slider
          {...settings}
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
    </div>
   
    </>
  );
};

export default ProductValuesTwo;







 
