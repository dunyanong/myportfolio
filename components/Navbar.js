// Navbar.js

import { useEffect } from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";

import Link from "next/link";
import FullScreenNavbar from "./FullScreenNavbar";

const Navbar = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="navbar py-5 mb-12">
      <div className="navbar-start md:hidden">
        <FullScreenNavbar />
      </div>
      <div className="navbar-start hidden md:flex">
        <ul className="flex justify-between gap-5">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">
                About
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blogs">
              <a className="text-base font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">
                Blogs
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-slate-600 dark:text-slate-200 text-xl"
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;