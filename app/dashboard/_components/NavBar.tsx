"use client";
import { Search } from "lucide-react";

import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { usePathname } from "next/navigation";
function Navbar({ className }: { className?: string }){
    const path=usePathname();
    useEffect(()=>{
        console.log(path);
    })
    const [active, setActive] = useState<string | null>(null);
    return(
        <div className={cn("  rounded-full fixed top-2 inset-x-0 max-w-3xl mx-auto z-50 ", className)}>
            <Menu setActive={setActive}>
            <Link href='/'>
            <HoverBorderGradient


        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ml-2 "
      >
            <MenuItem setActive={setActive} active={active} item ='Home'>
            
            </MenuItem></HoverBorderGradient>
            </Link>
            
            <Link href='#'>         
            {/* <HoverBorderGradient



        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
            <MenuItem setActive={setActive} active={active} item ='Courses'>
            
            <div className="flex flex-col space-y-4 text-sm">
            
      
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/#">Basic music theory</HoveredLink>
            <HoveredLink href="/#">Advanced Composition</HoveredLink>
            <HoveredLink href="/#">Music Production</HoveredLink></div>
            
            </MenuItem></HoverBorderGradient> */}
            
            </Link>
            {/* <Link href='/contact'><HoverBorderGradient



        containerClassName="rounded-full "
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 speed 1.8 " 
      >
            <MenuItem setActive={setActive} active={active} item ='History'>
            
            </MenuItem></HoverBorderGradient>
            </Link> */}

            <Link href='/contact'><HoverBorderGradient



        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 speed 1.2"
      >
            <MenuItem setActive={setActive} active={active} item ='Contact Us'>
            
            </MenuItem></HoverBorderGradient>
            </Link>
        
            {/* <Link href='/contact'><HoverBorderGradient



            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 speed 1.2"
            >
                <MenuItem setActive={setActive} active={active} item ='Settings'>
                
                </MenuItem></HoverBorderGradient>
                </Link> */}
                
            <HoverBorderGradient >
                <input type="text" placeholder="Search..." className="bg-black text-white outline-none " />

            </HoverBorderGradient>
            </Menu>
            </div>
        

    )
}
export default  Navbar