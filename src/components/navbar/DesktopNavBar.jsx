import React from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

function DesktopNavBar({ darkmode, toggleDarkmode }) {
    return (
        <div>
            <ul className="hidden lg:pr-14 lg:flex lg:items-center text-xl font-semibold">
                <NavBarItem name="Home" to="home" />
                <NavBarItem name="About" to="about" />
                <NavBarItem name="Education" to="education" />
                <NavBarItem name="Work" to="work" />
                <NavBarItem
                    name="Skills"
                    to="skills"
                />
                <NavBarItem
                    name="Contact"
                    to="contact"
                />
                <li className="hover:text-teal-500 p-0 mx-4">
                    {!darkmode ? (
                        <BsFillMoonFill onClick={toggleDarkmode} size={17} />
                    ) : (
                        <BsSunFill onClick={toggleDarkmode} size={17} />
                    )}
                </li>
            </ul>
        </div>
    );
}

function NavBarItem({ name, to }) {
    return (
        <li className="hover:text-teal-500 p-0 mx-4">
            <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="active-link"
            >
                {name}
            </Link>
        </li>
    );
}

export default DesktopNavBar;