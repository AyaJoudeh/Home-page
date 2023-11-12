import React from 'react';
import './contact.css';
import LeftSide from './LeftSide';
import ContactForm from './ContactForm';
import { Row,Col } from 'react-bootstrap';

const Contact = () => {
    return ( <div className='contact-container'>
     <Row>
        <Col><LeftSide /></Col>
        <Col><ContactForm /></Col>
    </Row>   
    </div> );
}
 
export default Contact;