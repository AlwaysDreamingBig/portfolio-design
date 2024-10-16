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
import { HUTCHINSON_PAULSTRA_PROJECT } from '@/assets/constants/projects'
import { paulstraImg1 } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import { Spotlight } from '@/components/ui/spotlight';


const demoContent = (
    <video controls className="w-full h-full">
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  export default function Paulstra() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = HUTCHINSON_PAULSTRA_PROJECT.FirstSection;
    const secondSection = HUTCHINSON_PAULSTRA_PROJECT.SecondSection;
    const thirdSection = HUTCHINSON_PAULSTRA_PROJECT.ThirdSection;
    const fourthSection = HUTCHINSON_PAULSTRA_PROJECT.FourthSection;
    const fifthSection = HUTCHINSON_PAULSTRA_PROJECT.FifthSection;
    const sixthSection = HUTCHINSON_PAULSTRA_PROJECT.SixthSection;
    const improvements = HUTCHINSON_PAULSTRA_PROJECT.ImprovementSection;
    const summarySection = HUTCHINSON_PAULSTRA_PROJECT.SummarySection;

  return (
    <div className='space-y-20'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <ScrollToTopButton />

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={paulstraImg1}
            alt="HUTCHINSON_PAULSTRA_PROJECT image background"
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

      <section className='lg:px-48 px-10 py-20 bg-purple-500 mb-10 xl:text-5xl lg:text-3xl md:text-2xl text-2xl min-h-[50vh] text-center items-center justify-center font-playfair' data-aos="fade-up">
          <p>
            &quot;SOFTWARE DEVELOPMENT FOR MAINTENANCE AND TROUBLESHOOTING OF AN ACTIVE VIBRATION CONTROL SYSTEM FOR HELICOPTERS.&quot;
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

      <section className='lg:px-48 px-10 py-20 bg-purple-200 mb-10 xl:text-5xl lg:text-3xl md:text-2xl text-2xl min-h-[50vh] text-center items-center justify-center font-playfair' data-aos="fade-up">
          <p>
              THROUGH INNOVATIVE SOFTWARE DEVELOPMENT, WE’VE NOT ONLY ENHANCED THE PERFORMANCE OF 
              THE ACTIVE VIBRATION CONTROL SYSTEM BUT ALSO PAVED THE WAY FOR GREATER COMFORT AND SAFETY IN HELICOPTER FLIGHT.
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <Improvement 
            improvements={improvements}
            text='A comprehensive overview of the significant enhancements made across various sectors of the product, highlighting the impact of my contributions and the resulting benefits.' />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <MangorianBento 
              summary={summarySection} 
          />
      </section>
    </div>
  )
}
