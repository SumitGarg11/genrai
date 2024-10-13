// import Image from 'next/image'
// import React from 'react'
// import { IoIosHome } from "react-icons/io";
// import { RiStackOverflowFill } from "react-icons/ri";
// import { GiUpgrade } from "react-icons/gi";
// import { FiLogOut } from "react-icons/fi";
// import MSideBar from './MSideBar';

// function SideBar() {
//   const Menu = [
//     {
//       id: 1,
//       name: "Home",
//       icon: <IoIosHome />,
//       path: "/dashboard"
//     },
//     {
//       id: 2, // Changed the id to avoid duplicates
//       name: "Explore",
//       icon: <RiStackOverflowFill />,
//       path: "/explore"
//     },
//     {
//       id: 3,
//       name: "Upgrade",
//       icon: <GiUpgrade />,
//       path: "/upgrade"
//     },
//     {
//       id: 4,
//       name: "Logout",
//       icon: <FiLogOut />,
//       path: "/logout"
//     }
//   ];

//   return (
//     <div className='fixed h-full md:w-64 p-5 shadow-md'>
//       <Image src={'/genrai.png'} width={200} height={150} alt="Logo" />
//       <hr className='my-5' />
//       <ul>
//         {Menu.map((item, index) => (
//           <li key={item.id} className="flex  items-center p-3 gap-2  cursor-pointer text-gray-600 hover:bg-gray-100  hover:text-black rounded-lg ">
//             <div className='text-2xl'>{item.icon}</div>
//             <h2>{item.name}</h2>
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }

// export default SideBar;


import Image from 'next/image';
import React from 'react';
import { IoIosHome } from "react-icons/io";
import { RiStackOverflowFill } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import MSideBar from './MSideBar';  // Assuming you already have a mobile sidebar component

function SideBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <IoIosHome />,
      path: "/dashboard"
    },
    {
      id: 2,
      name: "Explore",
      icon: <RiStackOverflowFill />,
      path: "/explore"
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <GiUpgrade />,
      path: "/upgrade"
    },
    {
      id: 4,
      name: "Logout",
      icon: <FiLogOut />,
      path: "/logout"
    }
  ];

  return (
    <>
      {/* MSideBar - Visible only on small screens (sm and below) */}
      <div className="block md:hidden">
        <MSideBar Menu={Menu} />
      </div>

      {/* SideBar - Visible only on medium screens and up (md and above) */}
      <div className="hidden md:block fixed h-full md:w-64 p-5 shadow-md">
        <Image src={'/genrai.png'} width={200} height={150} alt="Logo" />
        <hr className='my-5' />
        <ul>
          {Menu.map((item) => (
            <li 
              key={item.id} 
              className="flex items-center p-3 gap-2 cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-black rounded-lg"
            >
              <div className='text-2xl'>{item.icon}</div>
              <h2>{item.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;

