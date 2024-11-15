import { useState } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  dropdownItems?: NavItem[];
}


const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Get a Quote", path: "/quotation" },
  { name: "Shipping", path: "/" },
  { name: "Tracking", path: "/trackPackage" },
  { name: "Services", path: "/" },
  { name: "Request Delivery", path: "/request_delivery" },
  { name: "Support", path: "/" },
  { name: "Review", path: "/reviews" },
  { name: "About", path: "/" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string | null) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-white p-4">
      <div className="flex items-center">
        <img src={"../../public/assets/images/logo.png"} alt="Logo" className="mr-4 h-10 w-auto" />
        <button
          className="text-black focus:outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-4`}
      >
        {navItems.map((item) => (
          <div
            className="relative"
            key={item.name}
            onMouseEnter={() => toggleDropdown(item.name)}
            onMouseLeave={() => toggleDropdown(null)}
            onClick={() => toggleDropdown(item.name)}
          >
            <Link
              to={item.path}
              className="hover:bg-custom-mainGreen rounded px-4 py-2 text-black"
            >
              {item.name}
            </Link>
            {openDropdown === item.name && item.dropdownItems && (
              <ul className="absolute left-0 z-10 mt-2 bg-white shadow-lg">
                {item.dropdownItems.map((dropdownItem) => (
                  <li key={dropdownItem.name}>
                    <Link
                      to={dropdownItem.path}
                      className="hover:bg-custom-mainGreen block px-4 py-2"
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
}
