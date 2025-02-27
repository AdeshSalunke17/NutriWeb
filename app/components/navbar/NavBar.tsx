import React from 'react'
import style from './Nabar.module.css'
import Image from 'next/image'
import WebLogo from '../../../public/Weblogo.png'
import MobileLogo from '../../../public/mobilelogo.png'
const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white  grid-cols-2 grid h-[77px] z-100">
        <div className="flex justify-center py-2">
            <Image src={WebLogo} alt='' className={`sm:block hidden ${style.webLogo}`}/>
            <Image src={MobileLogo} alt='' className={`block sm:hidden ${style.mobileLogo}`}/>
        </div>
        <div className="flex justify-center py-4">
            <button className={`md:px-12 sm:px-10 py-0 border rounded-md ${style.getAppButton} border-[#21695c] text-[#21695c] md:text-lg sm:text-sm`}>Get App</button>
        </div>
    </div>

  )
}

export default NavBar