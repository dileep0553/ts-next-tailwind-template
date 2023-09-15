import React, { useEffect, useState } from 'react'
import { Typography } from '@material-tailwind/react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import 'react-multi-carousel/lib/styles.css'
// import Slide from 'react-reveal/Slide'
const slideWidth = 20

const _items = [
  {
    player: {
      title: 'Efren Reyes',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'img/cert-1.jpeg',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'img/cert-2.jpeg',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'img/cert-3.jpeg',
    },
  },
  // {
  //   player: {
  //     title: 'Mike Sigel',
  //     desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
  //     image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
  //   },
  // },
  // {
  //   player: {
  //     title: 'Willie Mosconi',
  //     desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
  //     image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
  //   },
  // },
]

export function Cert(...props: any[string]) {
  return (
    <figure className='relative h-96 w-auto'>
      <img
        className='h-full w-full rounded-xl object-cover object-center'
        src={props?.image}
        alt='nature image'
      />
      <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
        <div>
          <Typography variant='h5' color='blue-gray'>
            {props?.headline}
          </Typography>
        </div>
      </figcaption>
    </figure>
  )
}
const CustomButtonGroup = ({
  next,
  previous,
  goToSlide,
  carouselState,
}: any) => {
  const { totalItems, currentSlide } = carouselState
  return (
    <div className='custom-button-group'>
      {/* <div>Current slide is {currentSlide}</div> */}
      <HiArrowNarrowLeft className='swpier_nav' onClick={() => previous()} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <HiArrowNarrowRight className='swpier_nav' onClick={() => next()} />
      {/* <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button> */}
    </div>
  )
}
export default function Certifications() {
  /************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 pb-8 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8'>
        <h3 className='text-3xl text-center my-8 font-semibold'>
          Professional Experience
        </h3>
        <div className=''>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=''
            containerClass='container-padding-bottom'
            customButtonGroup={<CustomButtonGroup />}
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass='cert-item'
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=''
            slidesToSlide={1}
            swipeable
          >
            <img
              draggable={false}
              className='my-6 h-60 w-auto mx-auto rounded-lg object-cover object-center shadow-md shadow-blue-gray-900/50'
              src='img/cert-1.jpeg'
              alt='nature image'
            />
            <img
              draggable={false}
              className='my-6 h-60 w-auto mx-auto rounded-lg object-cover object-center shadow-md shadow-blue-gray-900/50'
              src='img/cert-2.jpeg'
              alt='nature image'
            />
            <img
              draggable={false}
              className='my-6 h-60 w-auto mx-auto rounded-lg object-cover object-center shadow-md shadow-blue-gray-900/50'
              src='img/cert-3.jpeg'
              alt='nature image'
            />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
