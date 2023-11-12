import React from 'react';
import Card2 from './Card';
import office from '../../assets/office-building.png'
import agreement from '../../assets/agreement.png'
import global from '../../assets/global.png'
import money from '../../assets/money-bag.png'
import {Row,Col} from 'react-bootstrap';

const Cards = () => {
    const items=[
        {
            img:office,
            title:"Corporate/Commercial",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        {
            img:agreement,
            title:"Finance",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        {
            img:global,
            title:"Mergers & Acquisitions",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
        },
        {
            img:money,
            title:"International Trade & Logistics",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        },

    ]
    return ( <Row className='m-4'>
        {
            items.map((item,index)=>{
                return(
                    <Col key={index}>
                    <Card2 img={item.img} title={item.title} desc={item.desc} />
                  </Col>
                )
            })
        }
     
     </Row>);
}
 
export default Cards;