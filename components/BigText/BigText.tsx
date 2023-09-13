// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react'

import { useInterval } from 'react-use'

import classNames from 'lib/classNames'

interface BigTextProps {
  slides: Array<string>
}

export default function BigText({ slides }: BigTextProps) {
  const [currentSlide, setSlide] = React.useState(0)

  const totalSlides = slides.length

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0)
    } else {
      setSlide(currentSlide + 1)
    }
  }, 2000)

  return (
    <div className='flex flex-col items-center text-6xl font-extrabold tracking-tight background_position'>
      <div className='flex flex-col items-center'>
        {/* <p className='text-2xl tracking-normal sm:text-3xl'>The ultimate</p> */}
        {slides.map((text, index) => {
          return (
            <span key={text} className='relative block text-center'>
              <span
                className={classNames(
                  'absolute transition duration-1000',
                  currentSlide !== index ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={classNames(
                  'decoration-clone bg-clip-text text-transparent bg-gradient-to-r',
                  index === 0 ? 'from-blue-900 via-blue-100 to-blue-600' : '',
                  index === 1 ? 'from-blue-900 via-blue-100 to-blue-600' : '',
                  index === 2 ? 'from-green-400 to-blue-500' : ''
                )}
              >
                {text}
              </span>
            </span>
          )
        })}
        <p className='mt-4 text-2xl tracking-normal sm:text-3xl'>
          - Front-End Developer
        </p>
        <p className='mt-6 text-lg font-medium tracking-normal text-tertiary'>
          React Developer
          {/* Edit pages/index.tsx to get started. 🚀 */}
        </p>
      </div>
    </div>
  )
}
