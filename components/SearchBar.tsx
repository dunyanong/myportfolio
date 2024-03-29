import React, { useState, ChangeEvent } from 'react';
import BlogCard from './BlogList';

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

interface SearchBarProps {
  blogs: Blog[];
  onSearch: (filteredBlogs: Blog[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ blogs }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  blogs.sort((a, b) => b.id - a.id);

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <form className="">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white"></label>
        <div className="relative">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="🔍 Search blogs"
            id="default-search"
            className="block w-full px-4 py-2 border rounded-md border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-zinc-900 text-gray-100"
          />
        </div>
      </form>
      <div className="py-3"></div>
      {filteredBlogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            difficulty={blog.difficulty}
            title={blog.title}
            description={blog.description}
            platform={blog.platform}
            date={blog.date}
            image={blog.image}
            bloglink={blog.bloglink}
            tagColor={blog.tagColor}
          />
        );
      })}
    </div>
  );
};

export default SearchBar;