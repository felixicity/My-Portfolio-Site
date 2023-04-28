'use client'
import React from 'react'
import { FaTimes , FaBars} from 'react-icons/fa'
import {useState,useEffect} from 'react'
import Link from 'next/link'

const Navigation = () => {
    const [isShown, setIsShown] = useState(false)

    const toggleDisplay = () => {
        setIsShown(prevShow => !prevShow)
    }



useEffect(()=>{
    if (typeof window !== 'undefined') {
        console.log(window.innerWidth);
        const windowWidth = window.innerWidth
        if (windowWidth > 700) {
          setIsShown(true);
        }
      }
},[])

    
    

  return (
             <>
                {isShown ?  <nav className = 'mobile-nav transition-all duration-3000 fixed lg:menu-nav lg:relative'>
                    <FaTimes className='absolute text-2xl right-0 m-16 cursor-pointer hover:text-gray-500 md:m-8 lg:collapse' onClick={toggleDisplay}/>
                    <ul className='flex flex-col py-24 h-2/3 list-none cursor-pointer md:items-center justify-between  lg:flex-row lg:p-0 lg:h-0 lg:w-96 lg:ml-72'>
                        <Link href="/"><li className='py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2 lg:border-purple-800 lg:hover:bg-transparent'>Home</li> </Link>
                        <Link href="#about"><li className='py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2  lg:border-purple-800 lg:hover:bg-transparent onClick={setIsShown(false)'>About</li></Link>
                        <Link href="#project"><li className='py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2  lg:border-purple-800 lg:hover:bg-transparent'>Projects</li> </Link>
                        <Link href="#skills"><li className='py-4 pl-8 hover:bg-slate-500 transition-all duration-300 delay-75 ease-in lg:p-0 lg:ml-12 lg:hover:border-b-2  lg:border-purple-800 lg:hover:bg-transparent'>Skills</li> </Link> 
                    </ul>
                </nav> :
                <FaBars className='absolute text-2xl left-0 ml-5 mt-1 cursor-pointer hover:text-gray-500 lg:collapse' onClick={toggleDisplay} /> 
                }
             </>
    )
}

export default Navigation