import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Contact.css';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Contact = () => {
  const cakesFromStore = useSelector((state:RootState) => state.cakes.cakes);

  return (
    <div className='contactParentDiv'>
        <Navigation />
        
    
    <div>

    </div>
    </div>
  )
}

export default Contact;