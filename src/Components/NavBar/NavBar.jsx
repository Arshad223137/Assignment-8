import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const navs = [
    <li key="home">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "active-Link nav-link" : "nav-link"
        }
      >
        Home
      </NavLink>
    </li>,
    <li key="listedBooks">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-Link nav-link" : "nav-link"
        }
        to={"/listedBooks"}
      >
        Listed Books
      </NavLink>
    </li>,
    <li key="pagesRead">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-Link nav-link" : "nav-link"
        }
        to={"/pagesRead"}
      >
        Pages to Read
      </NavLink>
    </li>,
  ];

  return (
    <div className="my-5">
      <div className="navbar bg-base-100">
        <div className="lg:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              {navs}
              <div className="flex justify-between mt-2 ">
                <a className="btn text-white  bg-green-500">Sign In</a>
                <a className="btn text-white  bg-blue-500">Sign Up</a>
              </div>
            </ul>
          </div>
          <a className="text-2xl font-bold ml-28  lg:text-4xl lg:ml-0">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navs}</ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          <a className="btn text-white text-xl bg-green-500">Sign In</a>
          <a className="btn text-white text-xl bg-blue-500">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
