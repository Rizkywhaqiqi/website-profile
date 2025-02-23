import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-900 bg-opacity-90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">Othkodylinz_</h1>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          className="lg:hidden bg-primary-800 p-2 rounded-full shadow-md transition-transform duration-300 hover:bg-primary-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="text-2xl text-white" /> : <FiMenu className="text-2xl text-white" />}
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex space-x-6 text-blue-400 text-lg font-medium">
          {menuItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`py-2 px-4 rounded-lg transition ${
                location.pathname === path ? "bg-primary-500 text-white shadow-md" : "hover:text-primary-400"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`absolute top-16 left-0 w-full bg-primary-800 rounded-b-lg shadow-lg lg:hidden transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-blue-400 items space-y-4 py-4">
          {menuItems.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`py-2 px-6 rounded-lg block transition ${
                  location.pathname === path ? "bg-primary-500 text-white shadow-md" : "hover:text-primary-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
