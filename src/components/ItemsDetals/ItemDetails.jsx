import React,{useState} from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useCart } from "../../CartContext/CartContext";
import CartPopup from "../CartPopbox/CartPopup";
import {
  mensOuterwearItems,
  ladiesOuterwearItems,
  mensTShirtsItems,
  ladiesTShirtsItems,
} from "../../ItemsData/ItemData";


const ItemDetails = () => {
  const { itemName } = useParams();
  const { addToCart } = useCart();

  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('extrasmall');

  const selectedItem = mensOuterwearItems.find(
    (item) => decodeURIComponent(item.name) === itemName
  );

  const [showPopup, setShowPopup] = useState(false);
  
  const handleAddToCart = () => {
    addToCart({ ...selectedItem, quantity: selectedQuantity, size: selectedSize });
    setShowPopup(true);
  };
  

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!selectedItem) {
    return <div></div>;
  }

  return (
    <div className="container mx-auto mt-8 mb-[8rem] mr-12">
        <Link to={`/`}>
        <FaArrowLeftLong className="absolute top-12 text-2xl" />
        </Link>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src={`https://shop.polymer-project.org/esm-bundled/${selectedItem.image}`}
            alt={selectedItem.title}
            className="w-full h-auto mt-10"
          />
        </div>
        <div className="md:w-1/2 ml-[6rem] w-1/2  ">
          <h1 className="text-2xl font-semibold mb-4">{selectedItem.title}</h1>
          <p className="text-gray-600 mb-6">${selectedItem.price.toFixed(2)}</p>


          <div className="mb-4 flex items-center border-b-2 border-gray-400 pb-2 w-3/4">
            <label htmlFor="size" className="mr-4 text-gray-500 text-sm">
              Size
            </label>
            <div className="relative flex items-center ">
              <select
                id="size"
                className="p-2 appearance-none bg-transparent border-none outline-none mr-[19rem] ml-5"
                onChange={(e) => setSelectedSize(e.target.value)}
                value={selectedSize}
              >
                <option value="extrasmall">XS</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extralarge">XL</option>
              </select>
              <div className="ml-2">
              
              <FaCaretDown className="w-4 h-4"/> 
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center border-b-2 border-gray-400 pb-2 w-3/4">
            <label htmlFor="quantity" className="mr-2 text-gray-500 text-sm">
              Quantity
            </label>
            <div className="relative flex items-center">
              <select
                id="quantity"
                className="p-2  appearance-none bg-transparent border-none outline-none mr-[19.5rem]"
                onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <div className="ml-2">

              <FaCaretDown className="w-4 h-4"/> 
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 ">Description</h2>
            <p className=" text-gray-500 text-sm w-3/4 ">
              {selectedItem.description}
            </p>
          </div>
          <button className="border-solid border-2 border-black p-2 pl-8 pr-8 mt-[5rem] " 
           onClick={handleAddToCart}
           >
            ADD TO CART
          </button>
          <CartPopup isCartOpen={showPopup} onClose={handleClosePopup}  />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
