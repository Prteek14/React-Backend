import React from "react";
import { Outlet , NavLink } from "react-router-dom";

function Products() {
  return (
    <div >
      <h1 className="text-2xl font-bold text-center m-2 p-3 w-50 mx-auto bg-[#5265b4]">Products</h1>
      <ul className="flex justify-around align-middle bg-[#1188d7] p-4 font-medium m-4 ">
        <li className="border-2 bg-blue-500 p-4 hover:bg-[#0b6ab4] text-white rounded-lg">
          <NavLink to="product1"> Product 1</NavLink>
        </li>
        <li className="border-2 bg-blue-500 p-4 hover:bg-[#0b6ab4] text-white rounded-lg">
          <NavLink to="product2"> Product 2</NavLink>
        </li>
        <li className="border-2 bg-blue-500 p-4 hover:bg-[#0b6ab4] text-white rounded-lg">
          <NavLink to="product3"> Product 3</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Products;
