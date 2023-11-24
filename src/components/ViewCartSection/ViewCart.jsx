import React from 'react';
import { useCart } from '../../CartContext/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart(); 


  const handleDeleteItem = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: { index } });
  };

  const handleIncreaseQuantity = (index) => {
  
  };

  const handleDecreaseQuantity = (index) => {

  };

  const calculateTotalAmount = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className=' w-full mb-[14rem]'>
      <h2 className="text-2xl font-semibold mb-12 text-center mt-12 ">Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item, index) => (
            <div key={index} className="border p-4  items-center mb-4 w-[80%] m-auto flex justify-between">
                <div className='flex items-center'>
                <img
                src={`https://shop.polymer-project.org/esm-bundled/${item.largeImage}`}
                alt={item.title}
                className="w-16 h-16 object-cover "
              />
               <p className="text-sm font-semibold">{item.title}</p>
                </div>
              

              <div className="flex justify-between gap-12  items-center">
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
          <div className="mt-8 flex items-center justify-end mr-[9rem] gap-6">
            <p className="text-md mt-4 font-semibold">Total Amount: <span className='ml-8 mr-12'>${calculateTotalAmount()}</span></p>
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
