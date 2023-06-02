import Head from 'next/head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
    return (
      <div>
      <Head>
      <title>Dun Yan</title>

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="px-10 sm:px-11 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
          <section className="min-h-screen">
          <div>
            <Navbar />
          </div>                

            {/* About */}
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Hello 👋 !</h1>
                <p className="text-gray-400 py-4">Hey, I am Dun Yan and currently working as a software engineer.</p>
              </div>
            </div>  

            <hr className="w-full border-1 border-gray-800 mb-8" />

            <div className="flex flex-col-reverse sm:flex-row items-start">              
              <div className="flex flex-col pr-8">
                <p className="text-gray-400 py-4">In November 2020, at the age of 16, I began my journey of learning Python and other libraries such as Pandas, Numpy, and Matplotlib.</p>
                <p className="text-gray-400 py-4">My focus is on mastering skills such as JavaScript, Typescript, React.js, Express.js, MongoDB and Flutter. Alongside these technical skills, I also honed my understanding of data structures and algorithms, which are essential tools for any engineer.</p>
                <p className="text-gray-400 py-4">My passion for coding is complemented by a strong interest in emerging technologies such as semiconductors, AI & blockchain. I find these topics fascinating and make a point to stay updated on the latest developments in these fields.</p>
                <p className="text-gray-400 py-4">I enjoy simplifying complex concepts through writing blogs and participating in <Link href="/hackathons" legacyBehavior><a target="_blank" className='text-cyan-300'>hackathons</a></Link>. Writing articles that make difficult ideas easy to understand is rewarding, and hackathons are a fun way to collaborate and innovate.</p>
              </div>
            </div>  

            <h2 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white pb-4'>Contact ☕</h2>
            <p className='text-gray-400 pb-8'>Don't hesitate in reaching out if you would like to work together. Grabbing a virtual/physical chat? Building new web projects or improving existing ones? Contact me on Twitter!</p>

            <h2 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white pb-4'>More info about me? 🤔</h2>
            <p className='text-gray-400 pb-8'>You can follow me on <a href="https://twitter.com/dun_yan_" target="_blank" className='text-cyan-300'>Twitter at @dun_yan_</a> , where I post about web development, or check my <a href="https://github.com/dunyanong/" className='text-cyan-300' target="_blank">GitHub</a> or <a href="https://www.linkedin.com/in/dunyan/" className='text-cyan-300' target="_blank">LinkedIn</a> profiles.</p>          

            <div className="flex flex-col gap-2 md:flex-row md:gap-2">
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/dun_yan_" className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">
                  <div className="flex items-center">
                    <span className='text-2xl'><FaTwitter /></span>
                    <div className="ml-3">Twitter</div>
                  </div>
                  <svg className="mr-2" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                  </svg>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/dunyanong" className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">
                  <div className="flex items-center">
                  <span className='text-2xl'><FaGithub /></span>
                    <div className="ml-3">GitHub</div>
                  </div>
                  <svg className="mr-2" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                  </svg>
              </a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dunyan/" className="flex w-full border border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-200 hover:bg-neutral-900 transition-all justify-between">
                  <div className="flex items-center">
                    <span className='text-2xl'><FaLinkedin /></span>
                    <div className="ml-3">LinkedIn</div>
                  </div>
                  <svg className="mr-2" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                  </svg>
              </a>
            </div>

            <Footer />
        </section>
      </main>
      </div>
    );
}
 
export default About;
