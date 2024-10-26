import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string; // Make path required
  dropdownItems?: NavItem[];
}

interface NavbarProps {
  navItems: NavItem[];
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, logo }) => {
  return (
    <nav className=" flex items-center bg-white p-4">
     
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mr-4" /> 
     
        <div className="flex space-x-4 items-center ml-auto">
          {navItems.map((item) => {
            const [isDropdownOpen, setIsDropdownOpen] = useState(false);

            const handleDropdownToggle = () => {
              setIsDropdownOpen(!isDropdownOpen);
            };

            if (item.dropdownItems) {
              return (
                <div
                  className="relative group"
                  key={item.name}
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownToggle} 
                >
                  <Link
                    to={item.path} 
                    className="text-black hover:bg-mainGreen px-4 py-2 rounded"
                  >
                    {item.name}
                  </Link>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 bg-white text-black mt-2 shadow-lg z-10">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            to={dropdownItem.path}
                            className="block px-4 py-2 hover:mainGreen"
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path} // Make sure to use the path here as well
                className="text-black hover:bg-mainGreen px-4 py-2 rounded"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
