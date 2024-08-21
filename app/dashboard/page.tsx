import React from 'react';
import Features from '@/app/dashboard/_components/Features';
import Footer from './_components/Footer';
function Dashboard() {
  return (
    <div className="h-100  z-10 w-full text-center mt-20  md:h-[40rem] rounded-md flex-col items-center justify-center  overflow-hidden mx-auto  md:py-10">
      
      <h1
        className="text-7xl  font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 "
      >
        Discover various features of AI
      </h1><div className='h-full'>
      <Features />
      </div>
    </div>
  );
}

export default Dashboard;
