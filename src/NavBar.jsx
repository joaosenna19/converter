import { useState } from "react";
import NavItem from "./NavItem";
import ToggleButton from "./ToggleButton";

const NavBar = ({ onNavItemClick }) => {
  const navItems = ["Weight", "Distance", "Temperature"];
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Converter
          </span>
        </a>
        <ToggleButton onToggle={toggleNav} toggled={isNavOpen} />
        <div
          className={`w-full md:block md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                title={item}
                onNavItemClick={onNavItemClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
