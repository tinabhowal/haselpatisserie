import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '10px', fontSize: '0.9rem', color: '#666' }}>
  <p>
    © Hazel Patisserie. Made with <span role="img" aria-label="love">❤️</span> by 
    <a 
      href="https://tinabhawal.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: '#c38576', marginLeft: '5px' }}
    >
     Tina Bhawal
    </a>.
  </p>
  <p className='imagesOfHazelCopyright'>
  All product images used on this website are the exclusive property of Hazel Patisserie and are protected by copyright laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
  </p>
</footer>

  )
}

export default Footer