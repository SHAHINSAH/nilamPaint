import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Colours", path: "/colors" },
    { name: "Services", path: "/services" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Nilam Color World"
              className="h-12 md:h-14 w-auto"
            />

            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">
                Nilam Color World
              </h1>

              <p className="hidden md:block text-xs text-gray-500">
                Premium Paint Store
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">

            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-red-600 transition"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">

            <ul className="flex flex-col py-4">

              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 ${
                        isActive
                          ? "text-red-600 font-semibold"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
}