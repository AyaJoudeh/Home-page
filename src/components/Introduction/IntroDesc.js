import React from 'react';
import { Button } from 'react-bootstrap';
import './intro.css'; // Import your CSS file

const IntroDesc = () => {
  return (
    <div className='introDesc'>
      <p className='introDesc-title'>We Bring <br />  Success to You</p>
      <p className='introDesc-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <Button variant='warning' className='introDesc-button'>
        GET A QUOTE
      </Button>
    </div>
  );
}

export default IntroDesc;
