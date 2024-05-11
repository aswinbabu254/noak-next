"use client"
import { useEffect, useState } from 'react';
import NextImage from '../NextImage';
const Header = () => {
    const [activeHeader, setActiveHeader] = useState(false)
    useEffect(() => {
    window.addEventListener("scroll",()=>{
        window.pageYOffset > 50
          ? setActiveHeader(true)
          : setActiveHeader(false)
    })
    }, [])

  return (
    <header className={`flex justify-center py-6 fixed top-0 left-0 w-full transition duration-300 z-10 border-b  ${activeHeader ? 'bg-white border-[#E9E9E9]' : "border-transparent"}`}>
        <figure className='mb-0'>
            <NextImage width={127} height={25} src='/images/noak.svg' className={`transition-all duration-300 ${activeHeader ? 'brightness-0' : ""}`}/>
        </figure>
    </header>
  )
}

export default Header