// import { NavLink, Link } from "react-router-dom";

// const Navbar = () => {
//   const links = (
//     <>
//       {/* <Link to='/'><li className="m-2">Home</li></Link>
//             <Link to='/about'><li className="m-2">about</li></Link>
//             <Link to='/readList'><li className="m-2">ReadList</li></Link> */}

//       <NavLink to={"/"}>
//         <li className="m-2">Home</li>
//       </NavLink>
//       <NavLink to={"/dashboard"}>
//         <li className="m-2">Dashboard</li>
//       </NavLink>
//       <NavLink to={"/readList"}>
//         <li className="m-2">Read List</li>
//       </NavLink>
//     </>
//   );
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">Boi Poka</a>
//         </div>
//         <div className="navbar-center hidden lg:flex ">
//           <ul className="menu menu-horizontal px-1 ">{links}</ul>
//         </div>
//         <div className="navbar-end gap-3">
//           <a className="btn btn-accent">Login</a>
//           <a className="btn btn-info">Sign Up</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-accent font-semibold" : "hover:text-accent"
        }
      >
        <li className="m-2">Home</li>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-accent font-semibold" : "hover:text-accent"
        }
      >
        <li className="m-2">Dashboard</li>
      </NavLink>
      <NavLink
        to="/readList"
        className={({ isActive }) =>
          isActive ? "text-accent font-semibold" : "hover:text-accent"
        }
      >
        <li className="m-2">Read List</li>
      </NavLink>
    </>
  );

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm ">
        {/* Left Section (Logo + Dropdown) */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo → hidden in sm, visible from md+ */}
          <a className="btn btn-ghost text-xl font-bold hidden sm:block">
            📚 Boi Poka
          </a>
        </div>

        {/* Center Links (Desktop Only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right Section (Buttons) */}
        <div className="navbar-end gap-2 sm:gap-3">
          <a className="btn btn-accent btn-sm sm:btn-md">Login</a>
          <a className="btn btn-info btn-sm sm:btn-md">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
