import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import Slide from 'react-reveal/Slide'

export default function Timeline() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='container-fluid mt-20 px-4 '>
      <section className=' dark:text-gray-100'>
        <div className='container max-w-5xl px-4 py-12 mx-auto'>
          <div className='grid gap-4 mx-4 sm:grid-cols-12'>
            <div className='col-span-12 sm:col-span-3'>
              <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
                <h3 className='text-3xl font-semibold'>
                  Professional Experience
                </h3>
                <span className='text-sm font-bold tracki uppercase dark:text-gray-400'>
                  Vestibulum diam nunc
                </span>
              </div>
            </div>
            <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
              <ol className='relative border-l border-gray-200 dark:border-gray-700'>
                <li className='mb-10 ml-6'>
                  <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                    <svg
                      className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                    </svg>
                  </span>
                  <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                    Frontend Developer - SICL America Inc{' '}
                    <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3'>
                      Present
                    </span>
                  </h3>
                  <time className='block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300'>
                    September, 2022 - Present
                  </time>
                  <p className='mb-4 text-base font-normal mt-5 text-gray-500 dark:text-gray-400'>
                    Develop and maintain scalable and responsive web
                    applications using React, Redux, and Node.js. Work
                    collaboratively with cross-functional teams including
                    designers, product managers, and QA engineers to deliver
                    high-quality software products that meet business
                    requirements and exceed user expectations.
                  </p>
                  {/* <a
                    href='#'
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                  >
                    <svg
                      className='w-3.5 h-3.5 mr-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
                      <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
                    </svg>{' '}
                    Download ZIP
                  </a> */}
                </li>
                <li className='mb-10 ml-6'>
                  <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                    <svg
                      className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                    </svg>
                  </span>
                  <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                    React Developer - Prowess Publishing & Software Solutions.
                  </h3>
                  <time className='block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300'>
                    January, 2021 - August, 2021
                  </time>
                  <p className='text-base font-normal mt-5 text-gray-500 dark:text-gray-400'>
                    Built and maintained visually appealing and user-friendly
                    websites using HTML, CSS, JavaScript, and jQuery. Worked
                    closely with designers to ensure pixel-perfect
                    implementation of design specifications. Conducted usability
                    testing and implemented user feedback to continuously
                    improve the user experience.
                  </p>
                </li>
                <li className='mb-10 ml-6'>
                  <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                    <svg
                      className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                    </svg>
                  </span>
                  <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                    Web Developer - Nipun Net Solutions Pvt Ltd.
                  </h3>
                  <time className='block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300'>
                    April, 2017 - December, 2020
                  </time>
                  <p className='text-base font-normal mt-5 text-gray-500 dark:text-gray-400'>
                    Designed and developed custom WordPress websites for clients
                    in various industries. Collaborated with clients to
                    understand their business needs and translate them into
                    effective web solutions. Maintained websites and provided
                    ongoing technical support.
                  </p>
                </li>
                <li className='mb-10 ml-6'>
                  <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
                    <svg
                      className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                    </svg>
                  </span>
                  <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                    UI Developer - HCL Technologies.
                  </h3>
                  <time className='block mb-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-300'>
                    April, 2016 - March, 2017
                  </time>
                  <p className='text-base font-normal mt-5 text-gray-500 dark:text-gray-400'>
                    Designed visually compelling and responsive websites using
                    HTML, CSS, and JavaScript. Conducted user research and
                    created wireframes and prototypes to guide the design
                    process. Worked to ensure seamless implementation of design.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
