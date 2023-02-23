import { FaLink, FaCode } from 'react-icons/fa';

export const MiniProjectCard = ({id, title, description, techStack, projectLink, githubLink}) => (
    <div className="py-4 px-8 bg-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg my-3 md:my-10 hover:shadow-xl duration-1000 ">
    <div className="flex items-center pb-3">
        <div>
            <h1 className="font-semibold text-xl text-gray-700 dark:text-gray-200">{title}</h1>    
            <p className='text-xs text-cyan-600 dark:text-cyan-500 font-semibold'>{techStack}</p>
        </div>            
    </div>
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <div className="mt-1">
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>         
        </div>
        </div>                
    </div>

    <div className="py-4 flex justify-start gap-4 items-center">
        <a className="flex justify-between text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line break-words" href={projectLink} target="_blank">
            <FaLink className="mr-1" size={18} />
            <p>Link</p>
        </a>
        <a className="flex justify-between text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line break-words" href={githubLink} target="_blank">
            <FaCode className="mr-1" size={18} />
            <p>Code</p>
        </a>
    </div>
    </div> 
)

export const MiniProjects = ({ miniProjectData }) => {
    const sortedProjects = miniProjectData.sort((a, b) => b.id - a.id);
    return (
        <section className="mt-8">
        <div className="my-8">
          <h3 className="text-4xl py-1 text-cyan-600 dark:text-cyan-500 text-center">Mini Projects</h3>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-1'>
            {sortedProjects.map(project => (
            <MiniProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
            />
            ))}
        </div>
        </section>
    )
  }

