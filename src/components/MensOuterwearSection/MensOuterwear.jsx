import React from "react";
import Item from "../ItemsDetals/Items";
import { mensOuterwearItems } from "../../ItemsData/ItemData";
import ItemDetails from "../ItemsDetals/ItemDetails";



const MensOuterwear = () => {

  const baseUrl = "https://shop.polymer-project.org/esm-bundled/";

  return (
    <div className="flex flex-col gap-6 mb-12 items-center justify-center">
      <img
        className="h-full w-full"
        src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"
        alt="Men's Outerwear"
      />
      <h1>Men's Outerwear</h1>
  

      <Item baseUrl={baseUrl} items={mensOuterwearItems} />
      <ItemDetails baseUrl={baseUrl} items={mensOuterwearItems} />

    </div>
  );
};

export default MensOuterwear;
