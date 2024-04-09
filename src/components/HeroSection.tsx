import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text from-neutral-50 to-neutral-400'>Master the art of music</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music cources and transform you musical journey today. whether you're beginner or looking for refine your skills, join us to unlock your true potential</p>
            <div className='mt-4'>
                <Link href={'/cources'}>
                    Explore cources
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection