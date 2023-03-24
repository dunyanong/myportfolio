import Image from 'next/image';

// technologies icons
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiJavascript, SiExpress, SiMongodb, SiFirebase, SiPandas, SiNumpy, SiTensorflow, SiFlutter, SiDart } from 'react-icons/si';
import { FaReact, FaHtml5, FaPython, FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';

// skillset images
import frontend from '../images/skills/frontend.png';
import backend from '../images/skills/backend.png';
import datascience from '../images/skills/datascience.png';
import mobiledev from '../images/skills/mobiledev.png'


const Skills = () => {
    return (
        <section className="mb-20">
        <h3 className="text-4xl pb-1 text-cyan-500 text-center">Skills & experience</h3>   
        <div className="flex justify-center">
        <div className="w-full md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="shadow rounded-md py-6 px-8 flex flex-col justify-start space-y-6 h-fullborder-gray-700 bg-gray-800 hover:bg-gray-700">
                <div className="flex items-center">
                    <Image src={frontend} alt='frontend image' width={30} height={30}/>
                    <h3 className="pl-2 text-lg font-semibold mb-2 text-white leading-5">Frontend development</h3>
                </div>
                <div className="text-md leading-tight">
                    <p className="inline font-light text-gray-200">I design attractive and efficient user interfaces with HTML, CSS, and JavaScript, and have expertise in frontend frameworks, responsive design, and optimization. </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-3xl text-white mr-1"><a href='https://nextjs.org' target='_blank'><SiNextdotjs /></a></span>
                    <span className="text-3xl text-cyan-500 mr-1"><a href='https://tailwindcss.com' target='_blank'><SiTailwindcss /></a></span>
                    <span className="text-3xl text-cyan-500 mr-1"><a href='https://reactjs.org' target='_blank'><FaReact /></a></span>
                    <span className="text-3xl text-purple-600 mr-1"><a href='https://getbootstrap.com' target='_blank'><SiBootstrap /></a></span>                    
                    <span className="text-3xl text-yellow-300 mr-1"><a href="https://en.wikipedia.org/wiki/JavaScript" target='_blank'><SiJavascript /></a></span>   
                    <span className="text-3xl text-orange-500 mr-1"><a href="https://en.wikipedia.org/wiki/HTML" target='_blank'><FaHtml5 /></a></span>
                    <span className="text-3xl text-blue-600 mr-1"><a href="https://en.wikipedia.org/wiki/CSS" target='_blank'><IoLogoCss3 /></a></span>   
                </div>
            </div>
            <div className="shadow rounded-md py-6 px-8 flex flex-col justify-start space-y-6 h-full border-gray-700 bg-gray-800 hover:bg-gray-700">
                <div className="flex items-center">
                    <Image src={backend} alt='frontend image>' width={30} height={30}/>
                    <h3 className="pl-2 text-lg font-semibold mb-2 text-white leading-5">Backend development</h3>
                </div>
                <div className="text-md leading-tight">
                    <p className="inline font-light text-gray-200">I love building APIs using a tech stack that includes Express.js, Node.js, and MongoDB. Additionally, I have experience working with Firebase on occasion.</p>
                </div>
                <div v-if="tools" className="flex flex-wrap gap-2 justify-center">
                    <span className="text-3xl text-white mr-1"><a href='https://expressjs.com' target='_blank'><SiExpress /></a></span>
                    <span className="text-3xl text-green-700 mr-1"><a href='https://nodejs.org/en/' target='_blank'><FaNodeJs /></a></span>
                    <span className="text-3xl text-green-600 mr-1"><a href='https://www.mongodb.com' target='_blank'><SiMongodb /></a></span>
                    <span className="text-3xl text-orange-500 mr-1"><a href='https://firebase.google.com' target='_blank'><SiFirebase /></a></span>
                </div>
            </div>                                                                
        </div>   
        </div> 
        <div className='flex justify-center'>
        <div className="shadow rounded-md py-6 px-8 flex flex-col space-y-6 h-full md:w-1/3 border-gray-700 bg-gray-800 hover:bg-gray-700">
                <div className="flex items-center">
                <Image src={mobiledev} alt='frontend image>' width={30} height={30}/>
                    <h3 className="pl-2 text-lg font-semibold mb-2 text-white leading-5">Mobile App Development</h3>
                </div>
                <div className="text-md leading-tight">
                    <p className="inline font-light text-gray-200">I build basic mobile applications using Flutter and Dart, focusing on creating responsive UIs and integrating with APIs</p>
                </div>
                <div v-if="tools" className="flex flex-wrap gap-2 justify-center">
                    <span className="text-3xl text-cyan-400 mr-1"><a href='https://flutter.dev' target='_blank'><SiFlutter /></a></span>
                    <span className="text-3xl text-white mr-1"><a href='https://dart.dev' target='_blank'><SiDart /></a></span>                   
                </div>
            </div>   
        </div>         
        </section>
    );
}
 
export default Skills;