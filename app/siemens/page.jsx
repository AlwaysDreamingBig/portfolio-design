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
import { SIEMENS } from '@/assets/constants/projects'
import { flowImg } from '@/assets/images'
import Image from 'next/image';


const demoContent = (
    <video controls className="w-full h-full">
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  export default function PersonalProject() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = SIEMENS.FirstSection;
    const secondSection = SIEMENS.SecondSection;
    const thirdSection = SIEMENS.ThirdSection;
    const fourthSection = SIEMENS.FourthSection;
    const fifthSection = SIEMENS.FifthSection;
    const sixthSection = SIEMENS.SixthSection;
    const improvements = SIEMENS.ImprovementSection;
    const summarySection = SIEMENS.SummarySection;

  return (
    <div className='space-y-20'>

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={flowImg.src}
            alt="siemens image background"
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

      <section className='md:px-48 px-10 py-20 bg-blue-400 h-[70vh] mb-10 text-7xl' data-aos="fade-up">
          <p>
              THE BIG TEXT DUNNO WHAT I WILL SAY BUT OK I WILL SAY IT ANYWAY
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
          <h1 className='text-center text-6xl mb-40'>
              {
                <div>
                  <p className='text-blue-600'> {sixthSection.headingBoxParam.title} </p>
                  <p className='text-2xl italic text-gray-600 mt-10'> {sixthSection.headingBoxParam.tag} </p>
                </div>
              }
          </h1>

          <SixthSection 
            data={sixthSection.illustrationBoxes}
          />
      </section>

      <section className='md:px-48 px-10 py-20 bg-blue-200 h-[70vh] mb-10 text-7xl' data-aos="fade-up">
          <p>
              THE BIG TEXT DUNNO WHAT I WILL SAY BUT OK I WILL SAY IT ANYWAY
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

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
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
