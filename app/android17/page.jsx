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
import { ANDROID_17 } from '@/assets/constants/projects'
import { android17 } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import FloatingDemoButton from '@/components/design components/FloatingDemoButton';
import { Spotlight } from '@/components/ui/spotlight';
import { Android17_Desktop_Demo, Android17_Mobile_Demo } from '@/assets/videos';

const demoContent = (
    <video controls className="w-full h-full">
      <source src={Android17_Desktop_Demo} />
      This is the MySQL Database.
    </video>
  );

  const demoContent2 = (
    <video controls className="w-full h-full">
      <source src={Android17_Mobile_Demo} />
      A Quick demonstration of the application.
    </video>
  );

  export default function android_17() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = ANDROID_17.FirstSection;
    const secondSection = ANDROID_17.SecondSection;
    const thirdSection = ANDROID_17.ThirdSection;
    const fourthSection = ANDROID_17.FourthSection;
    const fifthSection = ANDROID_17.FifthSection;
    const sixthSection = ANDROID_17.SixthSection;
    const improvements = ANDROID_17.ImprovementSection;
    const summarySection = ANDROID_17.SummarySection;

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
            src={android17}
            alt="ANDROID_17 image background"
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

      <section className='lg:px-48 px-10 py-20 bg-blue-400 mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            IN A WORLD WHERE GAMING AND DESIGN COLLIDE, CREATING AN IMMERSIVE ONLINE EXPERIENCE IS KEY TO ENGAGING USERS.
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

      <section className='lg:px-48 px-10 py-20 bg-blue-200 mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            WITH SEAMLESS NAVIGATION AND STUNNING VISUALS, THIS PROJECT REDEFINES WHAT A GAMING WEBSITE CAN OFFER.
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <DemoMobile 
              title="Android17 Responsive design" 
              website="https://android-c17.onrender.com" 
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
