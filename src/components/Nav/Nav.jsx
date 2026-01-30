import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex gap-8 justify-center items-center px-4 py-8 bg-gray-800 text-white text-2xl shadow-xl shadow-cyan-500/50 mb-2">
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
