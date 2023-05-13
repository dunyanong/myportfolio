import Head from 'next/head'
import { useState } from "react";
import Footer from '../components/Footer';

// Blog Dataset
import BlogData from '../data/blogs/BlogData';

// map the list of Blogs
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

interface Blog {
  id: number;
  difficulty: string;
  title: string;
  description: string;
  platform: string;
  date: string;
  image: any;
  bloglink: string;
  tagColor: string;
}


const Blogs = () => {

  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(BlogData);

  const handleSearch = (filteredBlogs: Blog[]) => {
    setFilteredBlogs(filteredBlogs);
  };
  
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
            {/* List of Articles */}
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white">Blog ✍️</h1>
            <p className="py-4 text-gray-400">
              I am passionate about writing blogs on web development, covering topics ranging from frontend, backend, and mobile development.               
            </p> 
            <p className="pt-1 pb-4 text-gray-400">              
              You can use the search function below to filter by title and easily find the content you're looking for.
            </p>                        

            <div className="relative w-full mb-4">
              <SearchBar blogs={BlogData} onSearch={handleSearch} />
            </div>      

            <Footer />
        </section>
      </main>
    </div>
  );
}
 
export default Blogs;
