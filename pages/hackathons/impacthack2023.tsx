import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image';
import prototype from './img/impact2023prototype.png'
import Navbar from '../../components/Navbar';

export default function Impact2023() {
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
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Impact 2023 🔥</h1>
                <p className="text-gray-400 pt-4">Problem Statement: How may we help SMEs develop and implement effective sales & performance processes and monitoring that are able to attract, retain and grow talents?</p>
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
                <p className="text-gray-400 pt-4">
                    SME owners are really busy as they lack the time and manpower to improve their business. Freeing up time for owners is the most valuable thing for SMEs so that owners can focus on things like inventory, sales and financing.
                </p>
            </div>
            <div className='py-3'>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">The Solution: #NowEveryoneCanAI 🫣</h3>        
                <p className="text-gray-400 pt-4">
                    We turn any WhatsApp line into a business assistant in less than 5 minutes! Simply scan a QR code, pick a profile and customise AI training and AI is ready to help your business!
                </p>
            </div>
            <div className='py-3'>
                <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Tech Stack 💻</h3>
                <p className='text-gray-400 pt-4'>ChatGPT API, express.js, node.js, ejs</p>                    
            </div>
            <div className='py-3'>
                <h3 className='font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white'>Additional Info 📚</h3>
                <ul  className='text-gray-400 pt-4 list-disc list-inside'>
                    <li>Glad to have my hackathon-shark CTO to guide me for this hackathon</li>
                    <li>Key lessons: Don't be afraid to pivot quickly and focus on the judges instead of the mentors</li>
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
