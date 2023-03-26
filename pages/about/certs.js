import { useState } from "react";
import Image from 'next/image';
import Head from 'next/head'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import async from '../../data/certs/Asynchronous Programming Course.png';
import HTML from '../../data/certs/HTML.png';
import CSS from '../../data/certs/CSS.png';
import Javascript from '../../data/certs/Javascript.png';
import pythonBlockchain from '../../data/certs/python-blockchain.png';

const images = [
  {
    src: async,
    alt: 'Image 1',
    description: 'Asynchronous programming certificate from Codecademy',
  },
  {
    src: HTML,
    alt: 'Image 2',
    description: 'HTML certificate from Codecademy',
  },
  {
    src: CSS,
    alt: 'Image 3',
    description: 'CSS certificate from Codecademy',
  },
  {
    src: Javascript,
    alt: 'Image 4',
    description: 'Javascript certificate from Codecademy',
  },
  {
    src: pythonBlockchain,
    alt: 'Image 5',
    description: 'Basics of blockchain certificate from Codecademy',
  },    
];

const Certs = () => { 
  const [hoveredIndex, setHoveredIndex] = useState(-1);

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
        <main className="px-10 md:px-20 lg:px-80 bg-black py-6">
            <section className="min-h-screen">
            <div>
            <Navbar />
            </div>            

            <div className="flex flex-col-reverse sm:flex-row items-start">
              <div className="flex flex-col pr-8">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Certificates 📜</h1>
                <p className="text-gray-400 py-4">Welcome to my Certificates page! Here you can view all of my programming certificates, which showcase the various skills and technologies I have mastered.</p>
              </div>
            </div>  

            <hr className="w-full border-1 border-gray-800 mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
            {images.map((image, index) => (
            <div
                key={index}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
            >
                <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="rounded-lg"
                />
                {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 rounded-lg flex items-center justify-center">
                <p className="text-white">{image.description}</p>
                </div>
                )}
            </div>
            ))}
            </div>
            <Footer />
            </section>
        </main>
        </div>
    );
};

export default Certs;
