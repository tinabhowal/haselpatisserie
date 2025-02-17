import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './Trending.css';
import img1 from '../../images/IMG_0247.jpg';
import img2 from '../../images/IMG_0348.jpg';
import img3 from '../../images/IMG_0248.jpg';


const Trending = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true
  };
  return (
    <>
    <div className="trendingNowHeading">Trending now!</div>
    <div className="trendingParentDiv">
      
    <div className="trendingDescription">
      <p className="trendingDescriptionHeading">Valentine's Day Hamper</p>
      <p>Celebrate Valentine's Day with us!</p>
      <p>Share your love with our handcrafted Heart pops or Heart Box, the stars of this Valentine's Day.</p>
      <p>Each assorted Heart Box comes with four cupcakes, three Heart Pops and a bunch of lovely flowers that will make your Valentine blush.</p>
      <a href="https://wa.me/+919742727643?text=Hi%20%0AI%20would%20like%20to%20order%20the%20trending%20product%20and%20would%20like%20to%20discuss%20the%20same." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  <button className="contactUsButtonForTrending">Order Now</button>
                  </a>
    </div>

    <div className="slider-container">
      <Slider {...settings}>      
       <div className="trendingImagesDiv">
          <img className='trendingImages' src={img1} alt="trending item"/>
        </div>
        <div className="trendingImagesDiv">
          <img className='trendingImages' src={img2} alt="trending item"/>
        </div>
        <div className="trendingImagesDiv">
          <img className='trendingImages' src={img3} alt="trending item"/>
        </div>
        
      </Slider>
    </div>
   
    </div>
    </>
  );
}

export default Trending;




