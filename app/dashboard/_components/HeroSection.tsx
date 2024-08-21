import Link from "next/link"
import motion from "framer-motion"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
const HeroSection = () => {
    return (
    <div className="min-h-screen p-4 relative z-10 w-full text-center"> 
      <div className="mt-20 h-auto md:h-[40rem] w-full rounded-md flex-col items-center justify-center relative overflow-hidden mx-auto my-10 md:py-10">
          <h1
              className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              >Use AI in all Possible ways</h1>
               <p
              className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
              >Unleash the power of AI to transform your business and streamline your processes. Discover innovative solutions tailored to your needs with cutting-edge technology.</p>
              
              
          <div className="mt-4 flex items-center justify-center relative">
          <Link href='/dashboard'>
            <HoverBorderGradient


        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ml-2 "
      >
            Get Started --></HoverBorderGradient>
            </Link>
          <div>
          
          
      </div>
          </div>
          
          </div>
      </div>
      
    )
  }
  
  export default HeroSection