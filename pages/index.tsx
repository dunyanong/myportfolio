import Head from 'next/head'

// Project Dataset
import Navbar from '../components/Navbar';

// icons
import Gallery from '../components/gallery';
import TwitterFollowers from '../components/twitter';

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

      <main className="px-6 sm:px-6 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
        <section>
        <div>
          <Navbar/>
        </div> 
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white font-Wittgenstein">Hey, I'm Dun Yan 👋</h1>
            <h2 className="text-gray-300 mb-4">Based in  <span className="font-semibold">Singapore 🇸🇬 </span></h2>
            <p className="text-gray-300 mb-4">Welcome to my little corner of the internet! I'm a Malaysian software engineer and indie hacker with a passion for Tech and Engineering. Currently, I'm pursuing a degree in Electrical and Electronic Engineering at Nanyang Technological University of Singapore.</p>
            <p className='text-gray-300 mb-4 italic'>
              (This site is meant to be informal and layman <span className='not-italic'>🤩</span>)
            </p>
          </div>
        </div>  

        <div className="flex flex-col pr-8">
          <h3 className="font-bold text-lg md:text-2xl tracking-tight py-2 text-gray-200">What is my work focused on?</h3>
          <p className="text-gray-300 mb-4">
            Ironically, despite being in a hardware-heavy course, I have a strong passion for software development. My favorite language is Go Lang, and I love tinkering with hardware and electromagnets.
          </p>
          <p className="text-gray-300 mb-4">
            Right now, I'm diving into a research project on wireless charging under the guidance of Professor Christopher Ho.            
          </p>



        </div>

        <Gallery />
  
        <div className="text-gray-200 py-5">
          <p>
            Over the past few years, I've been writing content on my blog, focusing on simplicity. You'll find posts about the technologies I'm currently interested in, as well as my career growth and learning experiences, sharing knowledge throughout the journey.
          </p>
        </div>

        <div className="py-2">
          <a 
            href="/blog/developer-experience" 
            className="flex w-full items-center justify-between rounded border  px-3 py-4 border-neutral-700 bg-neutral-800"
          >
            <div className="flex flex-col">
              <p className="font-medium text-neutral-50">
                What Makes A Great Developer Experience?
              </p>
              <p className="text-neutral-200">
                51,975 views
              </p>
            </div>
            <div className="transform text-neutral-300 transition-transform duration-300 group-hover:-rotate-12">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>

        <div className="py-2">
          <a 
            href="/blog/developer-experience" 
            className="flex w-full items-center justify-between rounded border px-3 py-4 border-neutral-700 bg-neutral-800"
          >
            <div className="flex flex-col">
              <p className="font-medium text-neutral-50">
                What Makes A Great Developer Experience?
              </p>
              <p className="text-neutral-200">
                51,975 views
              </p>
            </div>
            <div className="transform text-neutral-300 transition-transform duration-300 group-hover:-rotate-12">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>

        <div className="text-gray-200 py-5">
          <p>
            Used to tweet tiny bits of my life as well. Feel free to follow :)
          </p>
        </div>

        <TwitterFollowers />


        
        <div className="text-gray-200 pt-5">
          <h3 className="font-bold text-lg md:text-2xl tracking-tight py-2 text-gray-200">Some Fun Facts</h3>
          <ul className='list-disc pl-5 text-gray-200'>
            <li>I enjoy footballing (British football pls), hiking, blogging, organising clubs events</li>
            <li>I have a unique hobby: participating in hackathons. I plan to retire from this once I reach double-digit wins!</li>
          </ul>
        </div>


        </section>

        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2  md:flex-row md:space-x-4 md:space-y-0 text-neutral-300">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/dun_yan_"
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                />
              </svg>
              <p className="ml-2 h-7">follow me</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/dunyanong"
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                />
              </svg>
              <p className="ml-2 h-7">contact me</p>
            </a>
          </li>
        </ul>

      </main>
      
    </div>
  )
}
