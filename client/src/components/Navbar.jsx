import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { Home, Info, Briefcase, Phone, LogIn, UserPlus, LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Yash
          </NavLink>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Navigation */}
          <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-1`}>
            <ul className="md:flex md:space-x-1 text-center md:text-left">
              <NavItem to="/" icon={<Home className="w-4 h-4" />}>Home</NavItem>
              <NavItem to="/about" icon={<Info className="w-4 h-4" />}>About</NavItem>
              <NavItem to="/service" icon={<Briefcase className="w-4 h-4" />}>Services</NavItem>
              <NavItem to="/contact" icon={<Phone className="w-4 h-4" />}>Contact</NavItem>

              {isLoggedIn ? (
                <NavItem to="/logout" icon={<LogOut className="w-4 h-4" />}>Logout</NavItem>
              ) : (
                <>
                  <NavItem to="/register" icon={<UserPlus className="w-4 h-4" />}>Register</NavItem>
                  <NavItem to="/login" icon={<LogIn className="w-4 h-4" />}>Login</NavItem>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

// NavItem component for consistent styling
const NavItem = ({ to, children, icon }) => (
  <li className="md:inline-block block border-b md:border-none">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
          isActive
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  </li>
);

export default Navbar;
