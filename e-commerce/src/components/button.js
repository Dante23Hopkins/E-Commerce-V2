import React, { useState } from 'react';

const Button = ({ item, onAddToCart }) => {
  const [cartCount, setCartCount] = useState(0);
    
  const handleClick = () => {
    setCartCount(cartCount + 1);
    onAddToCart(item);
  };

  return (
    <button onClick={handleClick}>
      Add to cart ({cartCount})
    </button>
  );
};

export default Button;