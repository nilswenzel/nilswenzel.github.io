import React, { useState } from "react";

import DesktopNavBar from "./navbar/DesktopNavBar";
import MobileNavBar from "./navbar/MobileNavBar";
import Socials from "./navbar/Socials";

const NavBar = () => {
  // nav style (mobile or desktop)
  const [nav, setNav] = useState(false);
  const toggleNavBar = () => setNav(!nav);

  // darkmode
  const [darkmode, setDarkmode] = useState(() => {
    const storedTheme = localStorage.getItem("color-theme");
    const isDarkMode = storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    document.documentElement.classList.toggle("dark", isDarkMode);
    return isDarkMode;
  });
  
  // toggle dark mode
  const toggleDarkmode = () => {
    setDarkmode(prevDarkmode => {
      const newDarkmode = !prevDarkmode;
      document.documentElement.classList.toggle("dark", newDarkmode);
      localStorage.setItem("color-theme", newDarkmode ? "dark" : "light");
      return newDarkmode;
    });
  };

  return (
    <div className="fixed w-full top-0 z-50 h-[80px] flex justify-between items-center px-4 backdrop-filter backdrop-blur text-gray-700 dark:text-gray-300">
      <div className="flex items-center justify-start">
        <div>
          <p className="text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 mr-5 md:pl-14">Nils Wenzel</p>
        </div>
        <Socials/>
      </div>

      <DesktopNavBar 
        darkmode={darkmode}
        toggleDarkmode={toggleDarkmode}
      />
      
      <MobileNavBar
        nav={nav}
        toggleNavBar={toggleNavBar}
      />

    </div>
  );
};

export default NavBar;
