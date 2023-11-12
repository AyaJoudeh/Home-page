import React from 'react';
import './services.css';
import Cards from './Cards';

const Services = () => {
    return ( <div className='services-container'>
        <p className='servDesc-title'>How can <br /> <span className='title-span'>we serve you?</span></p>
        <p className='servDesc-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <Cards />
    
    </div> );
}
 
export default Services;