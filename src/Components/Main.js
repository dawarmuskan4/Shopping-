import React from 'react';
import { Image, Button, Card } from 'react-bootstrap';
import Watch from './watch.jpg'
const Main = () => {
  return (
    <Card className='card'>
      <Card.Text>
        <h2>All Bids From Merchants </h2>
        <p>Some subheading for the offers of merchants</p>
      </Card.Text>
      <Image variant="left" src={Watch} width={200}/>
      <Card.Text>
        <p>Realme 108cm (43inch) Ultra Hd(4K) LED Smart
          Android TV with Handsfree Voice Search and Dolby 
          Vision and Atmos (RMV2004)</p>
          <p variant="secondary">Category / Subcategory</p>
          <p style={{textDecorationLine: 'line-through'}}>Rs. 39,000</p>
          <p>Qty:2</p>
          <Button>All details</Button>
      </Card.Text>
    </Card>
  );
};

export default Main;
