import BouncingArrow from '@/components/design components/BouncingArrow'
import PageTitleText from '@/components/design components/PageTitleText'
import ScrollToTopButton from '@/components/design components/ScrollToTopButton'
import { TimelineWork } from '@/components/design components/TimelineWork'
import React from 'react'

export default function work() {
  return (
    <div className='flex flex-col space-y-10'>
      <ScrollToTopButton />

      <div className=''>
        <PageTitleText 
          text1='WORK'
          text2='EXPERIENCE'
        />

        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-blue-500 dark:text-white max-w-4xl">
            Timeline of my journey!
          </h2>
          <p
            className="text-gray-400 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            I&apos;ve been working on for several brands since year 2020, this is a recap of my experiences.
          </p>
        </div>
      </div>

      <BouncingArrow />

      <div className='flex flex-col items-center justify-center'>
        <TimelineWork />
      </div>
    </div>
  )
}
