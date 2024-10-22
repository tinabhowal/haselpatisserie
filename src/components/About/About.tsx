// import React from 'react';
// import Navigation from '../Navigation/Navigation';
// import './About.css';
// import owners from '../../images/omar-lopez-SwDgZX29BZI-unsplash.jpg';
// import { Parallax } from 'react-parallax';
// import prallaxBg from '../../images/pexels-bon-bons-studio-546637735-16658518.jpg';
// const About = () => {
//   return (
//     <div>
//         <Navigation />
//         <div className='aboutPage'>
//         <section className='aboutHeader'>
//           <div className='aboutImgDiv'><img src={owners} alt='owners'/></div>
//           <div className="aboutContentDiv"><p>cghfjgjhgjghjghvhgfhgfgfjhvbnv</p></div>
//         </section>
//         <section className='section'>
//           <Parallax
//             bgImage={prallaxBg}
//             strength={500}
//             blur={{min: -1, max:1}}
//             >
//               <div style={{height: 500}}>
//                 <h1>Parallax header</h1>
//                 <p>Your content here</p>
//               </div>
//             </Parallax>
//         </section>
//         </div>
//     </div>
//   )
// }

// export default About








// import React, { useRef } from 'react'
// import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
// import Navigation from '../Navigation/Navigation';
// import img1 from '../../images/Group 45.png';
// import img2 from '../../images/anton-mqg-xlHRMGs-unsplash.jpg';
// import img3 from '../../images/brent-ninaber-r98McHBXGN8-unsplash.jpg';
// import img4 from '../../images/elena-leya-mr8yc2WyobI-unsplash.jpg';
// import img5 from '../../images/henry-be-fCdmeAaV7EI-unsplash.jpg';
// import img6 from '../../images/hugo-aitken-PqYvDBwpXpU-unsplash.jpg';
// import img7 from '../../images/jesni-rawther-XAJRdCq7a0w-unsplash.jpg';



// const url = (name: string, wrap = false) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

// export default function App() {
//   const parallax = useRef<IParallax>(null!)
//   return (
//     <div style={{ width: '100%', height: '100%', backgroundColor: '#253237' }}>
//       <Navigation />
//       <Parallax ref={parallax} pages={3}>
//         <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
//         <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

//         <ParallaxLayer
//           offset={0}
//           speed={0}
//           factor={3}
//           style={{
//             backgroundImage: url('stars', true),
//             backgroundSize: 'cover',
//           }}
//         />

//         <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
//           <img 
//           src={url('satellite4')}
//           // src={img1}
//           alt='' 
//           style={{ width: '15%', marginLeft: '70%' }} 
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1}  speed={0.8} style={{ opacity: 0.1 }}>
//           <img 
//           src={url('cloud')} 
//           //src={img2} 
//           alt='' 
//           style={{ display: 'block', width: '20%', marginLeft: '55%' }} 
//           />
//           <img 
//           src={url('cloud')} 
//           //src={img3} 
//           alt='' 
//           style={{ display: 'block', width: '10%', marginLeft: '15%' }} 
//           />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.75}  speed={0.5} style={{ opacity: 0.1 }}>
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1}  speed={0.2} style={{ opacity: 0.2 }}>
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.6} speed={-0.1}  style={{ opacity: 0.4 }}>
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
//           <img src={url('cloud')} alt=''  style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
//           <img src={url('cloud')} alt='' style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2.5}
//           speed={-0.4}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             pointerEvents: 'none',
//           }}>
//           <img src={url('earth')} alt='' style={{ width: '60%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0.3}
//           style={{
//             backgroundSize: '80%',
//             backgroundPosition: 'center',
//             backgroundImage: url('clients', true),
//           }}
//         />

//         <ParallaxLayer
//           offset={0}
//           speed={0.1}
//           onClick={() => parallax.current.scrollTo(1)}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           {/* <img src={url('server')} alt='' style={{ width: '20%' }} /> */}
//           <img src={img1} alt='' style={{ width: '20%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={1}
//           speed={0.1}
//           onClick={() => parallax.current.scrollTo(2)}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <img src={url('bash')} alt='' style={{ width: '40%' }} />
//         </ParallaxLayer>

//         <ParallaxLayer
//           offset={2}
//           speed={-0}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//           onClick={() => parallax.current.scrollTo(0)}>
//           <img src={url('clients-main')} alt ='' style={{ width: '40%' }} />
//         </ParallaxLayer>
//       </Parallax>
//     </div>
//   )
// }







import React, { useEffect, useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Navigation from '../Navigation/Navigation';
import img1 from '../../images/omar-lopez-SwDgZX29BZI-unsplash.jpg';
import cupCake from '../../images/confectionery.png';
import feedback1 from '../../images/feedback1.png';
import { useSpring, animated } from 'react-spring';
import FeedbackCarousal from '../FeddbackCarousal/FeedbackCarousal';



const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const About = () => {
  const parallax = useRef<IParallax>(null!);
  const [scrollPos, setScrollPos] = useState<number>(0);

  const handleScroll = () => {
    const position = parallax.current?.current;
    setScrollPos(position);
    //console.log('scrollpos', scrollPos)
  }

  const [ triggerAnimation, setTriggerAnimation ] = useState(false);
  //const [fadeIn, setFadeIn] = useState(false);

  const img1Animation = useSpring({
    transform: triggerAnimation? 'translateX(-200px)' : 'translateX(0px)',
    opacity: triggerAnimation? 1:0,
    config: {mass: 2, tension: 50, friction: 15},
  })

  const img2Animation = useSpring({
    transform: triggerAnimation? 'translateX(200px)' : 'translateX(0px)',
    opacity: triggerAnimation? 1:0,
    config: {mass: 2, tension:50, friction:15}
  })

  // const img2Animation = useSpring({
  //   transform: triggerAnimation? 'translateX(200px)' : 'translateX(0px)',
  //   opacity: fadeIn ? 1 : 0,
  //   config: {mass: 4, tension:40, friction:25}
  // })

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTriggerAnimation(true)
    }, 200)

    // const fadeInTimeOut = setTimeout(() => {
    //   setFadeIn(true)
    // },1700)

    return () => {
      clearTimeout(timeOut);
      // clearTimeout(fadeInTimeOut)
    }
  },[])

  return (
    
    <div style={{ width: '100%', height: '100%', backgroundColor: '#253237' }}>
    <Navigation scrollPos={scrollPos}/>
    
      <Parallax ref={parallax} pages={3} onScrollCapture={handleScroll} style={{ backgroundColor: '#beecf5' }}>
      
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundColor: 'white',
            // backgroundColor: '#DC7E80',
            // backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img 
          //src={url('satellite4')}
          src={cupCake}
          alt='' 
          style={{ width: '15%', marginLeft: '70%' }} 
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1}  speed={0.8} style={{ opacity: 0.1 }}>
          <img 
          // src={url('cloud')} 
          src={cupCake} 
          alt='' 
          style={{ display: 'block', width: '20%', marginLeft: '55%' }} 
          />
          <img 
          //src={url('cloud')} 
          src={cupCake} 
          alt='' 
          style={{ display: 'block', width: '10%', marginLeft: '15%' }} 
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75}  speed={0.5} style={{ opacity: 0.1 }}>
          <img 
          //src={url('cloud')}
          src={cupCake}
          alt='' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img 
          //src={url('cloud')}
          src={cupCake}
          alt='' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1}  speed={0.2} style={{ opacity: 0.2 }}>
          <img 
          //src={url('cloud')}
          src={cupCake} 
          alt='' style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img 
          //src={url('cloud')} 
          src={cupCake}
          alt='' style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1}  style={{ opacity: 0.4 }}>
          <img 
          //src={url('cloud')} 
          src={cupCake}
          alt='' style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img 
          //src={url('cloud')} 
          src={cupCake}
          alt=''  style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img 
          //src={url('cloud')}
          src={cupCake} 
          alt='' style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img 
          //src={url('cloud')} 
          src={cupCake}
          alt='' style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img 
          //src={url('cloud')} 
          src={cupCake}
          alt='' style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img 
          //src={url('earth')} 
          //src={cupCake}
          alt='' style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
            // zIndex: 999
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            //backgroundColor: '#beecf5',
            //backgroundColor: '#253237' 
          }}>
          {/* <img src={url('server')} alt='' style={{ width: '20%' }} /> */}
          <animated.img src={img1} alt='' style={{ width: '20%', marginBottom: '20px', ...img1Animation}} />
          {/* <animated.img src={img2} alt='' style={{width: '20%', ...img2Animation}} /> */}
          <animated.p style={{ width: '20%', fontSize: '1rem', color: '#fff', whiteSpace: 'wrap', ...img2Animation }}>
              This is a sample animated paragraph replacing the second image. hgjhfjyruyjghjhhhkjjjjjjjjjjjjjjjjjjjjjjj
          </animated.p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img 
          //src={url('bash')} 
          alt='' style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img 
          src={url('clients-main')} 
          // src={feedback1}
          alt ='' style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            //backgroundColor: '#beecf5',
            //backgroundColor: '#253237' 
          }}>
<FeedbackCarousal />
          </ParallaxLayer>
      </Parallax>
    </div>
    
  )
}

export default About;