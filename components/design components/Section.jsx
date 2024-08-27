import React from 'react'

const Section = ({children, className}) => {
  return (
    <section className={`${className} px-8 sm:px-14 md:px-20 lg:px-2 xl:px-36 py-2`}>{children}</section>
  )
}

export default Section