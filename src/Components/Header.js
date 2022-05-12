import React from 'react';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import {AiOutlineUser} from 'react-icons/ai';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='navbar' bg='dark' variant='dark'>
      <Navbar.Brand>
        <a href='/'>Shopping Cart</a>
      </Navbar.Brand>
      <Navbar.Text>
        <FormControl
          style={{width:500}}
          placeholder='Enter here'
          className='header-form'
        />
        <button className='btn-nav'>Live Bids</button>
        <button className='btn-icon'><AiOutlineUser marginRIght={25} fontSize={25} /></button>
      </Navbar.Text>
    </Navbar>
  );
};

export default Header;
