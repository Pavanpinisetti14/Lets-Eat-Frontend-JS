// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { useState } from "react";
// import AccountSettings from "./AccountSettings";
// const Header = () => {
//   const [show, setShow] = useState(false);
//   const clicked = () => {
//     setShow(!show);
//   };
//   return (
//       <header className="top-0 z-50 bg-background shadow-sm ">
//         <div className="container flex items-center justify-between py-4 px-4 md:px-6">
//           <Link className="text-2xl font-bold">Delicious Bites</Link>
//           <nav className="flex items-center gap-4">
//             <Link className="text-lg font-medium hover:underline underline-offset-4">
//               Home
//             </Link>
//             <Link className="text-lg font-medium hover:underline underline-offset-4">
//               Menu
//             </Link>
//             <Link className="text-lg font-medium hover:underline underline-offset-4">
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <div className="relative">
//               <button
//                 className="rounded-full focus:outline-none text-3xl"
//                 onClick={clicked}
//               >
//                 <MdOutlineAccountCircle />
//                 {show && <AccountSettings />}
//               </button>
//             </div>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//               Sign In
//             </button>
//             <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </header>
//   );
// };

// export default Header;

//stickyHeader

// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { useState } from "react";
// import AccountSettings from "./AccountSettings";

// const Header = () => {
//   const [show, setShow] = useState(false);

//   const clicked = () => {
//     setShow(!show);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
//         <Link className="text-2xl font-bold">Delicious Bites</Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link className="text-lg font-medium hover:underline underline-offset-4">
//             Home
//           </Link>
//           <Link className="text-lg font-medium hover:underline underline-offset-4">
//             Menu
//           </Link>
//           <Link className="text-lg font-medium hover:underline underline-offset-4">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <button
//               className="rounded-full focus:outline-none text-3xl"
//               onClick={clicked}
//             >
//               <MdOutlineAccountCircle />
//             </button>
//             {show && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg md:w-56 sm:w-full sm:left-0">
//                 <AccountSettings />
//               </div>
//             )}
//           </div>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//             Sign In
//           </button>
//           <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
//             Sign Up
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       <div className="md:hidden flex justify-between items-center px-4 py-2">
//         <Link className="text-lg font-medium hover:underline underline-offset-4">
//           Home
//         </Link>
//         <Link className="text-lg font-medium hover:underline underline-offset-4">
//           Menu
//         </Link>
//         <Link className="text-lg font-medium hover:underline underline-offset-4">
//           Contact
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { useState } from "react";
// import AccountSettings from "./AccountSettings";

// const Header = () => {
//   const [show, setShow] = useState(false);

//   const clicked = () => {
//     setShow(!show);
//   };

//   return (
//     <header className="top-0 z-50 bg-background shadow-sm">
//       <div className="container flex items-center justify-between py-4 px-4 md:px-6">
//         <Link to="/" className="text-2xl font-bold">
//           Delicious Bites
//         </Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link to="/" className="text-lg font-medium hover:underline underline-offset-4">
//             Home
//           </Link>
//           <Link to="/menu" className="text-lg font-medium hover:underline underline-offset-4">
//             Menu
//           </Link>
//           <Link to="/contact" className="text-lg font-medium hover:underline underline-offset-4">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <button
//               className="rounded-full focus:outline-none text-3xl"
//               onClick={clicked}
//             >
//               <MdOutlineAccountCircle />
//             </button>
//             {show && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg md:w-56 sm:w-full sm:left-0">
//                 <AccountSettings />
//               </div>
//             )}
//           </div>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-md hidden md:block">
//             Sign In
//           </button>
//           <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hidden md:block">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { useState } from "react";
// import AccountSettings from "./AccountSettings";

// const Header = () => {
//   const [show, setShow] = useState(false);

//   const clicked = () => {
//     setShow(!show);
//   };

//   return (
//     <header className="top-0 z-50 bg-background shadow-sm">
//       <div className="container flex items-center justify-between py-4 px-4 md:px-6">
//         <Link to="/" className="text-2xl font-bold">
//           Delicious Bites
//         </Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link to="/" className="text-lg font-medium hover:underline underline-offset-4">
//             Home
//           </Link>
//           <Link to="/menu" className="text-lg font-medium hover:underline underline-offset-4">
//             Menu
//           </Link>
//           <Link to="/contact" className="text-lg font-medium hover:underline underline-offset-4">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <button
//               className="rounded-full focus:outline-none text-3xl"
//               onClick={clicked}
//             >
//               <MdOutlineAccountCircle />
//             </button>
//             {show && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg md:w-56 sm:w-full sm:left-0">
//                 <AccountSettings />
//               </div>
//             )}
//           </div>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
//             Sign In
//           </button>
//           <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import { Link } from "react-router-dom";
// import { MdOutlineAccountCircle } from "react-icons/md";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa"; // Import the hamburger icon
// import AccountSettings from "./AccountSettings";

// const Header = () => {
//   const [show, setShow] = useState(false);
//   const [showMenu, setShowMenu] = useState(false); // State for mobile menu

//   const toggleAccountSettings = () => {
//     setShow(!show);
//   };

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <header className="top-0 z-50 bg-background shadow-sm">
//       <div className="container flex items-center justify-between py-4 px-4 md:px-6">
//         <Link to="/" className="text-2xl font-bold">
//           Delicious Bites
//         </Link>
//         <nav className="hidden md:flex items-center gap-4">
//           <Link to="/" className="text-lg font-medium hover:underline underline-offset-4">
//             Home
//           </Link>
//           <Link to="/menu" className="text-lg font-medium hover:underline underline-offset-4">
//             Menu
//           </Link>
//           <Link to="/contact" className="text-lg font-medium hover:underline underline-offset-4">
//             Contact
//           </Link>
//         </nav>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <button
//               className="rounded-full focus:outline-none text-3xl"
//               onClick={toggleAccountSettings}
//             >
//               <MdOutlineAccountCircle />
//             </button>
//             {show && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
//                 <AccountSettings />
//               </div>
//             )}
//           </div>
//           <button
//             className="md:hidden text-3xl focus:outline-none"
//             onClick={toggleMenu}
//           >
//             <FaBars />
//           </button>
//           {showMenu && (
//             <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
//               <div className="py-2">
//                 <button className="px-4 py-2 text-sm w-full">Sign In</button>
//                 <button className="px-4 py-2 text-sm w-full">Sign Up</button>
//                 {console.log("Sign Up")}
//               </div>
//             </div>
//           )}
//           <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md">
//             Sign In
//           </button>
//           <button className="hidden md:block px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon
import AccountSettings from "./AccountSettings";
import { BsCart3 } from "react-icons/bs";
// import Cart from "./Cart";
// import "./Common.css";
const Header = ({cartCount,cartItems}) => {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showcart, SetShowCart] = useState(false);
  const toggleAccountSettings = () => {
    setShow(!show);
    setShowMenu(false);
  };
  const cartpopup =() =>{
    SetShowCart(showcart === false? true:false)
    // SetShowCart(true);
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShow(false);
  };
  return (
    <header className="top-0 z-50 bg-background shadow-sm sticky">
      <div className="container flex items-center justify-between py-4 px-4 mx-auto md:px-6">
        <Link to="/" className="text-2xl font-bold">
          Let's Eat
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          {/* <Link
            to="/"
            className="text-lg font-medium hover:underline underline-offset-4"
          >
            Home
          </Link> */}
          <a href="#menusection" className="text-lg font-medium hover:underline underline-offset-4">Menu</a>
          <a href="#" className="text-lg font-medium hover:underline underline-offset-4">Help</a>
          <a href="#footer" className="text-lg font-medium hover:underline underline-offset-4">Contact</a>
          <a href="#" className="text-lg font-medium hover:underline underline-offset-4">Cart</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer">
            <BsCart3 className="w-7 h-7 relative top-3" onClick={cartpopup}/>
            <span className="relative bottom-8 left-2">{cartItems.length}</span>
          </div>
          
          <div className="relative">
            <button
              className="rounded-full focus:outline-none text-3xl"
              onClick={toggleAccountSettings}
            >
              <MdOutlineAccountCircle />
            </button>
            {show && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <AccountSettings />
              </div>
            )}
          </div>
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
          {showMenu && (
            <div className="absolute top-16 right-4 w-28 bg-white rounded-md shadow-lg z-20">
              <div className="py-2">
                <button className="block px-4 py-2 text-sm w-full hover:bg-blue-500 hover:text-white rounded-md">
                  Sign In
                </button>
                <button className="block px-4 py-2 text-sm w-full hover:bg-blue-500 hover:text-white rounded-md">
                  Sign Up
                </button>
              </div>
            </div>
          )}
          <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-md">
            Sign In
          </button>
          <button className="hidden md:block px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      { showcart && (
            <div className="fixed bg-black bg-opacity-50 inset-0 flex items-center justify-center z-10">
              <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <div>
                <button 
                  onClick={() => SetShowCart(false)} // Assuming setShowCart is your state setter
                  className="float-right"
                >
                  X
                </button>
                <br></br>
                <div>
                <h2>Cart</h2>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                  ))}
                </ul>
                </div>
                </div>
              </div>
          </div>
          )}
    </header>
  );
};

export default Header;
