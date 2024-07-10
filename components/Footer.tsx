import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-20   bg-opacity-50 backdrop-blur-lg">
            <hr className="w-full border-1 border-gray-800 mb-8" />
            <div className="grid grid-cols-2 gap-8 px-6 pt-8  md:grid-cols-4">                  
                    <ul className="text-gray-500">
                        <li className="pb-4">
                            <Link href="/" legacyBehavior>
                            <a className=" hover:underline">Home</a>
                            </Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/work" legacyBehavior>
                            <a className="hover:underline">Work</a>
                            </Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/project" legacyBehavior>
                            <a className="hover:underline">Projects</a>
                            </Link>
                        </li>                        
                    </ul>
                    <ul className="text-gray-500">
                        <li className="pb-4">
                            <Link href="/blogs" legacyBehavior>
                            <a className="hover:underline">Blogs</a>
                            </Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/gallery" legacyBehavior>
                            <a className="hover:underline">Photos</a>
                            </Link>
                        </li>                            
                    </ul>

                    <ul className="text-gray-500">                                            
                        <li className="pb-4">
                            <a href="https://twitter.com/dun_yan_" className="hover:underline" target="_blank">Twitter</a>
                        </li>                        
                        <li className="pb-4">
                            <a href="https://www.buymeacoffee.com/dunyanong" className="hover:underline" target="_blank">Support me</a>
                        </li>
                    </ul>
            </div>
            <div className="px-6 py-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 Ong Dun Yan. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
 
export default Footer;