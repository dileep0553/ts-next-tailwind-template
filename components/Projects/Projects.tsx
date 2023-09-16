import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import Slide from 'react-reveal/Slide'
export default function Projects() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className='container-fluid px-4 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
            My Projects
          </h2>
          <p className='mt-1 text-gray-600 dark:text-gray-400'>
            Stay in the know with insights from industry experts.
          </p>
        </div>
        <section>
          <div className='mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8'>
            <div className='grid grid-cols-1 gap-8'>
              <div className='lg:pt-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                  <h2 className='text-2xl font-bold sm:text-2xl'>
                    Business Landing Site
                  </h2>

                  <p className='text-gray-600 dark:text-gray-300'>
                    I have crafted a landing page for a client using React and
                    Redux that ensures optimal user engagement and conversion.
                    The page boasts a contemporary and user-friendly design,
                    effortless navigation, and a responsive layout ensuring
                    perfect display across all devices, from desktops to
                    smartphones.
                  </p>
                </div>
              </div>
              <div className='relative grid md:grid-cols-2 rounded-lg  lg:order-last '>
                <div>
                  <img
                    alt='Party'
                    src='img/p2-1.png'
                    className='p-1 h-auto  object-fill lg:w-full'
                  />
                  <img
                    alt='Party'
                    src='img/p2-4.png'
                    className='p-1 h-auto  object-fill lg:w-full'
                  />
                </div>
                <div>
                  <img
                    alt='Party'
                    src='img/p2-2.png'
                    className='p-1   object-fill lg:w-full'
                  />
                  <img
                    alt='Party'
                    src='img/p2-3.png'
                    className='p-1 object-fill lg:w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <b
          className={`${
            mounted && theme == 'dark' ? 'dark-hr' : ''
          } hr anim w-4/5 py-10 md:py-16`}
        ></b>
        <section>
          <div className='mx-auto max-w-screen-xl px-4 sm:px-6  lg:px-8'>
            <div className='grid grid-cols-1 gap-8'>
              <div className='lg:pt-12'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                  <h2 className='text-2xl font-bold sm:text-2xl'>Easyreadz</h2>

                  <p className='text-gray-600 dark:text-gray-300'>
                    I have built an easy-to-use e-book desktop application.With
                    a sleek, user-friendly interface, Experience seamless
                    reading, and make use of handy features like bookmarks and
                    notes. Shop the latest titles securely, and your reading
                    progress syncs across devices. Dive into literature
                    effortlessly from your desktop.
                  </p>
                </div>
              </div>
              <div className='relative grid md:grid-cols-2 rounded-lg  lg:order-last '>
                <div>
                  <img
                    alt='Party'
                    src='img/p3-1.jpg'
                    className=' h-auto p-1 object-fill lg:w-full'
                  />
                  <img
                    alt='Party'
                    src='img/p3-4.jpg'
                    className=' h-auto p-1 object-fill lg:w-full'
                  />
                </div>
                <div>
                  <img
                    alt='Party'
                    src='img/p3-2.jpg'
                    className=' p-1  object-fill lg:w-full'
                  />
                  <img
                    alt='Party'
                    src='img/p3-3.jpg'
                    className='p-1 object-fill lg:w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <b
          className={`${
            mounted && theme == 'dark' ? 'dark-hr' : ''
          } hr anim w-4/5 py-10 md:py-16`}
        ></b>
        <section>
          <div className='mx-auto max-w-screen-xl px-4 pb-8 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
              <div className='relative h-80 overflow-hidden text-center rounded-lg sm:h-80 lg:order-last lg:h-80'>
                <img
                  alt='Party'
                  src='img/p1.png'
                  className=' inset-0 h-full w-auto m-auto object-fill'
                />
              </div>

              <div className='lg:py-12'>
                <h2 className='text-2xl font-bold sm:text-2xl'>
                  Rate Your Visit
                </h2>

                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                  I have built a platform for professionals. Utilizing
                  location-based features, pinpoint exact offices you've visited
                  and navigate effortlessly with Google Maps integration. Share
                  ratings, gain insights from peers, and plan your next business
                  visit with ease. Enhance every corporate encounter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
