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
      <main className="px-6 sm:px-6 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
          <section className="min-h-screen">
          <div>
            <Navbar />
          </div>                

            {/* About */}
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">About Me 👋</h1>
                <p className="text-gray-100 pt-4 pb-5">Hey, I'm Dun Yan. A full time electrical and electronic engineering undergraduate and part-time software engineer (who dabbles with investments).</p>
              </div>
            </div>  
            
            
            <h2 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white pb-4'>Quick Facts About Me</h2>
            <div className="flex flex-col-reverse sm:flex-row items-start">      
              <ol className="flex flex-col pr-8 list-decimal list-inside">
                <li className="text-gray-100 py-2">👨🏼‍⚕️ I am currently an undergraduate studying electrical and electronic engineering at Nanyang Technological University, with an expected graduation in 2027.</li>
                <li className="text-gray-100 py-2">🤑 I provide freelance software projects, helping companies go from zero to one.</li>
                <li className="text-gray-100 py-2">✍️ On this website, I write articles about productivity, software engineering, and generic programming advice that I have found helpful over the years.</li>
                <li className="text-gray-100 py-2">👨‍💻 I participate in various <Link href="/hackathons" legacyBehavior><a target="_blank" className='font-semibold text-cyan-200'>hackathons</a></Link> which have allowed me to meet various new people.</li>
              </ol>
            </div>

            <h2 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white pb-4'>Other Stuffs</h2>
            <div className="flex flex-col-reverse sm:flex-row items-start">      
              <ol className="flex flex-col pr-8 list-decimal list-inside">
                <li className="text-gray-100 py-2">🎮 My journey began at the age of 15 when I started learning data analytical Python libraries such as Pandas, Numpy, Matplotlib, and Seaborn. I later shifted my specialization towards software engineering.</li>
                <li className="text-gray-100 py-2">🚀 During my free time, I often read up cool technological fields like blockchain, data science and IoT.</li>
                <li className="text-gray-100 py-2">⚽ I enjoy playing football competitively for fun :)</li>
              </ol>
            </div>

            <h2 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white pb-4'>Contact ☕</h2>
            <p className='text-gray-100 pb-2'>Don't hesitate in reaching out if you would like to work together. Grabbing a virtual/physical chat? Building new web projects or improving existing ones? Contact me on Twitter!</p>
            <p className='text-gray-100 pb-8'>You can follow me on <a href="https://twitter.com/dun_yan_" target="_blank" className='font-semibold text-cyan-200'>Twitter at @dun_yan_</a> , where I post about web development, or check my <a href="https://github.com/dunyanong/" className='font-semibold text-cyan-200' target="_blank">GitHub</a> or <a href="https://www.linkedin.com/in/dunyan/" className='font-semibold text-cyan-200' target="_blank">LinkedIn</a> profiles.</p>          

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
