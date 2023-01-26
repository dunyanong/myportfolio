import React, { useState } from 'react';
import { BlogCard } from './BlogList';

const SearchBar = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };
  
  blogs.sort((a, b) => b.id - a.id);
  
  const filteredBlogs = blogs.filter(blog => {
    return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
        <form>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" onChange={handleSearch} placeholder="Search blogs" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-cyan-500 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
      {filteredBlogs.map(blog => {
        return (
        <BlogCard
          key={blog.id}
          difficulty={blog.difficulty}
          title={blog.title}
          description={blog.description}
          platform={blog.platform}
          date={blog.date}
          bloglink={blog.bloglink}
        />
        )
      })}
    </div>
  );
};

export default SearchBar;
