import React,{ useRef, memo } from "react";
import './About2ScrollComponent.css';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";





interface ParallaxProps {
  children: React.ReactNode;
  // children: string;
  baseVelocity: number;
}

const About2ScrollComponent = ({ children, baseVelocity = 100 }: ParallaxProps) => {
 

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  //const x = useTransform(baseX, (v) => `${wrap(-50, -100, v)}%`); // Increased the range for wrapping

  const directionFactor = useRef<number>(1);


 

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        {/* <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span> */}
      </motion.div>
    </div>
  );
};

export default About2ScrollComponent;












// Wrap the component with React.memo
// const About2ScrollComponent = memo(({ children, baseVelocity = 100 }: ParallaxProps) => {
//   // Existing logic here...
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   const directionFactor = useRef<number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }

//     moveBy += directionFactor.current * moveBy * velocityFactor.get();
//     baseX.set(baseX.get() + moveBy);
//   });

//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         {children}
//       </motion.div>
//     </div>
//   );
// });

// export default About2ScrollComponent;
