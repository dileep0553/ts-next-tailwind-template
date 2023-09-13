// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react'

import { useInterval } from 'react-use'
import { useTheme } from 'next-themes'
import classNames from 'lib/classNames'

interface BigTextProps {
  slides: Array<string>
}

export default function Skills(props: any) {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex flex-col items-center text-2xl font-extrabold tracking-tight pt-14 text-center  '>
      <div className='flex flex-col items-center'>
        {/* <p className='text-2xl tracking-normal sm:text-3xl'>The ultimate</p> */}
        <p className='mt-4 text-2xl tracking-normal sm:text-xl w-1/3'>
          Skills & Technologies
        </p>
        <div className=' text-center rounded-lg sm:h-auto sm:w-full lg:order-last lg:h-auto lg:w-2/3'>
          <img
            alt='Party'
            src={theme == 'dark' ? `img/skills-dark.png` : `img/skills.png`}
            className=' inset-0 h-auto lg:w-full m-auto object-fill'
          />
        </div>
      </div>
    </div>
  )
}
