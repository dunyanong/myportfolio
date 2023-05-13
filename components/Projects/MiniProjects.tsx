import { FaLink, FaCode } from 'react-icons/fa';

export const MiniProjectCard = ({id, title, description, techStack, projectLink, githubLink}) => (
    <div className="pb-4 pr-8 bg-black rounded-lg md:py-5 duration-1000">
    <div className="flex items-center pb-3">
        <div>
            <h1 className="font-semibold text-xl text-gray-200">{title}</h1>    
            <p className='text-xs text-cyan-500 font-semibold'>{techStack}</p>
        </div>            
    </div>
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <div className="mt-1">
            <p className="text-sm text-gray-400">{description}</p>         
        </div>
        </div>                
    </div>

    <div className="py-4 flex justify-start gap-4 items-center">
        <a className="flex justify-between text-gray-400 text-sm whitespace-pre-line break-words" href={projectLink} target="_blank">
            <FaLink className="mr-1" size={18} />
            <p>Link</p>
        </a>
        <a className="flex justify-between text-gray-400 text-sm whitespace-pre-line break-words" href={githubLink} target="_blank">
            <FaCode className="mr-1" size={18} />
            <p>Code</p>
        </a>
    </div>
    </div> 
)

export const MiniProjects = ({ miniProjectData }) => {
    const sortedProjects = miniProjectData.sort((a, b) => b.id - a.id);
    return (
        <section>
        <div className=' grid grid-cols-1'>
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

