import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-6 mb-12 items-center justify-center">
          <img
            className="h-full w-full"
            src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"
            alt="Men's Outerwear"
          />
          <h1>Men's Outerwear</h1>
          <Link to="/mens-outerwear">
            <button className="border-solid border-2 border-black p-2 pl-8 pr-8 ">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-6 mb-12  justify-center">
          <img
            src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"
            alt="Ladies Outerwear"
          />
          <h1>Ladies Outerwear</h1>
          <Link to="/ladies-outerwear">
            <button className="border-solid border-2 border-black p-2 pl-8 pr-8 ">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center gap-6 mb-12 justify-center w-1/2">
            <img
              className="h-80  max-w-fit"
              src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"
              alt="Men's T-Shirts"
            />
            <h1>Men's T-Shirts</h1>
            <Link to="/mens-t-shirts">
            <button className="border-solid border-2 border-black p-2 pl-8 pr-8 ">
              SHOP NOW
            </button>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-6 mb-12 justify-center ">
            <img
              className="h-full w-full"
              src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"
              alt="Ladies T-Shirts"
            />
            <h1>Ladies T-Shirts</h1>
            <Link to="/ladies-t-shirts">
            <button className="border-solid border-2 border-black p-2 pl-8 pr-8 ">
              SHOP NOW
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
