import React from 'react'
import Item from "../ItemsDetals/Items";
import { ladiesTShirtsItems } from '../../ItemsData/ItemData';
import ItemDetails from "../ItemsDetals/ItemDetails";

const LadiesTShirts = () => {
    const baseUrl = "https://shop.polymer-project.org/esm-bundled/";
  return (
    <div>
         <div className="flex flex-col items-center gap-6 mb-12 justify-center ">
            <img
              className="h-full w-full"
              src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"
              alt="Ladies T-Shirts"
            />
            <h1>Ladies T-Shirts</h1>
            <Item baseUrl={baseUrl} items={ladiesTShirtsItems} />
           <ItemDetails baseUrl={baseUrl} items={ladiesTShirtsItems} />
          </div>
    </div>
  )
}

export default LadiesTShirts