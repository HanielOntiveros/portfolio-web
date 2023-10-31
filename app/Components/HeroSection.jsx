import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-2'>
        <div className='col-span-7  place-self-center'>
            <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello I'm Haniel</h1>
            <p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum is a placeholder text commonly used in the printing and typesetting industry. It's used to demonstrate the visual form of a document without actually using meaningful content. </p>
        </div>
        <div className='col-span-5'>

        </div>
        </div>
    </section>
  )
}

export default HeroSection
