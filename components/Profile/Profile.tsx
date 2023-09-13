import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import Slide from 'react-reveal/Slide'
export default function Profile() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='container-fluid mt-20 px-4 '>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
            My Profile
          </h2>
          {/* <p className='mt-1 text-gray-600 dark:text-gray-400'>
            Stay in the know with insights from industry experts.
          </p> */}
        </div>

        <section>
          <div className='mx-auto max-w-screen-xl px-4 pb-8 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
              <div className='relative  overflow-hidden text-center rounded-lg sm:h-80 lg:order-last lg:h-auto'>
                <img
                  alt='Party'
                  src='img/profile.png'
                  className=' inset-0 h-auto lg:w-full m-auto object-fill'
                />
              </div>

              <div className='lg:py-16'>
                <h2 className='text-2xl font-semibold sm:text-4xl'>About Me</h2>

                <p className='mt-4 text-xl font-medium text-gray-600 dark:text-gray-300'>
                  I'm a React developer based in Austin, TX. With a passion for
                  crafting beautiful and functional user experiences, I
                  specialize in building scalable and responsive web
                  applications using modern web technologies like React, Redux,
                  and Node.js. I constantly strive to learn new skills and stay
                  up-to-date with the latest trends in the industry. When I'm
                  not coding, you can find me exploring the great outdoors or
                  experimenting with new recipes in the kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
