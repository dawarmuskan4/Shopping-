import React from 'react';
import {Link} from 'react-router-dom'
import Giftshop from './gift_shop.jpg'
import { Card, Button, Image } from 'react-bootstrap';

const CardComp = () => {
  return (
    <Card className='card1' >
      <Image variant="top" width='150px' align="left" src= {Giftshop} />
      <Card.Body>
        <Card.Text>
          <p>Watchmart Street 4 Shop</p>
          <p>Rs. 35000</p>
          <p>Delivery & Services</p>
          <p>Express delivery delivery in 1hr</p>
          <p>Return Option</p>
        </Card.Text>
        <Button variant="primary">Extra offer</Button>
        <Card.Text>
          Bajaj Platini PX97 torque 36-litres Personal Air Cooler (White) for medium room 
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        <Card.Text>
          <p>Alternate Product</p>
          <p>Realme 108cm (43inch) Ultra Hd(4K) LED Smart
          Android TV with Handsfree Voice Search and Dolby 
          Vision and Atmos (RMV2004)</p>
          <p style={{textDecorationLine: 'line-through'}}>Rs. 39,000</p> <b>Rs. 34,500</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
