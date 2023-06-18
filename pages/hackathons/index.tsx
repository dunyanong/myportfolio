import Head from 'next/head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { SlCalender } from 'react-icons/sl'
import Link from 'next/link';

const Home = () => {
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
            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Hackathons  🚀</h1>
                <p className="text-gray-400 py-4">
                As an avid participant in hackathons, I have documented my exhilarating experiences and accomplishments in various hackathons.
                Explore my Hackathon Journey, dive into the projects I've built!
                </p>
              </div>
            </div> 

            {/* Hackathon info */}
            <div className='flex justify-center pt-10'>

            <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400  flex gap-2"><SlCalender/> June 2023</time>
                    <h3 className="text-lg font-semibold text-gray-300">Impacthack</h3>
                    <p className="mb-4 text-base font-normal text-gray-400">Create an impact in the Malaysian SME ecosystem.</p>
                    <Link href="/hackathons/impacthack2023" legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-200 rounded-lg">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a>
                    </Link>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 flex gap-2"><SlCalender/> May 2023</time>
                    <h3 className="text-lg font-semibold text-gray-300">Payhack</h3>
                    <p className="mb-4 text-base font-normal text-gray-400">How might we directly contribute towards environmental conservation or any of the Sustainable Development Goals 2030 through the digital payments space?</p>
                    <Link href="/hackathons/payhack2023" legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-200 rounded-lg">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a>
                    </Link>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 flex gap-2"><SlCalender/> January 2023</time>
                    <h3 className="text-lg font-semibold text-gray-300">RHB Hack</h3>
                    <p className="mb-4 text-base font-normal text-gray-400 ">How might we help the young adults in developing financial literacy to grow their wealth at an early age?</p>
                    <Link href="/hackathons/RHB2023" legacyBehavior>
                        <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 border border-gray-200 rounded-lg">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a>
                    </Link>
                </li>
            </ol>
            </div>
            <Footer />
        </section>
        </main>
        </div>
    );
    
}

export default Home;