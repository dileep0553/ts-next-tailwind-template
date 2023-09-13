import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Link from 'next/link'

import Footer from 'components/Footer/Footer'
import cn from 'lib/classNames'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Container(props: any) {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const { children, ...customMeta } = props
  const router = useRouter()

  const meta = {
    title: 'Template name',
    description: 'Template description',
    image:
      'https://cdn.discordapp.com/attachments/797485737272541250/893912493255176192/UnicornVectorGradient_7.png',
    type: 'website',
    ...customMeta,
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  // if (mounted && theme)
  return (
    <>
      <div
        className={cn(
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none',
          mounted && theme == 'light' ? 'light_bg_image' : 'dark_bg_image'
        )}
      >
        <Head>
          <meta name='robots' content='follow, index' />
          <meta
            property='og:url'
            content={`https://template.cretu.dev/${router.asPath}`}
          />
          <link
            rel='canonical'
            href={`https://template.cretu.dev/${router.asPath}`}
          />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Cristian Crețu' />
          <meta property='og:description' content={meta.description} />
          <meta property='og:title' content={meta.title} />
          <meta property='og:image' content={meta.image} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@cristicrtu' />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta name='twitter:image' content={meta.image} />
          {meta.date && (
            <meta property='article:published_time' content={meta.date} />
          )}
        </Head>

        {/* <nav className='sticky w-full bg-gray-100/40 z-[1] filter-blur dark:bg-gray-1000/40 top-2 md:top-4 max-w-2xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
          <div className='flex flex-row gap-1 text-tertiary'>
            <Link href='/'>
              <a className='transition-all cursor-pointer hover:text-primary'>
                Home
              </a>
            </Link>
            <Link href='/404'>
              <a className='transition-all cursor-pointer hover:text-primary'>
                404
              </a>
            </Link>
          </div>
          <div className='flex flex-row items-center space-x-4'>
            <a
              href='https://github.com/cristicretu/'
              className='visible'
              target='_blank'
              rel='noreferrer'
              aria-label='Github'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                className='text-gray-900 transition-all duration-500 fill-current dark:text-white dark:text-opacity-40 dark:hover:text-opacity-100 text-opacity-40 hover:text-opacity-100 '
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </div>
        </nav> */}
        {/* <video
          style={{ filter: `blur(5px)`, WebkitFilter: `blur(5px)` }}
          autoPlay={true}
          loop={true}
          muted
          id='video-id'
          className='video'
        >
          <source src={'img/bg2.mp4'} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        <main
          className={cn(
            'px-4 mt-12',
            'max-w-2xl',
            'mx-auto my-auto',
            'flex flex-col justify-center gap-12',
            'divide-y divide-gray-200 dark:divide-gray-900',
            'rounded-lg'
          )}
        >
          <div>{children}</div>
          {/* <footer>
            <Footer />
          </footer> */}
        </main>
      </div>
    </>
  )
}
