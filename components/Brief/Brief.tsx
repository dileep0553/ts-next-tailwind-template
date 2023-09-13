// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react'

import { useInterval } from 'react-use'

import classNames from 'lib/classNames'

interface BigTextProps {
  slides: Array<string>
}

export default function Brief(props: any) {
  return (
    <div className='flex flex-col items-center text-2xl font-extrabold tracking-tight py-14 text-center'>
      <div className='flex flex-col items-center'>
        {/* <p className='text-2xl tracking-normal sm:text-3xl'>The ultimate</p> */}
        <p className='mt-4 text-2xl tracking-normal sm:text-xl w-1/3'>
          React Developer:
        </p>
        <p className='mt-0 font-semibold tracking-normal sm:text-lg w-1/2'>
          Expertise in Crafting Interactive & User-Friendly Web Applications
        </p>
        <p className='my-12 text-xl font-medium  tracking-normal text-tertiary w-4/5'>
          As a React developer, my expertise lies in crafting scalable and
          responsive web applications tailored to varying business needs. Armed
          with a profound understanding of the React ecosystem, I navigate
          complex development challenges with ease and ensure smooth
          integrations across diverse technological landscapes.{'\n'}Throughout
          my career, I've worked with startups and established businesses,
          refining my problem-solving skills to offer practical and innovative
          solutions. Beyond just React, I prioritize continuous learning,
          staying updated with the latest in the ever-changing tech world to
          ensure I always bring the best practices to the table.
        </p>
      </div>
    </div>
  )
}
