
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './Navigation.css';

// const Navigation = () => {
//     const [background, setBackground] = useState('transparent');

//     const handleScroll = () => {
//         const scrollTop = window.pageYOffset;
//         if (scrollTop > 50) {
//             setBackground('rgba(0, 0, 0, 0.8)'); // Background color after scrolling
//         } else {
//             setBackground('transparent'); // Initial background color
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <motion.nav 
//             className="navbar" 
//             style={{ backgroundColor: background }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//         >
//             <div className="navbar-logo">Logo</div>
//             <ul className="navbar-menu">
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#services">Services</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </motion.nav>
//     );
// };

// export default Navigation;




import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Navigation.css';

interface NavigationProps {
    scrollPos?: number
}
const Navigation = (props:NavigationProps) => {
    const [background, setBackground] = useState('transparent');
    const ref = useRef<HTMLDivElement>(null);
    // const isInView = useInView(ref, { once: false });

    // useEffect(() => {
    //     if (isInView) {
    //         setBackground('transparent');
    //     } else {
    //         setBackground('rgba(0, 0, 0, 0.8)');
    //     }
    // }, [isInView]);

    useEffect(() => {
        const handleScroll = () => {
            if (props.scrollPos !== undefined) {
                // console.log('Navigation received scrollPos:', props.scrollPos);
                if (props.scrollPos > 100) {
                    setBackground('rgba(0, 0, 0, 0.8)');
                } else {
                    setBackground('transparent');
                }
            } else {
                if (window.scrollY > 100) {
                    setBackground('rgba(0, 0, 0, 0.8)');
                } else {
                    setBackground('transparent');
                }
            }
        };
    
        if (props.scrollPos === undefined) {
            window.addEventListener('scroll', handleScroll);
        } else {
            handleScroll(); // Manually invoke handleScroll when scrollPos updates
        }
    
        return () => {
            if (props.scrollPos === undefined) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [props.scrollPos]);  
    
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path
    }

    return (
        <>
            <motion.nav 
                className="navbar" 
                style={{ backgroundColor: background,  }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="navbar-logo">Hazel Patisserie</div>
                <ul className="navbar-menu">
                    <li className={isActive("/") ? "active" : ''}><Link to="/">Home</Link></li>
                    <li className={isActive("/about") ? "active" : ''}><Link to="/about">About</Link></li>
                    <li className={isActive("/contact") ? "active" : ''}><Link to="/contact">Contact</Link></li>
                </ul>
            </motion.nav>
            <div ref={ref} style={{ position: 'absolute', top: '10vh' }}></div>
        </>
    );
};

export default Navigation;





