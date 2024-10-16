"use client";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import { FirstSection } from '@/components/design components/project pages component/FirstSection'
import { SecondSection } from '@/components/design components/project pages component/SecondSection'
import { ThirdSection } from '@/components/design components/project pages component/ThirdSection'
import { FourthSection } from '@/components/design components/project pages component/FourthSection'
import { FifthSection } from '@/components/design components/project pages component/FifthSection'
import { SixthSection } from '@/components/design components/project pages component/SixthSection'
import DemoMobile from '@/components/design components/project pages component/DemoMobile'
import DemoLaptop from '@/components/design components/project pages component/DemoLaptop'
import Improvement from '@/components/design components/project pages component/Improvement'
import MangorianBento from '@/components/design components/project pages component/Summary'
import { BUNNY_SHOES } from '@/assets/constants/projects'
import { ShoeStore1 } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import FloatingDemoButton from '@/components/design components/FloatingDemoButton';
import { Spotlight } from '@/components/ui/spotlight';
import { BunnyShoes_Desktop_Demo, BunnyShoes_Mobile_Demo } from '@/assets/videos';


const demoContent = (
    <video controls className="w-full h-full">
      <source src={BunnyShoes_Desktop_Demo} />
      This is the MySQL Database.
    </video>
  );

  const demoContent2 = (
    <video controls className="w-full h-full">
      <source src={BunnyShoes_Mobile_Demo} />
      A Quick demonstration of the application.
    </video>
  );

  export default function Bunnyshoes() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = BUNNY_SHOES.FirstSection;
    const secondSection = BUNNY_SHOES.SecondSection;
    const thirdSection = BUNNY_SHOES.ThirdSection;
    const fourthSection = BUNNY_SHOES.FourthSection;
    const fifthSection = BUNNY_SHOES.FifthSection;
    const sixthSection = BUNNY_SHOES.SixthSection;
    const improvements = BUNNY_SHOES.ImprovementSection;
    const summarySection = BUNNY_SHOES.SummarySection;

  return (
    <div className='space-y-20'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            
      <ScrollToTopButton />
      {/* Floating Button */}
      <FloatingDemoButton />

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={ShoeStore1}
            alt="BUNNY_SHOES image background"
            fill
            className="rounded-md"  // Example class, you can replace with your own
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <FirstSection 
            BigTitle={firstSection.titleBoxParams.title}
            Tag={firstSection.titleBoxParams.tag}
            Text={firstSection.descriptionBoxParams.description}
          />

          <SecondSection 
            Title1={secondSection.delivrableBoxParam.title}
            Title2={secondSection.rolesBoxParam.title}
            Title3={secondSection.specificationsBoxParam.title}
            Description1={secondSection.delivrableBoxParam.description}
            Description2={secondSection.rolesBoxParam.description}
            Description3={secondSection.specificationsBoxParam.description}
            list1={secondSection.delivrableBoxParam.list}
            list2={secondSection.rolesBoxParam.list}
            list3={secondSection.specificationsBoxParam.list}
          />
      </section>  

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <ThirdSection
            Overview={thirdSection.overviewBoxParam.title}
            Text1={thirdSection.overviewBoxParam.text1}
            Text2={thirdSection.overviewBoxParam.text2}
          />
      </section>

      <section className='border border-black rounded-lg p-2'>
          <FourthSection 
            Title1={fourthSection.problemsBoxParam.title}
            Title2={fourthSection.solutionsBoxParam.title}
            list1={fourthSection.problemsBoxParam.list}
            list2={fourthSection.solutionsBoxParam.list}
          />
      </section>

      <section className='lg:px-48 px-10 py-20 bg-blue-300 mb-10 xl:text-5xl lg:text-3xl md:text-2xl text-2xl min-h-[50vh] text-center items-center justify-center font-playfair' data-aos="fade-up">
          <p>
            A WELL-CRAFTED PLATFORM IS ESSENTIAL FOR BRINGING FASHION AND 
            FEATURE TOGETHER IN ONE SEAMLESS SHOPPING EXPERIENCE
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <FifthSection 
            Title1={fifthSection.researchBoxParam.title}
            text={fifthSection.researchBoxParam.description}
            Title2={fifthSection.findingsBoxParam.title}
            list2={fifthSection.findingsBoxParam.list}
          />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <h1 className='text-center mb-40'>
              {
                <div>
                  <p className='text-blue-600 sm:text-6xl text-4xl text-center'> {sixthSection.headingBoxParam.title} </p>
                  <p className='text-2xl italic text-gray-600 mt-10'> {sixthSection.headingBoxParam.tag} </p>
                </div>
              }
          </h1>

          <SixthSection 
            data={sixthSection.illustrationBoxes}
          />
      </section>

      <section className='lg:px-48 px-10 py-20 bg-blue-200 mb-10 xl:text-5xl lg:text-3xl md:text-2xl text-2xl min-h-[50vh] text-center items-center justify-center font-playfair' data-aos="fade-up">
          <p>
            WITH AN INTUITIVE INTERFACE AND SLEEK DESIGN, 
            BUNNYSHOES SETS A NEW STANDARD FOR E-COMMERCE ON DESKTOP.
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <DemoMobile 
              title="BunnyShoes Shop design" 
              website="https://bunnyshoeswebsite-tjs.onrender.com" 
              note="Please note that the link is redirecting to the render free tier hosting platform: thus it will take around 1 minute for the servers to launch. Thank you for your understanding." 
              demoContent={demoContent2}
          />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up" id="demo">
          <DemoLaptop 
              title="My Laptop Demo" 
              demoContent={demoContent} 
          />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <Improvement improvements={improvements} />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <MangorianBento 
              summary={summarySection} 
          />
      </section>
    </div>
  )
}
