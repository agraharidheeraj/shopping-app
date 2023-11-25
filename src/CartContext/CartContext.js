import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

// Initial state for the cart
const initialState = {
  items: [],
  cartCount: 0,
};

// Define the context
export const CartContext = createContext();

// Define the reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          cartCount: state.cartCount + action.payload.quantity,
        };
      case 'LOAD_CART':
        return {
          ...state,
          ...action.payload,
        };
      case 'DELETE_ITEM':
        const updatedItems = [...state.items];
        updatedItems.splice(action.payload.index, 1);
        return {
          ...state,
          items: updatedItems,
          cartCount: state.cartCount - 1, 
        };

  
      default:
        return state;
    }
  };
  

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };


  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      dispatch({ type: 'LOAD_CART', payload: parsedCart });
    }
    setIsLoaded(true); 
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }, [state, isLoaded]);

  console.log('Cart State:', state);

  return (
    <CartContext.Provider value={{ state,dispatch, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
