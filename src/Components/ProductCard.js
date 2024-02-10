import React, { useState } from 'react';

function ProductCard({ data = {}, handleAddToCart = () => {}, isAddedToCart = {}, handleQuantity = () => {}, handleRemove = () => {} }) {
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  const handleAddToCartClick = () => {
    handleAddToCart(data);
    setShowRemoveButton(true);
  };

  const handleRemoveClick = () => {
    handleRemove(data?.id);
    setShowRemoveButton(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        {showRemoveButton && (
          <button className="remove-button" onClick={handleRemoveClick}>
            Remove
          </button>
        )}
      </div>
      <img src={data?.images} alt={data?.title} />
      <h5>{data?.title}</h5>
      <p>{data?.price}</p>
      <p>{data?.brand}</p>
      <p>{data?.category}</p>
      {isAddedToCart?.id ? (
        <div>
          <button onClick={() => handleQuantity(data?.id, 'decrement')}>-</button>
          <p>Product Quantity: {isAddedToCart.quantity}</p>
          <button onClick={() => handleQuantity(data?.id, 'increment')}>+</button>
        </div>
      ) : (
        <button onClick={handleAddToCartClick}>Add to cart</button>
      )}
    </div>
  );
}

export default ProductCard;
