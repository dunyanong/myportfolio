import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

const Notfound = () => {
    const route = useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 3000);
    }, [])

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
                <div className='mb-20'>
                    <Navbar />
                </div>
                <div className="text-center pt-20 pb-10">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Pages cannot be found</h1>
                    <p className="text-gray-200 mb-4">Returning back to home page.......</p>
                </div>
                </section>
            </main>
        </div>
    );
}
 
export default Notfound;
