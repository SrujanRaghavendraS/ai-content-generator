import React from 'react'
import Navbar from './_components/NavBar';
function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='bg-black min-h-screen'>
      <div className="relative w-full flex items-center justify-center "><Navbar className='bg-black'/></div>{children}
      
        
    </div>
    
  )
}

export default layout