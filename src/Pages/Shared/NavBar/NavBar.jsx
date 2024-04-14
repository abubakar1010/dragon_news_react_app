import React, { useContext } from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const NavBar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const {user,logout} = useContext(AuthContext)

  const handleLogout = () => {

    logout()
    .then()
    .catch( error => console.log(error))
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/"} className=" no-underline text-[#706F6F] flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className=" no-underline text-[#706F6F] flex items-center">
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink className=" no-underline text-[#706F6F] flex items-center">
          Career
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="w-full my-12">
        <nav className="">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              Material Tailwind
            </Typography>
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-x-1">
                {
                  user? 
                  
                  <button onClick={handleLogout} className=" text-white border-none outline-none bg-[#D72050] px-6 py-2 rounded-lg text-lg font-medium">
                    LogOut
                  </button>
                  :
                  <Link to={"/login"}>
                  <button className=" text-white border-none outline-none bg-[#D72050] px-6 py-2 rounded-lg text-lg font-medium">
                    Log In
                  </button>
                </Link>

                }
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <button className=" bg-cyan-600 px-4 py-2 rounded-lg text-lg font-medium">
                Log In
              </button>
            </div>
          </MobileNav>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
