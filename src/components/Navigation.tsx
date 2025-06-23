
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-950/10 backdrop-blur-xl backdrop-saturate-150 z-50 border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-orbitron font-bold text-xl hover:text-green-400 transition-colors duration-300 drop-shadow-lg">
            Vishal Chahar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 drop-shadow-md ${
                    isActive(item.path)
                      ? "text-green-400 border-b-0 border-green-400 shadow-green-400/30"
                      : "text-gray-200 hover:text-green-400 hover:backdrop-blur-sm"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-green-400 p-2 transition-colors duration-300 backdrop-blur-sm rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950/20 backdrop-blur-xl backdrop-saturate-150 border-t border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                  isActive(item.path)
                    ? "text-green-400 bg-white/5 backdrop-blur-sm shadow-green-400/20"
                    : "text-gray-300 hover:text-green-400 hover:bg-white/5 hover:backdrop-blur-sm"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
