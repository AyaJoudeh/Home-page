import React from 'react';
import office from '../../assets/office-building.png'
import agreement from '../../assets/agreement.png'
import global from '../../assets/global.png'
import money from '../../assets/money-bag.png'
import {Row,Col} from 'react-bootstrap';
import NewsCard from './NewsCard';
import business from '../../assets/business_man.png'
import smile from '../../assets/satisfied_smile.png'
import women from '../../assets/two_women.png'
import gray from '../../assets/grey.png'


const Cards = () => {
    const items=[
        {
            img:business,
            title:"Lorem ipsum dolor sit amet",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        },
        {
            img:smile,
            title:"Lorem ipsum dolor sit amet",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        },
        {
            img:gray,
            title:"Lorem ipsum dolor sit amet",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        },
        {
            img:women,
            title:"Lorem ipsum dolor sit amet",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
        },

    ]
    return ( <Row className='m-4 '>
        {
            items.map((item,index)=>{
                return(
                    <Col key={index} className='cardsContainer'>
                    <NewsCard img={item.img} title={item.title} desc={item.desc} />
                  </Col>
                )
            })
        }
     
     </Row>);
}
 
export default Cards;