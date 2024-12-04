import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxFloat.css';
import img from "../../images/freepik__remove-the-pink-bakery-stamps-and-all-the-writings__4327.png";
import breadCutout from "../../images/breadCutout.png";
import cookieCutout from "../../images/cookieCutout.png";
import croissant from "../../images/croissant1.png";
import pretzel from "../../images/bun.png";
import bread from "../../images/bread.png";
import bun2 from "../../images/bun2.png"

const ParallaxFloat = () => {
    return (
        <Parallax
          bgImage= {img}
          strength={200} // Controls the parallax effect strength
          bgImageAlt="background"
          className="parallax-container"
        >
          <div style={{ height: '500px' }}>
            {/* <h1 className="floating-text">Hazel Patisserie</h1> */}
            {/* <div className='floating-bread'><img src={breadCutout} alt='bread' /></div>
            <div className='rotating-cookie'><img src={cookieCutout} alt='cookie' /></div> */}
            <div className='floating-croissant1'><img src={bun2} alt='croissant' /></div>
            <div className='rotating-cookie'><img src={bread} alt='cookie' /></div>
            <div className='rotating-cookie2'><img src={pretzel} alt='cookie' /></div>
          </div>
        </Parallax>
      );
}

export default ParallaxFloat