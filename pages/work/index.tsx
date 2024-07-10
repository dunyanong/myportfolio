import Head from 'next/head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl';

const Work = () => {
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
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">My Work 🔧 </h1>
                <p className="text-gray-100 py-4">
                Dedicated to creating products that people adore. Here is  a summary of my work to date.                </p>
              </div>
            </div> 

            {/* Work info */}
            <div className='flex justify-center pt-10'>

              <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400  flex gap-2"><SlCalender/> May 2024 - July 2024</time>
                  <h3 className="text-xl pb-2 font-semibold text-gray-100">Halogen Capital, Software Engineer (Intern)</h3>
                  <p className="my-3 text-base font-normal text-gray-100">
                    Developed a tool to automate setting up testing environments for code on Amazon Web Services using Go and TypeScript. This tool ensures that the software runs smoothly and securely. Improved the look and feel of an application used by financial traders. Managed phone call and text message functionalities for better communication.
                  </p>
                </li>

                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 flex gap-2"><SlCalender/> April 2023 - July 2023</time>
                  <h3 className="text-xl pb-2 font-semibold text-gray-100">DoctorOnCall, Software Engineer (Intern)</h3>
                  <p className="my-3 text-base font-normal text-gray-100">
                    Built a catalog of software tools that helps doctors and patients find medicines and information quickly. Improved the way data is stored and searched, making it faster and more reliable. Moved information to a new cloud service to make sure it's safe and easy to access.
                  </p>
                </li>

                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 flex gap-2"><SlCalender/> December 2022 - April 2023</time>
                  <h3 className="text-xl pb-2 font-semibold text-gray-100">Lambdatest, Software Developer, Technical Software Writer (Intern)</h3>
                  <p className="my-3 text-base font-normal text-gray-100">
                    Created easy-to-understand guides to help people use new technology for testing websites. Wrote an article that explained how websites work, which many people found helpful. Built user interfaces that make websites and applications easy and enjoyable to use.
                  </p>
                </li>

              </ol>
            </div>
          </section>
        </main>
      </div>
    );
}
 
export default Work;
