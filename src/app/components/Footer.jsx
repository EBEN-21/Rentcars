import React from 'react'

const Footer = () => {
  return (
    <div className='lg:px-[150px] px-4 pt-[51px] mt-2 flex flex-col items-center justify-between bg-[#051C34] relative'>
        
        <div className='flex flex-col lg:flex-row items-start justify-between w-full lg:gap-32 gap-10 '>
            {/* logo and its content */}
            <div className='flex flex-col items-start gap-8 max-w-[195px] '>
                <div className='flex items-center gap-2'>
                    <img src="/footer/logo.svg" width={24} alt="logo pic" />
                    <h1 className='font-bold text-white text-base '>RENTCARS</h1>
                </div>

                <ul className='flex flex-col text-[#D6D6D6] text-sm font-normal gap-6'>
                    <li className='flex items-center gap-2 '>
                        <img src="/footer/location (2).svg" alt="" />
                        <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img src="/footer/call.svg" alt="" />
                        <p>+603 4784 273 12</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img src="/footer/sms.svg" alt="" />
                        <p>rentcars@gmail.com</p>
                    </li>
                </ul>
            </div>

                {/* links */}
            <div className=' w-full flex items-start justify-center lg:gap-24 gap-10 flex-col lg:flex-row'> 
                {/* product */}
                <div className='flex flex-col items-start gap-6 max-w-[140px] '>
                    <h1 className='font-bold text-white text-base '>Our Product </h1>
                    <ul className='flex flex-col text-[#D6D6D6] text-sm font-normal gap-3 mt-5'>
                        <li>Career</li>
                        <li>Car</li>
                        <li>Packages</li>
                        <li>Features</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                 {/* product */}
                <div className='flex flex-col items-start gap-6 max-w-[140px]'>
                    <h1 className='font-bold text-white text-base '>Resources</h1>
                    <ul className='flex flex-col text-[#D6D6D6] text-sm font-normal gap-3 mt-5'>
                        <li>Download</li>
                        <li>Help Centre</li>
                        <li>Guides</li>
                        <li>Partner Network</li>
                        <li>Cruises</li>
                        <li>Developer</li>
                    </ul>
                </div>

                 {/* product */}
                <div className='flex flex-col items-start gap-6 max-w-[140px]'>
                    <h1 className='font-bold text-white text-base '>About Rentcars</h1>
                    <ul className='flex flex-col text-[#D6D6D6] text-sm font-normal gap-4 mt-5'>
                        <li>Why choose us</li>
                        <li>Our Story</li>
                        <li>Investor Relations</li>
                        <li>Press Centre</li>
                        <li>Advertise</li>
                    </ul>
                </div>

                 {/* product */}
                <div className='flex flex-col items-start gap-6 max-w-[140px]'>
                    <h1 className='font-bold text-white text-base '>Follow Us</h1>
                    <ul className='flex  text-[#D6D6D6] text-sm font-normal gap-4 mt-5'>
                        <li>
                            <img src="/footer/facebook.svg" alt="" />
                        </li>
                        <li>
                            <img src="/footer/instagram.svg" alt="" />
                        </li>
                        <li>
                            <img src="/footer/youtube.svg" alt="" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        {/* copyright */}
        <div className=' w-full mt-14 border-t py-6 border-[#575757] '>
            <p className='text-[#D6D6D6] font-normal text-xs '>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
