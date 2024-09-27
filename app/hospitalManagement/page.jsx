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
import { HOSPITAL_MANAGEMENT } from '@/assets/constants/projects'
import { HPMan } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import FloatingDemoButton from '@/components/design components/FloatingDemoButton';


const demoContent = (
    <video controls className="w-full h-full">
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  export default function hospitalManagement() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = HOSPITAL_MANAGEMENT.FirstSection;
    const secondSection = HOSPITAL_MANAGEMENT.SecondSection;
    const thirdSection = HOSPITAL_MANAGEMENT.ThirdSection;
    const fourthSection = HOSPITAL_MANAGEMENT.FourthSection;
    const fifthSection = HOSPITAL_MANAGEMENT.FifthSection;
    const sixthSection = HOSPITAL_MANAGEMENT.SixthSection;
    const improvements = HOSPITAL_MANAGEMENT.ImprovementSection;
    const summarySection = HOSPITAL_MANAGEMENT.SummarySection;

  return (
    <div className='space-y-20'>

      <ScrollToTopButton />
      {/* Floating Button */}
      <FloatingDemoButton />

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={HPMan.src}
            alt="HOSPITAL_MANAGEMENT image background"
            layout="fill"  // This makes the image fill the container
            objectFit="cover"  // Ensures the image covers the area while maintaining aspect ratio
            className="rounded-md"  // Example class, you can replace with your own
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

      <section className='lg:px-48 px-10 py-20 bg-cyan-400 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            A LOOK INTO HOW WE BUILT A SIMPLE, YET EFFECTIVE HOSPITAL
            MANAGEMENT SYSTEM THAT MAKES HEALTHCARE OPERATIONS RUN SMOOTHLY.
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

      <section className='lg:px-48 px-10 py-20 bg-cyan-700 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            THIS PROJECT SHOWS HOW SMART SOFTWARE CAN MAKE A REAL 
            DIFFERENCE IN MANAGING DAILY HOSPITAL TASKS WITH EASE.
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <DemoMobile 
              title="My Awesome Project" 
              website="https://example.com" 
              note="This is a demo for the mobile app." 
              demoContent={demoContent}
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
