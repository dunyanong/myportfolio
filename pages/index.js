import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer';

import profilePic from '../public/avatar.png';
import medium from '../data/blogs/logo-img/Medium.png';
import lambdatest from '../data/blogs/logo-img/Lambdatest.png'

// Project Dataset
import Navbar from '../components/Navbar';
import Link from 'next/link';

// icons
import { FaCode, FaLink } from 'react-icons/fa';

export default function Home() {

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

      <main className="px-10 lg:px-80 bg-black py-6">
        <section>
        <div>
          <Navbar/>
        </div> 

        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Ong Dun Yan</h1>
            <h2 className="text-gray-200 mb-4">Full-Stack Engineer based in  <span className="font-semibold">Malaysia 🇲🇾 </span></h2>
            <p className="text-gray-400 mb-4">Focus lies in the realm of software development and web technologies. Possesses a strong affection for the intricate workings of semiconductors.</p>
          </div>
          <div className="w-[80px] sm:w-[134px] h-[80px] sm:h-[134px] relative mr-auto flex-none rounded-full overflow-hidden">
            <Image src={profilePic} alt="image" priority className="w-full h-auto"/>
          </div>
        </div>  

        <Link className="flex items-center pt-2 pb-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6" href="/gallery">
          <p>Photo gallery</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg>
        </Link>

        
        <div className='py-5'>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">Featured Blogs</h3>

          <div className="py-5">
            <a href="https://medium.com/@dunyan/react-the-pros-and-cons-of-a-popular-javascript-library-6e1e443a3e22" target="_blank">
              <div className="rounded overflow-hidden shadow-lg bg-black duration-200 rounded-b md:rounded-b-none md:rounded-r pr-4 py-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                <div className="inline-block items-center bg-cyan-200 rounded-lg px-2 mr-2 mb-2"><p className="text-xs text-gray-700 font-medium flex items-center">Intermediate</p></div>
                  <div className="text-lg font-semibold mb-2 text-white">React: The Pros and Cons of a Popular JavaScript Library</div>
                  <p className="text-gray-300 text-xs">In this article, we will take a closer look at the benefits and drawbacks of using React, helping you make an informed decision on whether it is the right choice for you.</p>
                </div>
                <div className="flex items-center">
                  <Image src={medium} className="w-10 h-10 rounded-full mr-4" alt="image" />
                  <div className="text-sm">
                    <p className="text-gray-300 leading-none">Medium</p>
                    <p className="text-gray-300">January 2023</p>
                  </div>
                </div>
              </div>
            </a> 
            </div>  

            <div className="py-5">
              <a href="https://www.lambdatest.com/blog/css-font-spacing/" target="_blank">
                <div className="rounded overflow-hidden shadow-lg bg-black duration-200 rounded-b md:rounded-b-none md:rounded-r pr-4 py-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                  <div className="inline-block items-center bg-pink-200 rounded-lg px-2 mr-2 mb-2"><p className="text-xs text-gray-700 font-medium flex items-center">Technical</p></div>
                    <div className="text-lg font-semibold mb-2 text-white">Mastering CSS Font Spacing: Tips and Tricks for Perfect Typography</div>
                    <p className="text-gray-300 text-xs">This blog on CSS Font Spacing will cover everything you need to know about typography and font spacing in CSS and the different ways of achieving that.</p>
                  </div>
                  <div className="flex items-center">
                    <Image src={lambdatest} className="w-10 h-10 rounded-full mr-4" alt="image" />
                    <div className="text-sm">
                      <p className="text-gray-300 leading-none">Lambdatest</p>
                      <p className="text-gray-300">January 2023</p>
                    </div>
                  </div>
                </div>
              </a> 
            </div>                     
          <Link className="flex items-center pt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6" href="/blogs">
            <p>Read all blogs</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg>
          </Link>
        </div>
        
        <div className='py-5'>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">Notable Project</h3>
        <div className="py-4 pr-8 border-gray-700 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg hover:shadow-xl duration-1000">
          <div className="flex items-center pb-3">
              <div>
                  <h1 className="font-semibold text-xl text-gray-200">Confessay</h1>    
                  <p className='text-xs text-cyan-500 font-semibold'>NextJS + DaisyUI + ReactJS + Tailwind + Firebase</p>
              </div>            
          </div>
          <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
              <div className="pt-1">
                  <p className="text-sm text-gray-400">A platform created to allow people to confess ther negative emotions openly and anonymously.</p>         
              </div>
              </div>                
          </div>

          <div className="py-4 flex justify-start gap-4 items-center">
              <a className="flex justify-between text-gray-400 text-sm whitespace-pre-line break-words" href="https://confessay.vercel.app" target="_blank">
                  <FaLink className="mr-1" size={18} />
                  <p>Link</p>
              </a>
              <a className="flex justify-between text-gray-400 text-sm whitespace-pre-line break-words" href="https://github.com/dunyanong/confessay" target="_blank">
                  <FaCode className="mr-1" size={18} />
                  <p>Code</p>
              </a>
          </div>
          </div>
          <Link className="flex items-center pt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-200 transition-all h-6" href="/project">
            <p>Explore all projects</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg>
          </Link>
        </div>

        </section>

        {/*Footer*/}
        <Footer />
      </main>
    </div>
  )
}
