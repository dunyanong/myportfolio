import Image from 'next/image';

export const BlogCard = ({difficulty, title, description, platform, date, image, bloglink}) => (
  <div className="my-5">
  <a href={bloglink} target="_blank">
    <div className="border-r border-b border-l border-t border-gray-200 rounded overflow-hidden shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-xl duration-200 rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
      <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-2 mr-2 mb-2"><p className="text-xs text-gray-700 font-medium flex items-center">{difficulty}</p></div>
        <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">{title}</div>
        <p className="text-gray-600 dark:text-gray-300 text-xs">{description}</p>
      </div>
      <div className="flex items-center">
        <Image src={image} className="w-10 h-10 rounded-full mr-4" alt="image" />
        <div className="text-sm">
          <p className="text-gray-600 dark:text-gray-300 leading-none">{platform}</p>
          <p className="text-gray-600 dark:text-gray-300">{date}</p>
        </div>
      </div>
    </div>
  </a> 
  </div>
);

export const BlogList = ({ blogs }) => {
  const sortedBlogs = blogs.sort((a, b) => b.id - a.id);
  return (
    <div>
      {sortedBlogs.map(blog => (
        <BlogCard
          key={blog.id}
          difficulty={blog.difficulty}
          title={blog.title}
          description={blog.description}
          platform={blog.platform}
          date={blog.date}
          image={blog.image}
          bloglink={blog.bloglink}
        />
      ))}
    </div>
  )
}