import React from 'react';
import Item from "../ItemsDetals/Items";
import {ladiesOuterwearItems} from '../../ItemsData/ItemData'
import ItemDetails from "../ItemsDetals/ItemDetails";



const LadiesOuterwear = () => {
   
    const baseUrl = "https://shop.polymer-project.org/esm-bundled/";

  return (
    <div>
         <div className="flex flex-col items-center gap-6 mb-12  justify-center">
          <img
            src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"
            alt="Ladies Outerwear"
          />
          <h1>Ladies Outerwear</h1>

          <Item baseUrl={baseUrl} items={ladiesOuterwearItems} />
           <ItemDetails baseUrl={baseUrl} items={ladiesOuterwearItems} />
        </div>
    </div>
  )
}

export default LadiesOuterwear