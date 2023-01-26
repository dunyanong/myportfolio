import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import FullScreenNavbar from '../components/FullScreenNavbar';
import Link from "next/link";
import profilePic from '../public/dunyanturkey.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dun Yan</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />   
      </Head>

      <main className="bg-white px-10 lg:px-40 dark:bg-gray-900 py-6">
        <section className="min-h-screen">
        <div className={darkMode ? "dark" : ""}>
          <nav className="navbar py-5 mb-12">
          <div className="navbar-start md:hidden">            
              <FullScreenNavbar />
          </div>
          <div className="navbar-start hidden md:flex">
              <ul className="flex justify-between gap-5">
              <li>
                  <Link href="/" legacyBehavior>
                  <a className="text-lg font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Home</a>
                  </Link> 
              </li>
              <li>
                  <Link href="/about" legacyBehavior>
                  <a className="text-lg font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">About</a>
                  </Link> 
              </li>
              <li>
                  <Link legacyBehavior href="/blogs">
                  <a className="text-lg font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Blogs</a>
                  </Link>               
              </li>
              </ul>
          </div>
          <div className="navbar-end">
              <ul className="flex items-center">
                <li><BsFillMoonStarsFill className="cursor-pointer text-slate-600 dark:text-slate-200" onClick={() => setDarkMode(!darkMode)}/></li>
              </ul>
          </div>
          </nav>
          </div>          
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-cyan-600 dark:text-cyan-500 font-medium md:text-6xl">Dun Yan</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-800 dark:text-slate-200 typewriter">
              Full-Stack Dev
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-l max-w-xl mx-auto dark:text-slate-200">Hi, I'm Dun Yan, a developer based in Kuala Lumpur. I have expertise in NextJS, JavaScript, ReactJS, and Tailwind, and also have experience with NodeJS and Express. Looking for new challenges and opportunities to grow as a developer.</p>
            <p className="text-md leading-8 text-gray-800 md:text-l max-w-xl mx-auto dark:text-slate-200">To contact me👇</p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-200">
            <a href="https://twitter.com/dun_yan_" target="_blank"><AiFillTwitterCircle /></a>
            <a href="https://www.linkedin.com/in/dun-yan-ong-b26aa5244/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/dunyanong" target="_blank"><AiFillGithub /></a>
          </div>

          <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={profilePic} alt="image" priority/>
          </div>
        </section>

        {/*Projects List*/}
        <Projects />

        {/*Footer*/}
        <Footer />
      </main>
    </div>
  )
}
