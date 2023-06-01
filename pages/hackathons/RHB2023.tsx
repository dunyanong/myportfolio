import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image';
import prototype from './img/rhb2023prototype.png'
import cert from './img/rhbcert.png'
import Navbar from '../../components/Navbar';

export default function RHB2023() {
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
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">RHB 2023 🔥</h1>
                <p className="text-gray-400 pt-4">Problem Statement: How might we help the young adults in developing financial literacy to grow their wealth at an early age?</p>
              </div>
            </div> 

            {/* Hackathon info */}
            <div className='flex justify-center'>

            <div className='text-left pt-5 pl-1 pb-2'>           
            <figure className='flex justify-center'>  
                <Image src={prototype} alt='prototype img' className='rounded-xl h-1/2 w-full'/>
            </figure> 
            <figcaption className="mt-2 text-sm text-center text-gray-400">Prototype</figcaption>
            
            <div className='py-3'>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">The Problem 😔</h3>        
                <p className="text-gray-400 pt-4">A cashless society offers convenience in purchasing, but increases the risk of overspending, particularly for impulsive young people. Effective financial management requires controlling expenses. Unfortunately, existing mobile banking apps fail to provide satisfactory expense management for Gen Z.</p>
            </div>
            <div className='py-3'>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">The Solution: Zee 🫣</h3>        
                <p className="text-gray-400 pt-4">Zee by RHB in the mobile banking app offers Gen Z an expense management experience. It uses a Tinder-like interface to categorize expenses and provides weekly feedback. Stay mindful of your spending, even during those unexpected moments. 🫣</p>
            </div>
            <div className='py-3'>
                <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Tech Stack 💻</h3>
                <p className='text-gray-400 pt-4'>NextJS, React, Tailwind, CSS, ChakraUI</p>                    
            </div>
            <div className='py-3'>
                <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Additional Info 📚</h3>
                <ul  className='text-gray-400 pt-4 list-disc list-inside'>
                    <li>Did not manage to qualify Top 10 out of 100 teams 😕</li>
                    <li>It is my first hackthon</li>
                </ul>
            </div>              
            </div>
            </div>
            <Footer />
        </section>
        </main>
        </div>
    );
    
};