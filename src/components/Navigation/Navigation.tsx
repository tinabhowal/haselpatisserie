import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Navigation.css';

// interface NavigationProps {
//     scrollPos?: number
// }
// const Navigation = (props:NavigationProps) => {
    const Navigation = () => {
    const [style, setStyle] = useState({
        background: 'transparent',
        backdropFilter: 'none',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '1.4rem'
    });
    const [navLogoFont, setNavLogoFont] = useState({fontSize: '2rem'})
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            setStyle({
                background: 'transparent',
                backdropFilter: 'none',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                fontSize: '1.4rem'
            })
            setNavLogoFont({fontSize: window.innerWidth <=768? '1.2rem' : '2rem'})
    
        } else {
            setStyle({
                background: 'rgba(255, 255, 255, 0.3)', 
                backdropFilter: 'blur(10px)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                fontSize: '1.2rem'
            })
            setNavLogoFont({fontSize: window.innerWidth <= 768? '1.2rem' :'1.6rem'})
           
            
        }
    }, [isInView]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    }
    

    return (
        <>
            <motion.nav 
                className="navbar" 
                style={style}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="navbar-logo" style={navLogoFont}>Hazel Patisserie</div>
                <button className='hamburger' onClick={toggleMenu} aria-label='Toggle Menu'> {menuOpen ? '✖' : '☰'} </button>
                <ul className={`navbar-menu  ${menuOpen ? 'open' : ''}`}>
                    {/* <li className={isActive("/") ? "active" : ''}><Link to="/">Home</Link></li>
                    <li className={isActive("/about") ? "active" : ''}><Link to="/about">About</Link></li>
                    <li className={isActive("/contact") ? "active" : ''}><Link to="/contact">Contact</Link></li> */}

                    <li ><Link rel="preload" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li ><Link rel="preload" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li ><Link rel="preload" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </motion.nav>
            <div ref={ref} style={{ position: 'absolute', top: '10vh' }}></div>
        </>
    );
};

export default Navigation;





// useEffect(() => {
    //     const handleScroll = () => {
    //         if (props.scrollPos !== undefined) {
    //             // console.log('Navigation received scrollPos:', props.scrollPos);
    //             if (props.scrollPos > 100) {
    //                 setBackground('rgba(0, 0, 0, 0.8)');
    //             } else {
    //                 setBackground('transparent');
    //             }
    //         } else {
    //             if (window.scrollY > 100) {
    //                 setBackground('rgba(0, 0, 0, 0.8)');
    //             } else {
    //                 setBackground('transparent');
    //             }
    //         }
    //     };
    
    //     if (props.scrollPos === undefined) {
    //         window.addEventListener('scroll', handleScroll);
    //     } else {
    //         handleScroll(); // Manually invoke handleScroll when scrollPos updates
    //     }
    
    //     return () => {
    //         if (props.scrollPos === undefined) {
    //             window.removeEventListener('scroll', handleScroll);
    //         }
    //     };
    // }, [props.scrollPos]);  
    
    // const location = useLocation();

    // const isActive = (path: string) => {
    //     return location.pathname === path
    // }