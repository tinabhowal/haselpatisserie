import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxFloat.css';
import img from "../../images/265294-P5XQTN-588.jpg";

const ParallaxFloat = () => {
    return (
        <Parallax
          bgImage= {img}
          strength={500} // Controls the parallax effect strength
          bgImageAlt="background"
          className="parallax-container"
        >
          <div style={{ height: '500px' }}>
            <h1 className="floating-text">Floating Effect</h1>
          </div>
        </Parallax>
      );
}

export default ParallaxFloat