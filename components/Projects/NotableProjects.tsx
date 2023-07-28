import { FaLink, FaCode, FaTools } from 'react-icons/fa';

interface NotableProjectCardProps {
    id: number;
    title: string;
    description: string;
    techStack: string;
    projectLink: string;
    githubLink: string;
}

interface NotableProjectProps {
    notableProjectData: NotableProjectCardProps[];
}

interface NotableProjectCardProps {
    id: number;
    title: string;
    description: string;
    techStack: string;
    projectLink: string;
    githubLink: string;
}

interface NotableProjectsProps {
    notableProjectData: NotableProjectCardProps[];
}

export const NotableProjectCard = ({id, title, description, techStack, projectLink, githubLink}: NotableProjectCardProps) => (
    <div className="pb-4 pr-8   rounded-lg md:py-5 duration-1000 ">
    <div className="flex items-center pb-3">
        <div>
            <h1 className="font-bold text-xl text-gray-200">{title}</h1>    
            <p className='text-xs text-white font-semibold flex gap-2 items-center'>
                <FaTools className='text-cyan-200'/>
                {techStack}
            </p>
        </div>            
    </div>
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <div className="mt-1">
            <p className="text-sm text-gray-100">{description}</p>         
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

export const NotableProjects = ({ notableProjectData }: NotableProjectProps) => {
    const sortedProjects = notableProjectData.sort((a, b) => b.id - a.id);
    return (
        <section className='py-5'>
        <div className="flex justify-start">
        <div className="w-auto">
        {sortedProjects.map(project => (        
          <NotableProjectCard
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
          />
        ))}        
        </div>

        </div>
        </section>
    )
  }

