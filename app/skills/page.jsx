import AboutPage from '@/components/design components/About page components/AboutPage'
import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

export default function skills() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <AboutPage />
    </>
  )
};
