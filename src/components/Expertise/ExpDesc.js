import React from 'react';
import divorce from '../../assets/divorce.png';
import marriage from '../../assets/marriage-contract.png';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ExpDesc = () => {
  const items = [
    {
      title: "International Divorce Cases",
      icon: divorce,
    },
    {
      title: "Prenuptial Agreements",
      icon: marriage,
    },
    {
      title: "Civil Partnerships",
      icon: divorce,
    },
    {
      title: "High Net Worth Individuals",
      icon: marriage,
    },
  ];


  const pairedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    pairedItems.push(items.slice(i, i + 2));
  }

  return (
    <div className='expDesc'>
      <p className='expDesc-title'>Areas Of Expertise</p>
      <p className='expDesc-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation
      </p>

      {pairedItems.map((pair, index) => (
        <Row key={index} className="gx-3">
          {pair.map((item, itemIndex) => (
            <Col xs={12} md={6} key={itemIndex} className="expDesc-item">
              <div className="expDesc-item-content">
                <div className="expDesc-item-details">
                  <div className="expDesc-item-title">{item.title}</div>
                  <div className="expDesc-item-arrow">
                    <AiOutlineArrowRight color="warning" />
                  </div>
                </div>
                <div className='expDesc-item-image-container'>
                  <img src={item.icon} alt={item.title} className="p-3 expDesc-item-image" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default ExpDesc;
