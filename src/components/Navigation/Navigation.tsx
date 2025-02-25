import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import './Navigation.css';


    const Navigation = () => {
    const location = useLocation();

    const isActive = (path: string) => {
         return location.pathname === path
    }

    const [showDrawer, setShowDrawer] = useState<boolean>(false);
    
    const [style, setStyle] = useState({
        background: 'transparent',
        backdropFilter: 'none',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '1.4rem',
        color: 'white'
    });
    const [navLogoFont, setNavLogoFont] = useState({fontSize: '2rem', color: 'white'});
    const [hamburgerColor, setHamburgerColor] = useState({color: 'white'})
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [spanBeforeColor, setSpanBeforeColor] = useState<string>('white');
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            setStyle({
                background: 'transparent',
                backdropFilter: 'none',
                paddingLeft: '1.2rem',
                paddingRight: '1.2rem',
                fontSize: '1.4rem',
                color: 'white'
            })
            setNavLogoFont({fontSize: window.innerWidth <=768? '2rem' : '3rem',  color: 'white'})
            setHamburgerColor({color: 'white'})
            setSpanBeforeColor('white');
    
        } else {
            setStyle({
                background: 'rgba(255, 255, 255, 0.70)', 
                backdropFilter: 'blur(30px)',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                fontSize: '1.3rem',
                color: '#AA624F;'
            })
            setNavLogoFont({fontSize: window.innerWidth <= 768? '2rem' :'2rem', color: '#AA624F'})
            setHamburgerColor({color:'#AA624F'})
            setSpanBeforeColor('#AA624F');
        
        }
    }, [isInView]);

    useEffect(() => {
        if(window.innerWidth <=768){
            setShowDrawer(true);
        }
    },[])

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
                <button className='hamburger' onClick={toggleMenu} aria-label='Toggle Menu' style={hamburgerColor}> {menuOpen ? '✖' : '☰'} </button>
                <ul className={`navbar-menu  ${menuOpen ? 'open' : ''}`} 
                style={{'--before-color': spanBeforeColor} as React.CSSProperties}
                >
                    <li className={isActive("/") ? "active" : ''}><Link to="/" style={{color: hamburgerColor.color}} onClick={() => window.scrollTo(0,0)}><span>Home</span></Link></li>
                    <li className={isActive("/contact") ? "active" : ''}><Link to="/contact"style={{color:hamburgerColor.color}} onClick={() => window.scrollTo(0,0)}><span>Contact</span></Link></li>
                    <li 
                    className={isActive("/products") ? "active" : ''}
                    onMouseEnter={() => setShowDrawer(true)}
                    onMouseLeave={() => setShowDrawer(false)}
                    >
                        <Link to="/products" style={{color:hamburgerColor.color}} onClick={() => window.scrollTo(0,0)}><span>Products</span></Link>

                        {showDrawer && (
                            <motion.div 
                            className="products-drawer"
                            initial={{ opacity: 0, y: -20 }}
                            animate={showDrawer ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            style={{ pointerEvents: showDrawer ? "auto" : "none" , '--before-color': spanBeforeColor} as React.CSSProperties} 
                            >
                                <Link to = {`/products?categories=${encodeURIComponent('Cakes')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Cakes</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Cookies')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Cookies</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Crackers')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Crackers</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Dessert')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Dessert</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Healthy Bites')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Healthy Bites</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Pet Goodies')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Pet Goodies</span></Link>
                                <Link to = {`/products?categories=${encodeURIComponent('Hampers')}`} onClick={toggleMenu} style={{color: hamburgerColor.color}} ><span>Hampers</span></Link>
                            </motion.div>
                        )}
                        </li>
                </ul>
            </motion.nav>
            <div ref={ref} style={{ position: 'absolute', top: '10vh' }}></div>
        </>
    );
};

export default Navigation;




// interface NavigationProps {
//     scrollPos?: number
// }
// const Navigation = (props:NavigationProps) => {
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
    
    