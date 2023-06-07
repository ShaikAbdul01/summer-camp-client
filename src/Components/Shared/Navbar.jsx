import { useState } from "react";
import { FaBars, FaBraille, FaEllipsisV, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <Link to="/" className="text-2xl font-bold leading-none" >
        Artistry Academy
      </Link>
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center hover:text-blue-600 p-3  "
          onClick={handleBurgerClick}
        >
          <FaBars className="h-6 w-6"></FaBars>
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "" : "hidden"
        } absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6`}
      >
        <li>
          <Link
         to="/"
            className="text-sm  hover:text-blue-600 text-gray-500 font-bold"
          >
            Home
          </Link>
        </li>
        <li className="text-gray-300">
          <FaEllipsisV></FaEllipsisV>
        </li>
        <li>
          <Link className="text-sm " to="/instructors">
            Instructors
          </Link>
        </li>
        <li className="text-gray-300">
          <FaEllipsisV></FaEllipsisV>
        </li>
        <li>
          <Link className="text-sm  hover:text-blue-600 text-gray-500" to="/">
            Services
          </Link>
        </li>
        <li className="text-gray-300">
          <FaEllipsisV></FaEllipsisV>
        </li>
        <li>
          <Link className="text-sm  hover:text-blue-600 text-gray-500" to="/">
            Pricing
          </Link>
        </li>
        <li className="text-gray-300">
          <FaEllipsisV></FaEllipsisV>
        </li>
        <li>
          <Link className="text-sm  hover:text-blue-600 text-gray-500" to="/">
            Contact
          </Link>
        </li>
      </ul>
      <Link
        to="/singin"
        className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
      >
        Sign In
      </Link>
      <Link
        className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
     to="/"
      >
        Sign Up
      </Link>
      <div
        className={`navbar-menu relative z-50 ${isMenuOpen ? "" : "hidden"}`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" to="/">
              <FaBraille className="h-10"></FaBraille>
            </Link>
            <button
              onClick={handleCloseClick}
              className="navbar-close hover:text-blue-600"
            >
              <FaTimes className="h-6 w-6"></FaTimes>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                 to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                 to="/instructors"
                >
                  Instructors
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                 to="/"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                 to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                 to="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                to="/singin"
                className="block px-4 py-3 mb-3 md:leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
              >
                Sign in
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
             to="/"
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
