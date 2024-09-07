import BouncingArrow from '@/components/design components/BouncingArrow'
import PageTitleText from '@/components/design components/PageTitleText'
import { TimelineProjects } from '@/components/design components/TimelineProjects'
import React from 'react'

export default function projects() {
  return (
    <div className='flex flex-col space-y-10'>
      <div className=''>
        <PageTitleText 
          text1='PERSONAL'
          text2='PROJECTS'
        />

        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-blue-500 dark:text-white max-w-4xl">
            Follow the Journey!
          </h2>
          <p
            className="text-gray-400 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            With a background in software engineering, particularly in application development and embedded systems, 
            my professional experience has been focused on embedded software development. 
            This has allowed me to direct my personal projects towards web and application development.
          </p>
        </div>
      </div>

      <BouncingArrow />

      <div className='flex flex-col items-center justify-center'>
        <TimelineProjects />
      </div>
    </div>
  )
}
