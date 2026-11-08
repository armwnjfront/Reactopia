import { Link } from "react-router";
import { useState } from "react";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#111114] px-6 py-4 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-black tracking-wide"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <FaShoppingBag className="text-lg" />
          </div>

          <span>
            SHOP<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            to="/"
            className="group relative rounded-lg px-4 py-2 text-[16px] font-medium text-gray-400 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            Home
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-5" />
          </Link>

          <Link
            to="/about"
            className="group relative rounded-lg px-4 py-2 text-[16px] font-medium text-gray-400 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            About
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-5" />
          </Link>

          <Link
            to="/Products"
            className="group relative rounded-lg px-4 py-2 text-[16px] font-medium text-gray-400 transition duration-300 hover:bg-white/5 hover:text-white"
          >
            Products
            <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-5" />
          </Link>

          <Link
            to="/LoginPage"
            className="ml-3 rounded-lg border border-blue-500/50 bg-blue-600 px-5 py-2 text-[16px] font-semibold transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-3 text-blue-400 transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-blue-500/10 hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-blue-500/10 hover:text-blue-400"
          >
            About
          </Link>

          <Link
            to="/Products"
            onClick={() => setIsOpen(false)}
            className="rounded-lg px-4 py-3 text-gray-300 transition hover:bg-blue-500/10 hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/LoginPage"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold transition hover:bg-blue-500"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
