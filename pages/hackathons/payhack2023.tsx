import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image';
import prototype from './img/paynet2023prototype.png'
import Navbar from '../../components/Navbar';

export default function Payhack2023() {
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
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Payhack 2023 🔥</h1>
                    <p className="text-gray-400 pt-4">Problem Statement: How might we directly contribute towards environmental conservation or any of the Sustainable Development Goals 2030 through the digital payments space?</p>
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
                    <p className="text-gray-400 pt-4">Hotel customers frequently leave electrical appliances in their rooms, failing to turn them off for convenience. This unnecessary energy usage harms hotels, the environment, and depletes resources.</p>
                </div>
                <div className='py-3'>
                    <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">The Solution: Ecopay 🫣</h3>        
                    <p className="text-gray-400 pt-4">We offer a service to hotels that encourages their guests to save electricity. Guests can scan the DuitNow QR code during check-in using a mobile payment app to join the rewards program. Hotel owners give cashback to customers who use less electricity than the average.</p>
                </div>
                <div className='py-3'>
                    <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Tech Stack 💻</h3>
                    <p className='text-gray-400 pt-4'>NextJS, React, Tailwind, CSS, ChakraUI</p>                    
                </div>
                <div className='py-3'>
                    <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Additional Info 📚</h3>
                    <ul  className='text-gray-400 pt-4 list-disc list-inside'>
                        <li>Managed to qualify into Top 50</li>
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