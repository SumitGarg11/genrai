"use client"
import React, { useState } from 'react';
import { IoIosHome } from "react-icons/io";
import { RiStackOverflowFill } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai"; // Importing a menu icon

function MSideBar({ Menu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev); // Toggle the menu open/close state
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white shadow-md p-4 flex flex-col items-center">
      {/* Menu Icon Button */}
      <div onClick={toggleMenu} className="cursor-pointer text-2xl">
        <AiOutlineMenu />
      </div>

      {/* Conditionally render the menu items */}
      {isMenuOpen && (
        <div className="flex justify-between w-full mt-2">
          {Menu.map((item) => (
            <div key={item.id} className="flex flex-col items-center cursor-pointer">
              <div className="text-2xl">{item.icon}</div>
              <h2 className="text-xs">{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MSideBar;
