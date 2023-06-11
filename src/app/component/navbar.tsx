import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsDownload } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='bg-[#030f01] z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Link href={"#"} > 
      <Image src={require("../../../public/pictures/portfolio.png")} alt='Not found' width={60} height={60} />
      </Link>
      <span className="ml-3 text-xl text-white">Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 text-white hover:text-green-600 ">Home</Link>
      <Link href={"#"} className="mr-5 text-white hover:text-green-600">About</Link>
      <Link  href={"#"} className="mr-5 text-white hover:text-green-600">Skills</Link>
      <Link href={"#"} className="mr-5 text-white hover:text-green-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 text-white hover:text-green-600">Contact</Link>
    </nav>
    <a target='_blank' href="/cv/cvv.pdf">
    <button className="inline-flex items-center text-white bg-[#20C20E] border-0 py-1 px-3 focus:outline-none hover:text-black  rounded text-base mt-4 md:mt-0">Download CV
     
     <BsDownload className='text-lg ml-2'   />
    </button>
    </a>
  </div>
</header>
    </div>
  )
}

export default Navbar