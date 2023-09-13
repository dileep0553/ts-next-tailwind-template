import React, { useEffect, useState, RefObject, useRef } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
// import LinkedInProfileBadge from 'react-linkedin-profile-badge'
import { Input, Button, Textarea } from '@material-tailwind/react'
import emailjs from '@emailjs/browser'

export function GitHubCard() {
  const [user, setUser] = useState<any>({})
  useEffect(() => {
    const URL = 'https://api.github.com/users/dileep0553'
    fetch(URL)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setUser(result)
      })
  }, [])
  return (
    <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-xs sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white border border-slate-100 border-t-transparent rounded-lg text-gray-900'>
      <div className='rounded-t-lg h-20 overflow-hidden'>
        <img
          className='object-cover object-top w-full'
          src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
          alt='Mountain'
        />
      </div>
      <div className='mx-auto w-20 h-20 relative -mt-10 border-4 border-white rounded-full overflow-hidden'>
        <img
          className='object-cover object-center h-32'
          src={user?.avatar_url}
          alt='Woman looking front'
        />
      </div>
      <div className='text-center mt-0'>
        <h2 className='font-semibold'>{user?.name}</h2>
        <p className='text-gray-500 text-sm'>{user?.login}</p>
      </div>
      <ul className='py-2 mt-0 text-gray-700 flex gap-1 items-center justify-around'>
        <li className='inline-block items-center justify-around'>
          <svg
            className='w-4 fill-current text-blue-900 inline'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z' />
          </svg>
          <span className='text-xs inline px-1'>Following</span>
          <div>{user?.following}</div>
        </li>
        <li className='inline-block items-center justify-between'>
          <svg
            className='w-4 fill-current text-blue-900 inline'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z' />
          </svg>
          <span className='text-xs inline px-1'>Followers</span>
          <div>{user?.followers}</div>
        </li>
        <li className='inline-block items-center justify-around'>
          <svg
            className='w-4 fill-current text-blue-900 inline'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
          </svg>
          <span className='text-xs inline px-1'>Repos</span>
          <div>{user?.public_repos}</div>
        </li>
      </ul>
      <div className='p-2 border-t mx-8 mt-0'>
        <a
          href={`${user?.html_url}`}
          target='_blank'
          className='w-min whitespace-nowrap block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2'
        >
          View Profile
        </a>
      </div>
    </div>
  )
}

export function LinkedInBadge() {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <div
        className='badge-base LI-profile-badge'
        data-locale='en_US'
        data-size='large'
        data-theme='light'
        data-type='HORIZONTAL'
        data-vanity='chandra-pasumarthi-501278117'
        data-version='v1'
      >
        {/* <a
          className='badge-base__link LI-simple-link'
          href='https://www.linkedin.com/in/chandra-pasumarthi-501278117?trk=profile-badge'
        >
          chandra pasumarthi
        </a> */}
      </div>

      {/* <div
        class='badge-base LI-profile-badge'
        data-locale='en_US'
        data-size='medium'
        data-theme='light'
        data-type='VERTICAL'
        data-vanity='YOUR_OWN_VANITY_HERE'
        data-version='v1'
      >
        <a
          class='badge-base__link LI-simple-link'
          href='https://au.linkedin.com/in/YOUR_PROFILE_HERE?trk=profile-badge'
        />
      </div> */}
    </div>
  )
}

export default function ContactTitle() {
  const form = useRef<any>()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => setMounted(true), [])

  const sendEmail = (e: any) => {
    e.preventDefault()
    console.log(form.current)
    emailjs
      .sendForm(
        'service_u20iwpc',
        'template_enmi4ry',
        form.current,
        '_rhZIfBssSHhY-T4U'
      )
      .then(
        result => {
          console.log(result.text)
          setIsSuccess(true)
          form.current.reset()
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='container-fluid mt-20 px-4 '>
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        {/* <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
            My Profile
          </h2>
        </div> */}

        <section>
          <div className='mx-auto max-w-screen-xl px-4 pb-8 my-20 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8'>
            <div className='grid grid-cols-1'>
              <div className='relative text-center   '>
                <img
                  alt='Party'
                  src='img/contact_bg.gif'
                  className='animate-jump animate-once inset-0 h-auto sm:w-full lg:w-2/3 m-auto shadow-lg rounded-md shadow-slate-300 dark:shadow-gray-500 object-fill'
                />
              </div>

              <div className='lg:py-0'>
                <h2 className='text-center'>
                  <span className='contact_title text-5xl relative bottom-6 sm:bottom-8 font-semibold sm:text-6xl  bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-red-600'>
                    Contact Me
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className='my-20 '>
          <div className='grid grid-cols-2 justify-center'>
            <div className='linkedinItem'>
              <motion.div
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className='card'
                  variants={{
                    offscreen: {
                      x: -300,
                      opacity: 0,
                    },
                    onscreen: {
                      x: 0,
                      opacity: 1,
                      rotate: 0,
                      transition: {
                        type: 'spring',
                        bounce: 0.4,
                        duration: 1,
                      },
                    },
                  }}
                >
                  <LinkedInBadge />
                  {/* <LinkedInProfileBadge
                    profileId='chandra-pasumarthi-501278117'
                    size='large'
                    locale='en_US'
                    orientation='horizontal'
                    version='v1'
                  /> */}
                </motion.div>
              </motion.div>
            </div>
            <div className='text-center'>
              <motion.div
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className='card'
                  variants={{
                    offscreen: {
                      x: 300,
                      opacity: 0,
                    },
                    onscreen: {
                      x: 0,
                      opacity: 1,
                      rotate: 0,
                      transition: {
                        type: 'spring',
                        bounce: 0.4,
                        duration: 1,
                      },
                    },
                  }}
                >
                  <GitHubCard />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className='my-8 px-6 py-10 relative'>
          <p className='my-4 text-2xl tracking-normal font-semibold sm:text-4xl text-center'>
            Send me an email
          </p>
          <form
            className='mt-8 mb-2 w-full max-w-screen-lg lg:w-2/3 mx-auto'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='grid grid-cols-2 gap-8 '>
              <div className='grid grid-rows-3 gap-8'>
                <Input
                  className='focus:shadow-none'
                  crossOrigin=''
                  color={mounted && theme == 'dark' ? 'white' : 'gray'}
                  name='name'
                  size='lg'
                  label='Name'
                  required
                />
                <Input
                  className='focus:shadow-none'
                  crossOrigin=''
                  color={mounted && theme == 'dark' ? 'white' : 'gray'}
                  name='email'
                  type='email'
                  size='lg'
                  label='Email'
                  required
                />
                <Input
                  className='focus:shadow-none'
                  crossOrigin=''
                  color={mounted && theme == 'dark' ? 'white' : 'gray'}
                  name='phone'
                  type='number'
                  size='lg'
                  label='Phone (optional)'
                  defaultValue={''}
                />
              </div>
              <div>
                <Textarea
                  name='message'
                  className='focus:shadow-none h-full min-h-[215px] dark:border-white dark:border-t-transparent dark:placeholder-shown:border-blue-gray-200 dark:text-white  dark:bg-black focus:dark:border-b-white focus:dark:border-l-white focus:dark:border-r-white focus:dark:border-t-transparent'
                  labelProps={{
                    className: `${
                      mounted && theme == 'dark' ? 'dark_textarea_label' : ''
                    } dark:before:border-white dark:after:border-white`,
                  }}
                  label='Message'
                  required
                  typeof='string'
                />
              </div>
            </div>
            <div className='my-4 text-center'>
              <button className='m-4 p-1 rounded-full from-red-500  to-blue-600 bg-gradient-to-r'>
                <span className='block text-black dark:text-white px-8 py-2 font-semibold rounded-full bg-white dark:bg-black'>
                  Send Email
                </span>
              </button>
            </div>
          </form>
          {isSuccess && (
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div
                id='toast-success'
                className='animate-jump flex flex-col items-center w-auto p-10 mb-4 text-gray-500 bg-white/75 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800/90'
                role='alert'
              >
                <div className='block hover:animate-jump items-center justify-center flex-shrink-0 w-28 h-28 text-green-500 bg-green-100/80 rounded-lg dark:bg-green-800/80 dark:text-green-200'>
                  <svg
                    className='m-4 w-20 h-20'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                  </svg>
                  <span className='sr-only'>Check icon</span>
                </div>
                <div className='mt-3 block text-sm font-normal'>
                  Email sent successfully.
                </div>
                <button
                  type='button'
                  className='ml-auto absolute right-4 top-4 -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white '
                  data-dismiss-target='#toast-success'
                  aria-label='Close'
                  onClick={() => setIsSuccess(false)}
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
