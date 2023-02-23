import Link from "next/link";

const Timeline = () => {
    return (
        <div className="py-1">
            <div className="text-left pt-10 pl-1">
            <h2 className="text-2xl text-cyan-600 dark:text-cyan-500 font-medium md:text-2xl">My Journey</h2>
            </div>
            <hr className="h-px mt-2 mb-4 bg-gray-100 border-0 dark:bg-gray-700"></hr>
            <ol className="relative border-l border-gray-200 dark:border-gray-700"> 
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Joined Hackathon <span className="font-extrabold leading-tighter tracking-tighter bg-clip-text bg-gradient-to-r text-transparent from-cyan-600 to-teal-400 ">RHB Hack</span></h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">As part of my role, I contributed to the development of Zee - an expense management feature within the RHB mobile banking app. It utilizes a card-swiping mechanism to make expense categorization more efficient for users. <Link href="/hackathons/RHB2023" className="text-cyan-600">Click</Link> for more</p>
            </li> 
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Writter at <span className="font-extrabold leading-tighter tracking-tighter bg-clip-text bg-gradient-to-r text-transparent from-cyan-600 to-teal-400 ">LambdaTest</span></h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Focuses on creating technical documentation on cutting-edge web technologies and incorporating testing in the workflow.</p>
            </li> 
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Finished my A-Level studies</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Completed A-Levels in Mathematics, Further Mathematics, Physics, and Chemistry. These subjects provided a strong foundation in analytical and problem-solving skills, as well as a deep understanding of scientific principles.</p>
            </li>                 
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2021</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enrolled to Codecademy</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Delve into the world of web development and have already begun learning the necessary skills through hands-on projects. </p>                
            </li>
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Completed my secondary education</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Graduated from Eaton International School with my IGCSE.</p>
            </li>
            <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2020</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Beginning my journey in programming</h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Dived into the world of Python, pandas, and NumPy.</p>
            </li>
            </ol>
        </div> 
    );
}
 
export default Timeline;
