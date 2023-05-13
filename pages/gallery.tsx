import Head from 'next/head';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';

// All the images
import dunyanTurkey from '../images/my-pictures/dunyanturkey.png';
import mcklgraduation from '../images/my-pictures/mcklgraduation.png';
import hotspring from '../images/my-pictures/hotspring.png';
import physicReunion from '../images/my-pictures/physic-reunion.png';
import purple from '../images/my-pictures/purple.png';

const gallery = () => {
  const [images] = useState([
    {
      url: dunyanTurkey,
      date: "Oct 27, 2019",
    },
    {
      url: mcklgraduation,
      date: "Mar 18, 2023",
    },
    {
      url: hotspring,
      date: "Oct 28, 2019",
    },
    {
      url: purple,
      date: "Oct 28, 2019",
    },
    {
      url: physicReunion,
      date: "Jun 10, 2022",
    },
  ]);

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
      <main className="px-10 sm:px-11 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
        <section className="min-h-screen">
          <div>
            <Navbar />
          </div>
  
          {/* About */}
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Photo Gallery 📸</h1>
              <p className="text-gray-400 py-4">These are some pictures that I gave myself as a gift to evoke feelings of nostalgia.</p>
            </div>
          </div>
  
          <hr className="w-full border-1 border-gray-800 mb-8" />
  
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {images.map((image, index) => (
              <div
                className="relative"
                key={index}
              >
              <Image
                src={image.url}
                alt="Gallery"
                width={800}
                height={601}                  
                className="rounded-lg shadow-md transition duration-500 ease-in-out transform hover:filter hover:blur-lg"
              />

              {hoveredIndex === index && (                  
                <motion.div className="absolute bottom-0 right-0 m-2 bg-black bg-opacity-50 rounded-lg p-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 3 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-white text-sm font-medium">{image.date}</h3>
                </motion.div>
              )}
              <div
                className="absolute inset-0 rounded-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              />
              </div>
            ))}
          </motion.div>
  
          <Footer />
        </section>
      </main>
    </div>
  );  
}

export default gallery
