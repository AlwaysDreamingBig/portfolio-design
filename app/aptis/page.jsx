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
import { ALSTOM_APTIS_PROJECT } from '@/assets/constants/projects'
import { aptisBus } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';


const demoContent = (
    <video controls className="w-full h-full">
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  export default function android_17() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = ALSTOM_APTIS_PROJECT.FirstSection;
    const secondSection = ALSTOM_APTIS_PROJECT.SecondSection;
    const thirdSection = ALSTOM_APTIS_PROJECT.ThirdSection;
    const fourthSection = ALSTOM_APTIS_PROJECT.FourthSection;
    const fifthSection = ALSTOM_APTIS_PROJECT.FifthSection;
    const sixthSection = ALSTOM_APTIS_PROJECT.SixthSection;
    const improvements = ALSTOM_APTIS_PROJECT.ImprovementSection;
    const summarySection = ALSTOM_APTIS_PROJECT.SummarySection;

  return (
    <div className='space-y-20'>

      <ScrollToTopButton />

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={aptisBus.src}
            alt="ALSTOM_APTIS_PROJECT image background"
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

      <section className='lg:px-48 px-10 py-20 bg-yellow-700 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
              APTIS BUS IS AN ELECTRICAL BUS DESIGNED BY ALSTOM,
              THEY ARE ROBUST AND BASED ON THE INTERACTION OF MULTIPLE MCUs 
              AND A SINGLE CENTRAL UNIT.
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

      <section className='lg:px-48 px-10 py-20 bg-yellow-400 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
              
            "IT IS CRUCIAL TO CONDUCT PRECISE ANALYSES IN ORDER TO DETERMINE
            THE CONTEXT OF INCIDENTS AND DEDUCE THE CAUSE<span className='hidden sm:block'> AND RESPONSIBILITIES</span> OF THE DIFFERENT PARTIES."
          </p>
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
