import Link from "next/link";
import FullScreenNavbar from "./FullScreenNavbar";

const Navbar = () => {

  return (
    <nav className="navbar py-5 mb-12">
      <div className="navbar-start  md:flex">
        <ul className="flex justify-between gap-5">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-base  font-semibold my-4 text-gray-300 hover:text-gray-100">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work" legacyBehavior>
              <a className="text-base  font-semibold my-4 text-gray-300 hover:text-gray-100">
                Work
              </a>
            </Link>
          </li>       
          <li>
            <Link legacyBehavior href="/blogs">
              <a className="text-base font-semibold my-4 text-gray-300 hover:text-gray-100">
                Blog
              </a>
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex mt-4 space-x-6 md:mt-0">
          <a href="https://www.linkedin.com/in/dunyan/" className="text-white hover:text-gray-400" target="_blank">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.292c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.292h-3v-5.792c0-1.381-.025-3.156-1.924-3.156-1.924 0-2.221 1.503-2.221 3.054v5.894h-3v-10h2.839v1.367h.039c.396-.75 1.362-1.544 2.804-1.544 3 0 3.554 1.975 3.554 4.543v5.634z" />
            </svg>
            <span className="sr-only">LinkedIn account</span>
          </a>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
