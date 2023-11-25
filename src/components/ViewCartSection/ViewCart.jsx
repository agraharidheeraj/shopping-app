import React from 'react';
import { useCart } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Cart = () => {
  const { state, dispatch } = useCart(); 


  const handleDeleteItem = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: { index } });
  };

  const calculateTotalAmount = () => {
    return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className=' w-full mb-[14rem]'>
       <Link to={`/item/:category/:itemName`}>
        <FaArrowLeftLong className="absolute top-12 left-20 text-2xl" />
        </Link>
      <h2 className="text-2xl font-semibold mb-12 text-center mt-12 ">Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.items.map((item, index) => (
            <div key={index} className="border p-4 items-center mb-4 w-[80%] m-auto flex justify-between">
                <div className='flex items-center justify-start ml-4'>
                <img
                src={`https://shop.polymer-project.org/esm-bundled/${item.largeImage}`}
                alt={item.title}
                className="w-16 h-16 object-cover "
              />
               <p className="text-sm font-semibold">{item.title}</p>
                </div>
              

              <div className="flex justify-center  gap-12 items-center">
                  <p>Quantity: {item.quantity}</p>
               {item.size && <p>Size: {item.size}</p>}
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
            <Link to='/checkout'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Checkout
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
