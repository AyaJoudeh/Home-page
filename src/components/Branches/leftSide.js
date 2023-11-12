import React from 'react';
import azer from '../../assets/azerbaijan.png';
import egy from '../../assets/egypt.png';
import jo from '../../assets/jo-circle-01.png';
import turk from '../../assets/turkey.png'
import uk from '../../assets/united-kingdom.png'


const LeftSide = () => {
    const items=[
        {
           icon:jo,
           title:'Jordan',
           desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            icon:egy,
            title:'Egypt',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },
         {
            icon:azer,
            title:'Azerbaijan',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },
         {
            icon:turk,
            title:'Turkey',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },
         {
            icon:uk,
            title:'United Kingdom',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },


    ]
    return (<div>
        {items.map((item, index) => {
          return (
            <div key={index} className="item-container">
              <div className="left-side">
                <img src={item.icon} alt="icon" />
              </div>
              <div className="right-side">
                <h6 className='' >{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div> );
}
 
export default LeftSide;