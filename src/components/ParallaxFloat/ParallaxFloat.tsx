import React, { useState, useEffect } from 'react'; 
import { Parallax } from 'react-parallax';
import './ParallaxFloat.css';

interface FloatingImage {
  scr: string;
  alt: string;
  className: string;
}

interface ParallaxFloatProps {
  backgroundImages: {
    smallScreen : string;
    default: string;
  };
  floatingImages?: FloatingImage[];
  optionalContent?: React.ReactNode;
  parallaxStrength?: number;
}


const ParallaxFloat = (props : ParallaxFloatProps) => {

  const [bgImageStyle, setBgImageStyle] = useState({
    objectFit: 'cover',
    width: '100vw',
    height: '100vh', 
    backgroundPosition: 'top',
    
  });

  const [backgroundImg, setBackgroundImg] = useState<string>('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 || window.innerWidth <= 500){
        setBgImageStyle({
                    objectFit: 'cover',
                    width: '100vw',
                    height: '100%',
                    backgroundPosition: 'top',
                    
                  }); 
                  setBackgroundImg(props.backgroundImages.smallScreen);
      } else if(window.innerWidth < 1024){
        setBgImageStyle({
                    objectFit: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundPosition: 'top',
                    
                  });
                  setBackgroundImg(props.backgroundImages.smallScreen);
      } else {
        setBgImageStyle({
                    objectFit: 'cover',
                    width: '100vw',
                    height: '100vh',
                    backgroundPosition: 'top center',
                    
                  });
                  setBackgroundImg(props.backgroundImages.default);
      } 
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [props.backgroundImages])

  return(
    <Parallax
      bgImage={backgroundImg}
      strength={props.parallaxStrength}
      bgImageAlt="background"
      bgImageStyle={bgImageStyle}
      className="parallax-container"
      >
        {props.optionalContent && (
          <div style={{ height: '100px' }}>
            {props.floatingImages?.map((image, index) => (
              <div key={index} className={image.className}>
                <img src={image.scr} alt={image.alt} />
              </div>
            ))}
            {props.optionalContent}
          </div>
        )}
        </Parallax>
  )

}

export default ParallaxFloat;





























// import React, { useState, useEffect } from 'react';
// import { Parallax } from 'react-parallax';
// import './ParallaxFloat.css';
// import img from "../../images/bakedwithlove2.png";
// import bun2 from "../../images/orange gingerbread cookie.png";
// import pretzel from "../../images/leaf2.png";
// import leafy from "../../images/leaf.png";
// import bgImgForSmallScreen from "../../images/brent-ninaber-r98McHBXGN8-unsplash (1).webp";

// const ParallaxFloat = () => {
//   const [bgImageStyle, setBgImageStyle] = useState({
//     objectFit: 'cover',
//     width: '100vw',
//     height: '100vh', 
//     backgroundPosition: 'top',
//   });

//   const [backgroundImg, setBackgroundImg] = useState<string>('');
//   const [parallaxStrength, setParallaxStrength] = useState(200); 

//   useEffect(() => {
//     // Function to update bgImageStyle based on screen width
//     const handleResize = () => {
//       if (window.innerWidth <= 768 || window.innerWidth <= 500) {
//         setBgImageStyle({
//           objectFit: 'cover',
//           width: '100vw',
//           height: '100%',
//           backgroundPosition: 'top',
//         }); 
//         setBackgroundImg(bgImgForSmallScreen);
//         setParallaxStrength(200)
//       } else if(window.innerWidth < 1024){
//         setBgImageStyle({
//           objectFit: 'cover',
//           width: '100vw',
//           height: '100vh',
//           backgroundPosition: 'top',
//         });
//         setBackgroundImg(bgImgForSmallScreen);
//         setParallaxStrength(200)
//       }else if (window.innerWidth === 1024 || window.innerWidth > 1024 || window.innerWidth < 1100) {
//         setBgImageStyle({
//           objectFit: 'cover',
//           width: '100vw',
//           height: '100vh',
//           backgroundPosition: 'top center',
//         });
//         setBackgroundImg(img);
//       } else {
//         setBgImageStyle({
//           objectFit: 'cover',
//           width: '100vw',
//           height: '100vh',
//           backgroundPosition: 'top center'
//         });
//         setBackgroundImg(img);
//       }
//     };

//     // Call once on load and add a resize listener
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // Cleanup the listener on unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Parallax
//       bgImage={backgroundImg}
//       strength={parallaxStrength} // Controls the parallax effect strength
//       bgImageAlt="background"
//       bgImageStyle={bgImageStyle}
//       className="parallax-container"
//     >
//       <div style={{ height: ' 100px' }}>
//         <div className='floating-croissant1'><img src={bun2} alt='croissant' /></div>
//         <div className='rotating-cookie'><img src={leafy} alt='cookie' /></div>
//         <div className='rotating-cookie2'><img src={pretzel} alt='cookie' /></div>
//       </div>
//     </Parallax>
//   );
// };

// export default ParallaxFloat;







