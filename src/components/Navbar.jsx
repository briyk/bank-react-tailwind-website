import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="logo" className="h-[36px] w-[124px]" />
      <ul className="hidden flex-1 list-none items-center justify-end text-white sm:flex">
        {navLinks.map((item, i) => (
          <li
            key={item.id}
            className={`font-poppins text-[16px] font-normal ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={`${toggle ? close : menu}`}
          alt="toggle"
          onClick={() => handleToggle()}
          className="h-[28px] w-[28px] cursor-pointer object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl py-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-center justify-end text-white">
            {navLinks.map((item, i) => (
              <li
                key={item.id}
                className={`font-poppins text-[16px] font-normal ${
                  i === navLinks.length - 1 ? "mb-0" : "mb-5"
                }`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
