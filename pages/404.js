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
            <main className="px-10 sm:px-11 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen">
                <section className="min-h-screen">
                <div>
                    <Navbar />
                </div>
                <div className="text-center p-10">
                    <h2 className="text-4xl py-2 text-cyan-500 font-medium md:text-4xl">Pages cannot be found</h2>
                    <p className="text-xl py-2 md:text-2xl text-slate-200">Returning back to home page.......</p>
                </div>
                </section>
            </main>
        </div>
    );
}
 
export default Notfound;
