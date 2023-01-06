import Link from "next/link";
import { useState } from "react";

function MobileNav({open, setOpen}){
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-gray-900 transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
            <div className="flex flex-col justify-center items-center mt-28">
                <Link href="/" legacyBehavior>
                    <a className="text-2xl font-bold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">
                        Home
                    </a>
                </Link>
                <Link href="/about" legacyBehavior>
                    <a className="text-2xl font-bold my-4 text-gray-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-600">                     
                    About   
                    </a>
                </Link>
                <Link legacyBehavior href="/blogs">
                    <a className="text-2xl font-bold my-4 text-gray-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-600">
                        Blogs
                    </a>                
                </Link>
            </div>  
        </div>
    )
}

export default function FullScreenNavbar(){
    const [open, setOpen] = useState(false);
    return (
        <div>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-11/12 flex justify-end items-center">
                <div className="group z-50 relative w-6 h-6 cursor-pointer m-0 flex-col justify-between items-center flex" onClick={() => setOpen(!open)}>
                    <span className={`h-1 w-full bg-black dark:bg-slate-200 rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black dark:bg-slate-200 rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black dark:bg-slate-200 rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </div>
    );
}