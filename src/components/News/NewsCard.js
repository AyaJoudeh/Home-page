import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import office from '../../assets/office-building.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';


const NewsCard = (props) => {
    return ( 
        <Card style={{ width: '24rem',border:'none' }} className='p-4'>
        <Card.Img variant="top" src={props.img} className='card-image2' />
        <Card.Body>
          <Card.Title className='mt-5'>{props.title}</Card.Title>
          <Card.Text>
           {props.desc}
          </Card.Text>
          <Button variant="warning" className='arrow-button'><MdOutlineKeyboardArrowRight color='white'  /></Button>
        </Card.Body>
      </Card>
     );
}
 
export default NewsCard;