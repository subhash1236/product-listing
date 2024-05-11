import React, { useState } from 'react';

const ShoppingCart = () => {
  // State variable to store items in the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex(item => item.id === product.id);
    if (itemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div>
      {/* Display the items in the cart */}
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>{item.title} - ${item.price} x {item.quantity}</p>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Display the total price */}
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
