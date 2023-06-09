import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'

export default function Home() {
  return (
   <div className='bg-black'>
    <Hero/>
    <Contact/>
    </div>
  )
}
