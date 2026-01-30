import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex gap-2 justify-center items-center p-4 bg-gray-800 text-white text-xs shadow-xl shadow-cyan-500/50 mb-2
    sm:gap-3 sm:text-lg md:gap-6 md:text-xl lg:gap-8 lg:text-2xl">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        Contact
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        Services
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/UseEffect"
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : ""
        }
      >
        UseEffect
      </NavLink>
    </nav>
  );
}

export default Nav;
