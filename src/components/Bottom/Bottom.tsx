import React from 'react';
import './Bottom.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

const Bottom = () => {
  return (
    <div className='bottomParentDiv'>
        <div className="socialMedia">
            SOCIAL MEDIA
            <div className="anchorlinks">
                <a href="https://www.instagram.com/hazelpatisserie?igsh=cHVzNmI2NGJzbmUy" 
                            target="_blank" 
                            rel="noopener noreferrer">
                             <FaInstagram/>
                            </a>
            </div>

            <div className="anchorlinks">
                 <a href="https://wa.me/+919742727643?text=Hi%20%0AI%20would%20like%20to%20place%20an%20order%20and%20would%20like%20to%20discuss%20the%20same." 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            <FaWhatsapp />
                            </a>
            </div>
        </div>

        
            <div className="categoriess">
                CATEGORIES

                <div className="categoriesLinksDiv">
                    <Link to={`/products?categories=${encodeURIComponent('Cakes')}`} className='categoriesLinks'>Cakes</Link>
                </div>
                <div className="categoriesLinksDiv">
                    <Link to={`/products?categories=${encodeURIComponent('Healthy Snacks')}`} className='categoriesLinks'>Snacks</Link>
                </div>
                <div className="categoriesLinksDiv">
                    <Link to={`/products?categories=${encodeURIComponent('Hampers')}`} className='categoriesLinks'>Hampers</Link>
                </div>
            </div>


            <div className="Information">
                INFORMATION

                <div className="informationLinksDiv">
                <Link to='/delivery' className='informationLinks'>Delivery</Link>
                </div>
                <div className="informationLinksDiv">
                   <Link to={`/contact?scrollTo=enquiries`} className='informationLinks'>Enqueries</Link>
                </div>
                <div className="informationLinksDiv">
                   <Link to={`/contact?scrollTo=enquiries`} className='informationLinks'>Contact</Link>
                </div>
                    
                

            </div>
            
      
    </div>
  )
}

export default Bottom