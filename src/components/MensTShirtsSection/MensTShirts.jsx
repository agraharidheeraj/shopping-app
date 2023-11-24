import React from 'react';
import Item from "../ItemsDetals/Items";
import ItemDetails from "../ItemsDetals/ItemDetails";
import { mensTShirtsItems } from '../../ItemsData/ItemData';

const MensTShirts = () => {
    const baseUrl = "https://shop.polymer-project.org/esm-bundled/";
  return (
    <div>
         <div className="flex flex-col items-center gap-6 mb-12 justify-center ">
            <img
              className="h-full w-full"
              src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"
              alt="Men's T-Shirts"
            />
            <h1>Men's T-Shirts</h1>
            <Item baseUrl={baseUrl} items={mensTShirtsItems} />
           <ItemDetails baseUrl={baseUrl} items={mensTShirtsItems} />
          </div>
    </div>
  )
}

export default MensTShirts