import { useState } from "react";
import { menuData } from "../../data/headerData";
export default function Header() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (clickedId: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        active: item.id === clickedId,
      }))
    );
    setIsMobileMenuOpen(false);
  };

  return (
    <header className=" shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-bold text-light">Brand</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                  className="relative px-3 py-2 text-[15px] font-montserrat text-light hover:text-light transition-colors duration-200"
                >
                  {item.name}
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-light transition-all duration-300 ease-out ${
                      item.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.id);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    item.active
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
