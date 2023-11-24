// Item.js
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ baseUrl, items, category }) => {
  return (
    <div className="flex flex-col gap-6 mb-12 items-center justify-center">
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div key={item.name} className="mb-[8rem]">
           <Link to={`/item/${category}/${encodeURIComponent(item.name)}`}>
                <img
                  src={`${baseUrl}${item.largeImage}`}
                  alt={item.title}
                  className="w-full h-full object-cover mb-[4rem]"
                />
              </Link>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-md font-semibold ">{item.title}</h2>
                <p className="text-gray-500 text-sm">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
    </div>
  );
};

export default Item;
