import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsFillMoonFill,
  BsFillPersonLinesFill,
  BsSunFill,
} from "react-icons/bs";

const NavBar = () => {
  // nav style (mobile or desktop)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // darkmode
  const [darkmode, setDarkmode] = useState(() => {
    // init with value of local storage
    if (
      localStorage.getItem("color-theme") === "dark" ||
      !("color-theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark");
      return true;
    } else {
      document.documentElement.classList.remove("dark");
      return false;
    }
  });

  // toggle darkmode
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        // set from light to dark
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        // set from dark to light
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      // if not set via local storage previously (local storage is empty)
    } else {
      if (document.documentElement.classList.contains("dark")) {
        // set from dark to light
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        // set from light to dark
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  return (
    <div className="fixed w-full top-0 z-50 h-[80px] flex justify-between items-center px-4 backdrop-filter backdrop-blur text-gray-700 dark:text-gray-300">
      <div className="flex items-center justify-start">
        <div>
          <p className="text-lg font-semibold mr-5 md:pl-14">Nils Wenzel</p>
        </div>
        <div className="lg:hidden flex items-center">
          <a
            href="https://www.linkedin.com/in/nils-wenzel-6b7307240/"
            className="ml-3"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/nilswenzel/" className="ml-3">
            <FaGithub />
          </a>
          <a href="mailto:nils.wenzel01@gmail.com" className="ml-3">
            <HiOutlineMail />
          </a>
          {/*
          TODO
          <a href="#" className="ml-3">
            <BsFillPersonLinesFill />
          </a>
          */}
        </div>
      </div>

      {/* menu */}
      <ul className="hidden lg:pr-14 lg:flex lg:items-center text-lg font-semibold">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Contact
          </Link>
        </li>
        <li>
          {!darkmode ? (
            <BsFillMoonFill onClick={toggleDarkmode} size={17} />
          ) : (
            <BsSunFill onClick={toggleDarkmode} size={17} />
          )}
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="lg:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-50 dark:bg-[#191a1f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active-link"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[400%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full font-medium text-gray-300"
              href="https://www.linkedin.com/in/nils-wenzel-6b7307240/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full font-medium text-gray-300"
              href="https://github.com/nilswenzel/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full font-medium text-gray-300"
              href="mailto:nils.wenzel01@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/*
          TODO
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full font-medium text-gray-300"
              href="#"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;