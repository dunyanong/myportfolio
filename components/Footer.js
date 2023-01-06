import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillHome,
    AiFillQuestionCircle,
    AiOutlinePaperClip
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 px-5 pt-20 pb-2"> 
            <div className="pt-5 pb-20 text-center">
                <h4 className="text-2xl font-medium text-gray-800 dark:text-slate-200">Get in Touch</h4>
                <p className="text-sm font-normal text-gray-700 dark:text-slate-200 pt-2">If you are interested in having a coffee chat, collaborating on an open-source project, be sure to direct message me on my social medias 😊</p>
                <div className="text-2xl flex justify-center gap-4 text-gray-600 dark:text-slate-200 mt-2">
                    <a href="https://twitter.com/dun_yan_" target="_blank"><AiFillTwitterCircle /></a>
                    <a href="https://www.linkedin.com/in/dun-yan-ong-b26aa5244/" target="_blank"><AiFillLinkedin /></a>
                    <a href="https://github.com/dunyanong" target="_blank"><AiFillGithub /></a>
                </div>
            </div>

            <div className="">

                <div className="flex justify-center">
                    <a className="flex items-center mx-2" href="/">
                        <p className="text-gray-500 dark:text-slate-200 text-center mx-1"><AiFillHome /></p>
                        <p className="text-gray-500 dark:text-slate-200 text-center">Home</p>
                    </a>    
                    <a className="flex items-center mx-2" href="/about">
                        <p className="text-gray-500 dark:text-slate-200 text-center mx-1"><AiFillQuestionCircle /></p>
                        <p className="text-gray-500 dark:text-slate-200 text-center" >About</p>
                    </a>
                    <a className="flex items-center mx-2" href="/blogs">
                        <p className="text-gray-500 dark:text-slate-200 text-center mx-1"><AiOutlinePaperClip /></p>
                        <p className="text-gray-500 dark:text-slate-200 text-center">Blogs</p>
                    </a>
                </div>            
            </div>                      

            <div className="pb-5 pt-2">
                <p className="text-gray-500 dark:text-slate-200 text-center">Copyright @ DunYan Portfolio</p>
            </div>
        </footer>
    );
}
 
export default Footer;