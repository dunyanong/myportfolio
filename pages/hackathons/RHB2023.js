import Head from 'next/head'
import Footer from '../../components/Footer';
import Image from 'next/image';
import prototype from './img/rhbprototype.png'
import cert from './img/rhbcert.png'
import Navbar from '../../components/Navbar';

const RHB2023 = () => {
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
                <p className="text-gray-400 py-4">Welcome to my Certificates page! Here you can view all of my programming certificates, which showcase the various skills and technologies I have mastered.</p>
              </div>
            </div> 

            {/* Hackathon info */}
            <div className='flex justify-center'>

            <div className='text-left pt-10 pl-1 pb-2'>           
            <figure className='flex justify-center'>  
                <Image src={prototype} alt='prototype img' className='rounded-xl h-1/2 w-full'/>
            </figure> 
            <figcaption className="mt-2 text-sm text-center text-gray-400">Figma prototype</figcaption>
                <h3 className="font-bold text-2xl md:text-4xl tracking-tight pt-6 text-white">Zee - Expense Management Feature for RHB Mobile Banking App</h3>        
                <p className="text-md text-start py-3 leading-8 text-gray-300">Welcome to Zee, a new expense management prototype feature within the RHB mobile banking app. With its card-swiping mechanism, Zee aims to make expense categorization more efficient for users, allowing them to easily track and manage their expenses.</p>                        
                <p className="text-md py-3 leading-8 text-gray-300">This project is a prototype and is not officially endorsed or supported by RHB Bank.</p> 
            <figure className='flex justify-center'>  
                <Image src={cert} alt='prototype img' className='rounded-xl h-1/3 w-1/1 md:w-1/3'/>
            </figure> 
            <figcaption className="mt-2 text-sm text-center text-gray-400">RHB Certificate</figcaption>
                <div>
                    <h3 className='text-start text-xl pt-10 text-gray-300 font-medium md:text-xl'>Tech Stack:</h3>
                    <p className='text-gray-300 text-md'>NextJS, React, Tailwind, CSS, ChakraUI</p>                    
                </div>   
                <div>
                    <h3 className='text-start text-xl pt-10 text-gray-300 font-medium md:text-xl'>Github:</h3>
                    <span><a href='https://github.com/dunyanong/Zee' className="text-md max-w-xl mx-auto text-cyan-300" target='_blank'>link</a></span>
                </div>           
            </div>

            </div>

            <Footer />
        </section>
        </main>
        </div>
    );
    
}

export default RHB2023