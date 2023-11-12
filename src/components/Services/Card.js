import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import office from '../../assets/office-building.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Card2 = (props) => {
    return ( 
        <Card style={{ width: '24rem',backgroundColor:"#D8D8D81A" }} className='p-4'>
        <Card.Img variant="top" src={props.img} className='card-image' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Button variant="warning"><MdOutlineKeyboardArrowRight /></Button>
        </Card.Body>
      </Card>
     );
}
 
export default Card2;