import React from "react";
import classes from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <header>
            <div className=" bg-[#014a7f] h-16 text-white">
                <div className="container mx-auto items-center flex flex-row justify-between">
                    <div className="flex flex-row gap-14">
                        <Link to="/" className="py-3 hover:bg-black px-2"> Home </Link>
                        <span className="py-3  px-2 relative group hover:bg-black">
                         About
                         <ul className="list-none absolute bg-black invisible group-hover:visible hidden group-hover:block">
                            <li>  <Link to="aboutUs" className=" hover:bg-[#014a7f] hover:text-white mt-6  p-4 "> Home  </Link></li>
                            <li>  <Link to="editorialboard" className="hover:bg-[#014a7f] hover:text-white  p-4"> Editorial Board </Link></li>
                            <li>  <Link to="publisherinformation" className="hover:bg-[#014a7f] hover:text-white  p-4"> Publisher Information </Link></li>
                            <li>  <Link to="contact" className="hover:bg-[#014a7f] hover:text-white  p-4"> Contact</Link></li>
                            <li>  <Link to="permissions" className="hover:bg-[#014a7f] hover:text-white p-4"> Permissions </Link></li>
                         </ul>
                            {/* <div className="absolute bg-black w-full invisible group-hover:visible hidden group-hover:block">
                             <Link to="aboutjfgm" className="px-2 p-4 "> About JFMG </Link>
                             <Link to="editorialboard" className=""> Editorial Board </Link>
                             <Link to="publisherinformation" className=""> Publisher Information </Link>
                             <Link to="contact" className=""> Contact</Link>
                             <Link to="permissions" className=""> Permissions </Link>
                        </div> */}
                    </span>
                        <Link to="/" className="py-3 "> Submit an Article
                        </Link>
                        <Link to="/" className="py-3"> Browse </Link>
                        <Link to="/openaccess" className="py-3"> Open Access </Link>
                        <Link to="/currentissue" className="py-3"> Current Issue </Link>
                        <Link to="/authordeshboard" className="py-3"> Author deshboard </Link>

                    </div>

                </div>

            </div>
        </header>
    );
}
export default Header;