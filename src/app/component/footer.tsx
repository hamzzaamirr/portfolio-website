import React from 'react'
import { BsLinkedin, BsTwitter,BsInstagram } from 'react-icons/Bs';
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#030f01]'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/pictures/portfolio.png")} alt='Not found' width={60} height={60} />
      <span className="ml-3 text-xl text-white">portfolio</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Portfolio
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <Link target='_blank' href={'https://www.linkedin.com/in/hamzzaamirr/'} className="text-gray-500">
    <BsLinkedin className='text-2xl ml-1 text-white hover:text-[#20C20E] ' />
      </Link>
      
      <Link target='_blank' href={'https://twitter.com/hamzzaamirr'} className="ml-3 text-gray-500">
       <BsTwitter className='text-2xl ml-1 text-white hover:text-[#20C20E]  ' />
      </Link>
     
      <Link target='_blank' href={'https://www.instagram.com/hamzzaamirr/'} className="ml-3 text-gray-500">
        <BsInstagram className='text-2xl ml-1 text-white hover:text-[#20C20E] ' />
      </Link >
     
    </span>
  </div>
</footer>


    </div>
  )
}

export default Footer