'use client'
import featuresdata from "@/app/(data)/features.json"
import Link from "next/link"
import { BackgroundGradient } from "../../../components/ui/background-gradient"
import Image from "next/image"
export interface FormField {
    label: string;
    field: string;
    name: string;
    required?: boolean;
  }
  
export interface Course {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiprompt: string;
    slug: string;
    form?: FormField[];
  }

const Features = () => {
    const course = featuresdata.courses.filter((course:Course)=>course.name)

  return (
    <div className="py-12 bg-black">
        <div className="text-center">
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {
                course.map((course:Course)=>(
                    <div key = {course.name} className="flex justify-center ">
                      
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden  max-w-sm sg:max-h-full">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.name}</p>
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.category}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.desc}</p>
                                <Link href={`/dashboard/content/`+course?.slug} className="text-white">
                                Try out
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))
            }
                
            </div>
            </div>

    </div>
  )
}

export default Features