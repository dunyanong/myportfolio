import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { NotableProjects } from '../components/Projects/NotableProjects';
import { MiniProjects } from '../components/Projects/MiniProjects';
import Footer from '../components/Footer';
import FullScreenNavbar from '../components/FullScreenNavbar';
import Link from "next/link";
import profilePic from '../public/dunyanturkey.png';
import Skills from '../components/Skills';

// Project Dataset
import notableProjectData  from '../data/projects/NotableProjectData';
import miniProjectData from '../data/projects/MiniProjectData'
import Navbar from '../components/Navbar';

export default function Home() {
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("darkMode") || false) : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          </div> 
          <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={profilePic} alt="image" priority/>
          </div>         
          <div className="text-center py-10">            
            <h2 className="text-5xl py-2 text-cyan-600 dark:text-cyan-500 font-medium md:text-6xl">Dun Yan</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-800 dark:text-slate-200 typewriter">
              Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-l max-w-xl mx-auto dark:text-slate-200">A full-stack engineer based in Kuala Lumpur, Malaysia. I am into software development, artificial intellegence, electronics and the blockchain. I am looking for new challenges and opportunities to grow as a engineer.</p>
            <p className="text-md leading-8 text-gray-800 md:text-l max-w-xl mx-auto dark:text-slate-200">To contact me👇</p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-200">
            <a href="https://twitter.com/dun_yan_" target="_blank"><span><AiFillTwitterCircle /></span></a>
            <a href="https://www.linkedin.com/in/dun-yan-ong-b26aa5244/" target="_blank"><span><AiFillLinkedin /></span></a>
            <a href="https://github.com/dunyanong" target="_blank"><span><AiFillGithub /></span></a>
          </div>
        </section>

        {/*Skillset List*/}
        <Skills />

        {/*NotableProjects List*/}
        <NotableProjects notableProjectData={notableProjectData}/>

        {/*MiniProjects List*/}
        <MiniProjects miniProjectData={miniProjectData}/>

        {/*Footer*/}
        <Footer />
      </main>
    </div>
  )
}
