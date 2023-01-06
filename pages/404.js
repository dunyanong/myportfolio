import Head from 'next/head'
import { useState } from "react";
import { useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useRouter } from 'next/router';
import FullScreenNavbar from '../components/FullScreenNavbar';

const Notfound = () => {
    const route = useRouter();
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 3000);
    }, [])

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
            <title>Dun Yan</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
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
                            <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Home</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/about" legacyBehavior>
                            <a className="text-base  font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">About</a>
                            </Link> 
                        </li>
                        <li>
                            <Link legacyBehavior href="/blogs">
                            <a className="text-base font-semibold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">Blogs</a>
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

                    <div className="text-center p-10">
                        <h2 className="text-4xl py-2 text-cyan-600 dark:text-cyan-500 font-medium md:text-4xl">Pages cannot be found</h2>
                        <p className="text-xl py-2 md:text-2xl text-gray-800 dark:text-slate-200">Returning back to home page.......</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
 
export default Notfound;