import Image from 'next/image';

// images
import Portfolio from '../public/project-img/2ndportfolio.png';
import Confessay from '../public/project-img/confessaytemplate.png';
import Tokenium from '../public/project-img/tokenium.png';
import Weather from '../public/project-img/webweatherapp.png'

// all icons
import { FaHtml5, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiFirebase } from 'react-icons/si';

const Projects = () => {
    return (
        <section className="mt-8">
          <div className="my-8">
            <h3 className="text-4xl py-1 text-cyan-600 dark:text-cyan-500 text-center">Notable Projects</h3>
          </div>

          {/*Cards*/}
          <div className='flex justify-center'>          
          <div className="grid md:grid-cols-2 gap-10 md:max-w-3xl ">           
            {/*Card 1*/}
            <div className="rounded overflow-hidden shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-xl duration-200">
            <a href="https://confessay.vercel.app/" target="_blank">
            <Image src={Confessay} className="rounded-t-lg object-contain" alt="image" />  
            <div className="px-6 py-4">
                <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Confessay</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                A platform created to allow people to confess ther negative emotions openly and anonymously.
                </p>
            </div>
            <div className="px-6 mb-5 mt-20">
                <div className="mb-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                    Tech Stack:
                    </p>
                </div>
                <div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-black mr-1"><SiNextdotjs /></span>
                        <p className="text-xs text-gray-700 font-semibold">NextJS</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-cyan-400 mr-1"><FaReact /></span>
                        <p className="text-xs text-gray-700 font-semibold">React</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-cyan-500 mr-1"><SiTailwindcss /></span>
                        <p className="text-xs text-gray-700 font-semibold">Tailwind</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-orange-400 mr-1"><SiFirebase /></span>
                        <p className="text-xs text-gray-700 font-semibold">Firebase</p>
                        </div>                    
                     </div>
                </div>
            <a href="https://github.com/dunyanong/confessay" className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md " target="_blank">
                Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
            </a>
            </div>
            {/*Card 2*/}
            <div className="rounded overflow-hidden shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-xl duration-200">
            <a href="https://dunyan-dev.vercel.app/" target="_blank">
            <Image src={Portfolio}className="rounded-t-lg object-contain" alt="image"/>  
            <div className="px-6 py-4">
                <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">2nd Portfolio</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                A lightweight, customizable single-page personal portfolio website template built with JavaScript and particleJS.
                </p>
            </div>
            <div className="px-6 mb-5 mt-20">
                <div className="mb-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                    Tech Stack:
                    </p>
                </div>
                <div>
                <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-orange-500 mr-1"><FaHtml5 /></span>
                        <p className="text-xs text-gray-700 font-semibold">HTML</p>
                        </div>                    
                    </div> 
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-purple-600 mr-1"><FaBootstrap /></span>
                        <p className="text-xs text-gray-700 font-semibold">Bootstrap</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-yellow-300 mr-1"><SiJavascript /></span>
                        <p className="text-xs text-gray-700 font-semibold">Javascript</p>
                        </div>                    
                    </div>
                </div>
            <a href="https://github.com/dunyanong/Portfolio" className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md" target="_blank">
                Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
            </a>
            </div>

            {/*Card 3*/}
            <div className="rounded overflow-hidden shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-xl duration-200">
            <a href="https://webweatherapp.vercel.app/" target="_blank">
            <Image src={Weather} className="rounded-t-lg object-contain" alt="image"/>  
            <div className="px-6 py-4">
                <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Weather App</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                Built with vanilla Javascript, CSS and HTML. The goal is to master to asynchrounous Javascript programming.
                </p>
            </div>
            <div className="px-6 mb-5 mt-8">
                <div className="mb-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                    Tech Stack:
                    </p>
                </div>
                <div>
                <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                    <div className="flex justify-center">
                      <span className="text-lg text-orange-500 mr-1"><FaHtml5 /></span>
                      <p className="text-xs text-gray-700 font-semibold">HTML</p>
                    </div>                    
                  </div> 
                <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                    <div className="flex justify-center">
                      <span className="text-lg text-blue-600 mr-1"><IoLogoCss3 /></span>
                      <p className="text-xs text-gray-700 font-semibold">CSS</p>
                    </div>                    
                </div>
                <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                    <div className="flex justify-center">
                      <span className="text-lg text-yellow-300 mr-1"><SiJavascript /></span>
                      <p className="text-xs text-gray-700 font-semibold">Javascript</p>
                    </div>                    
                </div>
                </div>
            <a href="https://github.com/dunyanong/Weather-App" className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md" target="_blank">
                Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
            </a>
            </div>                        

            {/*Card 4*/}
            <div className="rounded overflow-hidden shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-xl duration-200">
            <a href="https://Tokenium.vercel.app/" target="_blank">
            <Image src={Tokenium} className="rounded-t-lg object-contain" alt="image"/>  
            <div className="px-6 py-4 ">
                <div className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Tokenium</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                Built with Coingecko API to strengthern my understanding of API and React framework.
                </p>
            </div>
            <div className="px-6 mb-5 mt-8">
                <div className="mb-2">
                    <p className="text-gray-700 dark:text-gray-300 text-sm font-normal">
                    Tech Stack:
                    </p>
                </div>
                <div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-cyan-400 mr-1"><FaReact /></span>
                        <p className="text-xs text-gray-700 font-semibold">React</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-cyan-500 mr-1"><SiTailwindcss /></span>
                        <p className="text-xs text-gray-700 font-semibold">Tailwind</p>
                        </div>                    
                    </div>
                    <div className="inline-block items-center bg-cyan-100 dark:bg-cyan-200 rounded-lg px-3 py-1 mr-2 mb-2">
                        <div className="flex justify-center">
                        <span className="text-lg text-orange-500 mr-1"><FaHtml5 /></span>
                        <p className="text-xs text-gray-700 font-semibold">HTML</p>
                        </div>                    
                    </div> 
                </div>
            <a href="https://github.com/dunyanong/Tokenium" className="inline-flex items-center px-3 py-2 my-3 text-sm font-medium text-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md" target="_blank">
                Details
                <svg aria-hidden="true" className="w-4 h-4 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            </div>
            </a>
            </div>
          </div>
          </div>
        </section>
    );
}
 
export default Projects;
