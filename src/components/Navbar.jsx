"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { links } from "@/constants/appdata";
import { usePathname } from "next/navigation";  // usePathname is a hook provided by the Next.js framework, typically used in the context of React applications. This hook allows you to access the current URL's pathname within your component. The pathname is the part of the URL that follows the domain name and excludes query parameters and hash fragments.
const Navbar=()=>{
    const pathname=usePathname();
    const [isMenu, setisMenu]=useState(false);
    // console.log(pathname);
    return(
     <>
     <div className="h-16  flex justify-between items-center md:px-[10%]">

        <Link href="/" className=" p-2 text-lg"><img src="/logo.png" alt="logo" width={100} height={70}></img></Link>

        <div className="md:hidden flex flex-col gap-1 pr-5" onClick={()=>setisMenu(!isMenu)}>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className=" w-5 h-0.5 bg-black"></div>
            <div className=" w-5 h-0.5 bg-black"></div> 
            <div className=" w-5 h-0.5 bg-black"></div>
        </div>

        <div className={`${isMenu ? "flex  flex-col absolute top-10 w-full" : "hidden md:flex" } gap-5 md:flex-row md:static text-bold text-lg md:w-auto text-center font-semibold px-[10%] p-5 overflow-auto flex-col fixed top-16 left-0 w-full bg-white z-50  text-bold  `}>  {/*  z-index imp here for mobile screen navigation bar */}
            {/* {links?.map((link)=>(<div> <Link> <span> {link.text} </span> </Link> </div>))} */}
            {links?.map((link)=>(<div key={link.link}><Link className={`${pathname==link.link ? "text-yellow-600" : "text-black"}`} href={link.link} exact={link.exact}><span className={link.text}>{link.text}</span></Link></div>))}
        </div>
     </div>
     </>
    );
};
export default Navbar;
