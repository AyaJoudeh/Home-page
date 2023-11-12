import React from 'react';
import './news.css';
import Cards from './cards';

const News = () => {
    return (     
    <div className='nesDesc'>
    <p className='newsDesc-title'>Latest News & Updates</p>
    <p className='newsDesc-text'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </p>
    <Cards />

  </div> );
}
 
export default News;