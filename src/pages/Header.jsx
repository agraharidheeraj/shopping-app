import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../CartContext/CartContext';

const Header = () => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);

  const activeClassName = {
    borderBottom: '2px solid black',
  };

  return (
    <div>
      <div className="flex items-center justify-center  p-4 text-black">
        <Link to="/">
          <div className="text-xl font-bold tracking-widest ml-auto cursor-pointer">SHOP</div>
        </Link>
        <Link to="/cart">
          <div className="absolute right-8 text-xl">
            <FaShoppingCart />
            <span className='absolute top-[-1rem] left-3 bg-gray-700 text-white text-sm font-medium rounded-full px-2 py-[2px] '>{totalQuantity}</span>
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="block sm:hidden">
            <svg
              className="w-6 h-6 mt-[-3rem]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
        </div>
      </div>
  {/* Four text items for desktop */}
  <div className="hidden sm:flex justify-center gap-8 mt-4 mb-2 p-4">
        <NavLink to="/mens-outerwear" className="nav-link" activeClassName="active-link">
          Men's Outerwear
        </NavLink>
        <NavLink to="/ladies-outerwear" className="nav-link" activeClassName="active-link">
          Ladies Outerwear
        </NavLink>
        <NavLink to="/mens-t-shirts" className="nav-link" activeClassName="active-link">
          Men's T-Shirts
        </NavLink>
        <NavLink to="/ladies-t-shirts" className="nav-link" activeClassName="active-link">
          Ladies T-Shirts
        </NavLink>
      </div>

      {/* Menu for mobile */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-12 right-0 w-full bg-white shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            <NavLink to="/mens-outerwear" className="nav-link" activeClassName="active-link" onClick={toggleMenu}>
              Men's Outerwear
            </NavLink>
            <NavLink to="/ladies-outerwear" className="nav-link" activeClassName="active-link" onClick={toggleMenu}>
              Ladies Outerwear
            </NavLink>
            <NavLink to="/mens-t-shirts" className="nav-link" activeClassName="active-link" onClick={toggleMenu}>
              Men's T-Shirts
            </NavLink>
            <NavLink to="/ladies-t-shirts" className="nav-link" activeClassName="active-link" onClick={toggleMenu}>
              Ladies T-Shirts
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
