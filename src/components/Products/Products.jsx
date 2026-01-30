import React from "react";
import { Outlet , NavLink } from "react-router-dom";

function Products() {
  return (
    <div >
      <h1 className="text-sm font-bold text-center mb-8 mt-10 p-2 w-50 mx-auto bg-[#5265b4]   sm:text-lg md:text-xl">Products</h1>

      <ul className="flex justify-around items-center bg-[#1188d7] p-3 m-4 w-4/5 mx-auto ">

        <li className="border-2 bg-blue-500 p-2 hover:bg-[#0b6ab4] text-white rounded-lg text-xs sm:text-lg ">
          <NavLink to="product1"> Product 1</NavLink>
        </li>
        <li className="border-2 bg-blue-500 p-2 hover:bg-[#0b6ab4] text-white rounded-lg text-xs sm:text-lg">
          <NavLink to="product2"> Product 2</NavLink>
        </li>
        <li className="border-2 bg-blue-500 p-2 hover:bg-[#0b6ab4] text-white rounded-lg text-xs sm:text-lg">
          <NavLink to="product3"> Product 3</NavLink>
        </li>

      </ul>

      <Outlet />
    </div>
  );
}

export default Products;
