import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import construction from '../images/my-pictures/construction.jpg';
import Image from 'next/image';

const commingsoon = () => {
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
            <Navbar />
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Coming Soon 🚧</h1>
              <p className="  text-gray-100 py-4">Thank you for your patience and enthusiasm. I can't wait to share my work with you soon!</p>
            </div>
          </div>
          <div className='flex justify-center'>
              <Image src={construction} alt='construction'/>
            </div>
        </section>

      </main>
    </div>
  );
};

export default commingsoon;