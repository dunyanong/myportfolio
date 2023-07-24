import Image from 'next/image';

interface BlogCardProps {
  difficulty: string;
  title: string;
  description: string;
  platform: string;
  date: string;
  image: string;
  bloglink: string;
  tagColor: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  difficulty,
  title,
  description,
  platform,
  date,
  image,
  bloglink,
  tagColor,
}) => (
  <div className="my-5">
    <a href={bloglink} target="_blank" rel="noopener noreferrer">
      <div className="rounded overflow-hidden   duration-200 rounded-b md:rounded-b-none md:rounded-r pr-4 py-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className={'inline-block items-center ' + tagColor + ' rounded-lg px-2 mr-2 mb-2'}>
            <p className="text-xs text-gray-700 font-medium flex items-center">{difficulty}</p>
          </div>
          <div className="text-lg font-semibold mb-2 text-white">{title}</div>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        <div className="flex items-center">
          <Image src={image} className="w-10 h-10 rounded-full mr-4" alt="image" />
          <div className="text-sm">
            <p className="text-gray-300 leading-none">{platform}</p>
            <p className="text-gray-300">{date}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

interface BlogListProps {
  blogs: {
    id: number;
    difficulty: string;
    title: string;
    description: string;
    platform: string;
    date: string;
    image: string;
    bloglink: string;
    tagColor: string;
  }[];
}

export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  const sortedBlogs = blogs.sort((a, b) => b.id - a.id);
  return (
    <div>
      {sortedBlogs.map((blog) => (
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
      ))}
    </div>
  );
};

export default BlogCard;