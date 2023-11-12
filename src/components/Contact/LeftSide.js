import React from 'react';
import question from '../../assets/question.png'

const LeftSide = () => {
    return ( <div className='leftSideCont' >
              <p className='contactDesc-title'>We Are Here For You</p>
      <p className='leftDesc-text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
       dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>
      <div>
        <img src={question} alt="" className='question-icon' height='59%' />
        <p className='question-p'>+971 4 000 0000</p>
      </div>
      <div>
        <img src={question} alt="" className='question-icon' height='59%' />
        <p className='question-p'>info@domainname.com</p>
      </div>
      <div>
        <img src={question} alt="" className='question-icon' height='59%' />
        <p className='question-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et</p>
      </div>
  
    </div> );
}
 
export default LeftSide;