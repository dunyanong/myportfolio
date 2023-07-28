import Head from 'next/head'
import { NotableProjects } from '../components/Projects/NotableProjects';
import { MiniProjects } from '../components/Projects/MiniProjects';
import Footer from '../components/Footer';

// Project Dataset
import Navbar from '../components/Navbar';
import notableProjectData  from '../data/projects/NotableProjectData';
import miniProjectData from '../data/projects/MiniProjectData'

const project = () => {
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
          <Navbar/>
        </div> 

        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Personal Projects 🧠</h1>
            <p className="  text-gray-100 py-4">I have been working on some personal projects in order to gain further knowledge about various libraries and browser APIs.</p>
            <p className="text-gray-100 pb-8">Experimenting with the latest technology in small projects and sharing them on GitHub is a fulfilling activity. Not only does it serve as a personal record of one's work, but it also benefits others who are seeking examples.</p>
          </div>
        </div>  

        
        <div className='py-5'>
          <h3 className="font-bold text-3xl md:text-4xl tracking-tight pt-6 text-white">Notable Projects</h3>
          <NotableProjects notableProjectData={notableProjectData}/>  
        </div>
        
        <div className='py-5'>
          <h3 className="font-bold text-3xl md:text-4xl tracking-tight pt-6 text-white">Mini Projects</h3>
          <MiniProjects miniProjectData={miniProjectData}/>
        </div>

        </section>

        {/*Footer*/}
        <Footer />
      </main>
    </div>
  )
}

export default project
