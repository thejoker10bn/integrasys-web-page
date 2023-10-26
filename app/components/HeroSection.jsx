import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='  w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] center'>
                <Image
                    src="/images/LOGITO.png"
                    alt='image'
                    priority={false}
                    className='absolute transform -translate-x-1/2 -traslate-y-1/2 top-1/4 left-1/2 '
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection