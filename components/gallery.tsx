import Head from 'next/head';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';
import { useState } from 'react';
import Image from 'next/image';

// All the images
import dunyanTurkey from '../images/my-pictures/dunyanturkey.png';
import physicReunion from '../images/my-pictures/physic-reunion.png';
import sunwaymakeitchallenge from '../images/my-pictures/sunwaymakeitchallenge.jpg';
import soldering from '../images/my-pictures/soldering.jpg';

const Gallery = () => {
  const [images] = useState([
    {
      url: dunyanTurkey,
      date: "Oct 2019",      
    },
    {
      url: physicReunion,
      date: "Jun 2022",
    },    
    {
      url: sunwaymakeitchallenge,
      date: "Jun 2024",
    },
    
    {
      url: soldering,
      date: "April 2024", 
           
    },

  ]);

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [imageIndex, setImageIndex] = useState()


  return (
    <div>  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 gap-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg overflow-hidden"
          >
            <Image
              src={image.url}
              alt="Gallery"
              layout="responsive"
              width={800}
              height={601}
              className="rounded-lg shadow-md transition duration-500 ease-in-out transform hover:filter hover:blur-lg"
            />

            {hoveredIndex === index && (                  
              <motion.div
                className="absolute top-0 left-0 m-2 bg-gray-900 rounded-lg px-2 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-white text-sm font-medium">{image.date}</h3>
              </motion.div>
            )}
            <div
              className="absolute inset-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );  
}

export default Gallery;