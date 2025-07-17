"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const MenuLinks=[
    {id: 1, name: "Become a renter", link:"/"},
    {id: 2, name: "Rental deals", link:"/"},
    {id: 3, name: "How it works", link:"/"},
    {id: 4, name: "Why choose us", link:"/"}
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='px-10 lg:px-24 pt-10 flex items-center justify-between'>
      
      {/* logo div */}
      <div className='flex items-center gap-2'>
        <img src='/images/logo.svg' alt='logo' className='w-6 h-6' />
        <h1 className='font-semibold text-2xl text-[#1572D3] '>RENTCARS</h1>
      </div>

      <div className='hidden lg:flex '>
        <ul className='flex items-center gap-10'>
          {MenuLinks.map((data) => (
            <li key={data.id} className='text-[#484848] font-medium text-base hover:text-[#1572D3] hover:scale-105 transition-colors duration-200 ease-in-out'>
              <Link href={data.link} >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden lg:flex items-center '>
        <ul className='flex items-center gap-1'>
          <button  className='w-[129px] text-[#484848] font-medium text-base cursor-pointer active:scale-95 transition-transform ease-in-out duration-200'>
            <Link href="/">
              Sign In
            </Link>
          </button>
         
          <button className="w-[130px] h-[48px] bg-[#1572D3] text-white p-2 rounded-[8px] font-medium text-base cursor-pointer active:scale-95 transition-transform ease-in-out duration-200 ">
            <Link href="/login">
              Sign Up
            </Link>
          </button>
        </ul>
      </div>
          
          {/* Mobile menu icon */}
      <button
        className="lg:hidden flex items-center cursor-pointer"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        {/* Hamburger icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <rect y="5" width="24" height="2" rx="1" fill="#1572D3"/>
          <rect y="11" width="24" height="2" rx="1" fill="#1572D3"/>
          <rect y="17" width="24" height="2" rx="1" fill="#1572D3"/>
        </svg>
      </button>

       {/* Mobile menu overlay */}
        {menuOpen && (
        <div className="fixed inset-0 bg-[#cccccc6c] bg-opacity-40 z-50 flex">
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
          <div className="bg-white w-4/5 max-w-xs h-full shadow-lg p-6 relative animate-slide-in-right">
            {/* Close icon */}
            <button
              className="absolute top-7 right-4 cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              {/* Close SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <line x1="6" y1="6" x2="18" y2="18" stroke="#1572D3" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="6" x2="6" y2="18" stroke="#1572D3" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Logo */}
            <div className='flex items-center gap-2 mb-6'>
              <img src='/images/logo.svg' alt='logo' className='w-6 h-6' />
              <h1 className='font-semibold text-2xl text-[#1572D3] '>RENTCARS</h1>
            </div>

            {/* Menu links */}
            <ul className='flex flex-col gap-6'>
              {MenuLinks.map((data) => (
                <li key={data.id}>
                <Link
                    href={data.link}
                    className={`text-[#484848] font-medium text-base hover:text-[#1572D3] hover:scale-105 transition-colors duration-200 ease-in-out`}
                    onClick={() => setMenuOpen(false)}
                >
                    {data.name}
                </Link>
                </li>
              ))}
            </ul>
            {/* Join button */}
            <div className='flex items-center mt-7 justify-center '>
              <ul className='flex flex-col items-center gap-8'>
                <button  className='w-[129px] h-[48px] text-[#484848] rounded-[8px] font-medium text-base cursor-pointer active:scale-95 transition-transform ease-in-out duration-200 hover:bg-[#0f5a8c] hover:text-white'>
                  <Link href="/">
                    Sign In
                  </Link>
                </button>
              
                <button className="w-[130px] h-[48px] bg-[#1572D3] text-white p-2 rounded-[8px] font-medium text-base cursor-pointer active:scale-95 transition-transform ease-in-out duration-200 hover:bg-[#0f5a8c]  ">
                  <Link href="/login">
                    Sign Up
                  </Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
