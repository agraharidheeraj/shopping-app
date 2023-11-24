import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTimes } from "react-icons/fa";

const CartPopup = (props) => {
    const { isCartOpen, onClose } = props;
  
    const handleCloseCart = () => {
      onClose();
    };
  
    if (!isCartOpen) {
      return null;
    }
  
  return (
    <div className={`cart-popup ${isCartOpen ? "open" : ""} fixed top-20 right-4 bg-white border border-gray-300 p-4 w-80  shadow-md`} >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">ADD TO CART</h3>
        <button onClick={handleCloseCart} className="text-gray-600">
          <FaTimes />
        </button>
      </div>

    
      <div className="flex justify-between mt-4">
      <Link to="/cart">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md mr-2">
          View Cart
        </button>
        </Link>
        <button className="bg-green-500 flex items-center text-white px-4 py-2 rounded-md">
          Checkout <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CartPopup;
