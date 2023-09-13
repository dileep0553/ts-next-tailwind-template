'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import Slide from 'react-reveal/Slide'
export default function Header() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [showNav, setShowNav] = useState<boolean>(true)
  const { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img className='h-14 w-auto' src='/img/logo.png' alt='CSDP Logo' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setShowNav(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <Link href='/'>
            <a className='transition-all cursor-pointer hover:text-primary'>
              Home
            </a>
          </Link>
          <Link href='' onClick={event => event.preventDefault()}>
            <a
              className='transition-all opacity-50 hover:text-primary'
              style={{ cursor: 'default', pointerEvents: 'none' }}
            >
              Blog
            </a>
          </Link>
          <Link href='/profile'>
            <a className='transition-all cursor-pointer hover:text-primary'>
              Profile
            </a>
          </Link>
          <Link href='/contact'>
            <a className='transition-all cursor-pointer hover:text-primary'>
              Contact
            </a>
          </Link>
        </div>
        <div className='hidden lg:flex ml-16 lg:justify-end'>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='flex items-center justify-center transition-all mr-5 ring-gray-300'
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                className='w-5 h-5 text-gray-800 dark:text-gray-200'
                style={{ color: '#ff2f30' }}
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
          {/* <a
            href='#'
            style={{ color: '#ff2f30' }}
            className='text-sm font-semibold leading-6 text-primary'
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </a> */}
        </div>
      </nav>

      <div className={`lg:hidden`} role='dialog' aria-modal='true'>
        {/* <div className='fixed inset-0 z-50'></div> */}
        <motion.div
          animate={showNav ? 'open' : 'closed'}
          variants={{
            open: { translateX: 0, opacity: 1 },
            closed: { opacity: 0, translateX: '100%' },
          }}
          className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
        >
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img className='h-12 w-auto' src='/img/logo.png' alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setShowNav(false)}
            >
              <span className='sr-only'>Close menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Link href='/'>
                  <a className='transition-all block cursor-pointer hover:text-primary'>
                    Home
                  </a>
                </Link>
                <Link href='/404'>
                  <a className='transition-all block cursor-pointer hover:text-primary'>
                    Blog
                  </a>
                </Link>
                <Link href='/profile'>
                  <a className='transition-all block cursor-pointer hover:text-primary'>
                    Profile
                  </a>
                </Link>
                <Link href='/contact'>
                  <a className='transition-all block cursor-pointer hover:text-primary'>
                    Contact
                  </a>
                </Link>
              </div>
              <div className='py-6'>
                <button
                  aria-label='Toggle Dark Mode'
                  type='button'
                  className='flex items-center justify-center transition-all mr-5 ring-gray-300'
                  onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                  }
                >
                  {mounted && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      className='w-5 h-5 text-gray-800 dark:text-gray-200'
                      style={{ color: '#ff2f30' }}
                    >
                      {resolvedTheme === 'dark' ? (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                        />
                      ) : (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                        />
                      )}
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </header>
  )
}
