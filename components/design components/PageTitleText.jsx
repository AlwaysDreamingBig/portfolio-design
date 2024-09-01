import React from 'react'
import TextHoverEffect from '@/components/design components/utils/TextHoverEffect'
import TypingText from '@/components/design components/utils/TypingTextEffect'

const PageTitleText = ({text1 = 'Page', text2 = 'Title', hoverColor1 = "rgb(64, 209, 162)", hoverColor2 = "rgb(146, 209, 250)", typingTextColor = "text-purple-400"}) => {
  return (
    <div className="flex flex-col items-center justify-center">    
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h1 className="text-6xl md:text-8xl lg:text-[200px] font-bold text-center">
          <TextHoverEffect
            text={`${text1}`}
            hoverColor={`${hoverColor1}`}
            normalColor="white"
            effectType="vowels" // Applies hover effect to vowels only
          />

          <TextHoverEffect
            text={`${text2}`}
            hoverColor={`${hoverColor2}`}
            normalColor="white"
            effectType="vowels" // Applies hover effect to vowels only
          />
        </h1>
      </div>  

      <h1 className={`text-4xl font-bold ${typingTextColor}`}>
        <TypingText
          texts={[
            "Welcome to My Portfolio...",
            "I'm a Creative Software Engineer...",
            "Let's Build Something Amazing!"
          ]}
          speed={100}
          loop={true} // Set to true if you want looping behavior
          loopCount={1} // The text will loop 3 times
        />
      </h1>
    </div>
  )
}

export default PageTitleText