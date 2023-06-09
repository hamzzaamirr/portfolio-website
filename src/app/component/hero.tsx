'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
         I am
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ['Web Developer', 'Graphic Designer','Social Media Marketer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <p className="mb-8 leading-relaxed text-[#20C20E]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum ad officiis aperiam, quo hic fugiat labore consectetur, assumenda ratione dolorum neque modi fugit quibusdam reiciendis soluta, dolorem suscipit eos.
        </p>
        <div className="flex justify-center">
          <Link href={'#Contact'}>
          <button className="inline-flex text-white bg-[#20C20E] border-0 py-2 px-6 focus:outline-none hover:text-black rounded text-lg">
            Contact
          </button>
          </Link>
          <button className="ml-4 inline-flex text-[#20C20E] text-bg-black border-0 py-2 px-6 focus:outline-none hover:text-black hover:bg-[#20C20E] rounded text-lg">
            Info
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          width={450}
          height={450}
    
          src={require('../../../public/pictures/pamela-buenrostro-CSAEI7OGubA-unsplash.jpg')}/>
      </div>
    </div>
  </section>
  
  )
}

export default Hero