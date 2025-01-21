import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


function MobileNavBar({ nav, toggleNavBar }) {
    return (
        <div className="lg:hidden z-10">
            {/* hamburger */}
            <div onClick={toggleNavBar}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 h-screen w-screen bg-gray-50 dark:bg-[#1d1f24] flex flex-col justify-center items-center"
                }
            >
                <MobileNavBarItem
                    name="Home"
                    to="home"
                    onClick={toggleNavBar}
                />
                <MobileNavBarItem
                    name="About"
                    to="about"
                    onClick={toggleNavBar}
                />
                <MobileNavBarItem
                    name="Education"
                    to="education"
                    onClick={toggleNavBar}
                />
                <MobileNavBarItem
                    name="Work"
                    to="work"
                    onClick={toggleNavBar}
                />
                <MobileNavBarItem
                    name="Skills"
                    to="skills"
                    onClick={toggleNavBar}
                />
                <MobileNavBarItem
                    name="Contact"
                    to="contact"
                    onClick={toggleNavBar}
                />
            </ul>
        </div>
    );
}

function MobileNavBarItem({ name, to, onClick }) {
    return (
        <li className="py-6 text-4xl">
            <Link
                onClick={onClick}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
            >
                {name}
            </Link>
        </li>
    );
}

export default MobileNavBar;