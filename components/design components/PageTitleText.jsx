import React from 'react'
import TextHoverEffect from '@/components/design components/utils/TextHoverEffect'
import TypingText from '@/components/design components/utils/TypingTextEffect'

const PageTitleText = ({
                        text1 = 'Page', 
                        text2 = 'Title', 
                        hoverColor1 = "rgb(64, 209, 162)", 
                        hoverColor2 = "rgb(146, 209, 250)", 
                        typingTextColor = "text-purple-400",
                        typedText = [
                          "Good things come to those who know how to seize them....",
                          "I shall...",
                          "Let's Build Something Amazing!"
                        ]
                      }) => {
  return (
    <div className="flex flex-col items-center justify-center font-nerkoOne">    
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[150px] font-bold text-center">
          <TextHoverEffect
            text={`${text1}`}
            hoverColor={`${hoverColor1}`}
            normalColor="white"
            effectType="vowels" // Applies hover effect to vowels only
          />
        </h1>
        
        <h1 className="text-6xl sm:text-8xl lg:text-9xl xl:text-[150px] font-bold text-center">
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
          texts={typedText}
          speed={100}
          loop={true} // Set to true if you want looping behavior
          loopCount={1} // The text will loop 3 times
        />
      </h1>
    </div>
  )
}

export default PageTitleText