import React from 'react';
import { useCart } from '../../CartContext/CartContext';

const Cart = () => {
  const { state, addToCart, dispatch } = useCart();  // Add dispatch here
  const { items } = state;

  const handleDeleteItem = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: { index } });
  };

  const handleIncreaseQuantity = (index) => {
    const updatedItems = [...state.items];
    updatedItems[index].quantity += 1;
    addToCart({ items: updatedItems });
  };

  const handleDecreaseQuantity = (index) => {
    const updatedItems = [...state.items];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      addToCart({ items: updatedItems });
    } else {
      handleDeleteItem(index);
    }
  };

  const calculateTotalAmount = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item, index) => (
            <div key={index} className="border p-4 flex items-center mb-4">
              <img
                src={`https://shop.polymer-project.org/esm-bundled/${item.largeImage}`}
                alt={item.title}
                className="w-16 h-16 object-cover mr-4"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold">{item.title}</p>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleDecreaseQuantity(index)}
                  >
                    -
                  </button>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleIncreaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
                <p>Size: {item.size}</p>
                <p>Price: ${item.price !== undefined ? item.price.toFixed(2) : 'N/A'}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold">Total Amount: ${calculateTotalAmount()}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
