import React from 'react';
import { Nav, Button } from 'react-bootstrap';

function Cart({ cartCount }) {
  const buttonStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    fontWeight: 'bold',
    border: 'none',
    marginRight: '10px',
    padding: '5px 10px',
  };

  return (
    <Nav className="justify-content-end">
      <Button variant="light" style={buttonStyle}>
        Cart {cartCount}
      </Button>
    </Nav>
  );
}

export default Cart;
