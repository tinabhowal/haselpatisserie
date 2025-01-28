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
</footer>

  )
}

export default Footer