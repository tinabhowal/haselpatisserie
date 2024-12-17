import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxFloat.css';
import img from "../../images/bakedwithlove.png";
import bun2 from "../../images/orange gingerbread cookie.png";
import pretzel from "../../images/leaf2.png";
import leafy from "../../images/leaf.png";


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
            {/* <div className='rotating-cookie'><img src={bread} alt='cookie' /></div> */}
            <div className='rotating-cookie'><img src={leafy} alt='cookie' /></div>
            <div className='rotating-cookie2'><img src={pretzel} alt='cookie' /></div>
          </div>
        </Parallax>
      );
}

export default ParallaxFloat