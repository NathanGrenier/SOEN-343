import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  dropdownItems?: NavItem[];
}

interface NavbarProps {
  navItems: NavItem[];
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, logo }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string | null) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-4 fixed top-0 z-10 w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      <div
        className={`flex-col md:flex-row md:flex md:space-x-4 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}
      >
        {navItems.map((item) => (
          <div
            className="relative"
            key={item.name}
            onMouseEnter={() => toggleDropdown(item.name)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link
              to={item.path}
              className="text-black hover:bg-mainGreen px-4 py-2 rounded"
            >
              {item.name}
            </Link>
            {openDropdown === item.name && item.dropdownItems && (
              <ul className="absolute left-0 bg-white text-black mt-2 shadow-lg z-10">
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.name}>
                    <Link
                      to={dropdownItem.path}
                      className="block px-4 py-2 hover:bg-mainGreen"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
