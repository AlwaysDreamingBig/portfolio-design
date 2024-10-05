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
import { LANDLORD } from '@/assets/constants/projects'
import { Landlord } from '@/assets/images'
import Image from 'next/image';
import ScrollToTopButton from '@/components/design components/ScrollToTopButton';
import FloatingDemoButton from '@/components/design components/FloatingDemoButton';
import { LandLord_Database, LandLord_Demo } from '@/assets/videos';


const demoContent = (
    <video controls className="w-full h-full">
      <source src={LandLord_Database} type="video/mp4" />
      This is the MongoDB Database + Data Architecture.
    </video>
  );

  const demoContent2 = (
    <video controls className="w-full h-full">
      <source src={LandLord_Demo} type="video/mp4" />
      A Quick demonstration of the Wab Application.
    </video>
  );

  export default function landlord() {

    useEffect(() => {
      AOS.init({
        duration: 1200,  // Animation duration in milliseconds
      });
    }, []);

    const firstSection = LANDLORD.FirstSection;
    const secondSection = LANDLORD.SecondSection;
    const thirdSection = LANDLORD.ThirdSection;
    const fourthSection = LANDLORD.FourthSection;
    const fifthSection = LANDLORD.FifthSection;
    const sixthSection = LANDLORD.SixthSection;
    const improvements = LANDLORD.ImprovementSection;
    const summarySection = LANDLORD.SummarySection;

  return (
    <div className='space-y-20'>

      <ScrollToTopButton />
      {/* Floating Button */}
      <FloatingDemoButton />

      <section>
        {/* Image with responsive behavior */}
        <div className="relative w-full h-[90vh] "> {/* Adjust height based on needs */}
          <Image
            src={Landlord}
            alt="LANDLORD image background"
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

      <section className='lg:px-48 px-10 py-20 bg-red-600 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            "THE REAL ESTATE WEB APP IS A FULL-STACK SOLUTION BUILT 
            TO SIMPLIFY PROPERTY LISTINGS, USER MANAGEMENT AND ACTIONS USING REACT, REDUX, AND MONGODB."
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

      <section className='lg:px-48 px-10 py-20 bg-red-400 min-h-[70vh] mb-10 xl:text-7xl lg:text-6xl md:text-5xl text-5xl' data-aos="fade-up">
          <p>
            "THIS PROJECT SHOWCASES THE POTENTIAL OF MODERN WEB TECH TO CREATE A SCALABLE AND EFFICIENT PLATFORM."
          </p>
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up">
          <DemoMobile 
              title="Exploring the Data structure of My Real Estate WebApp" 
              website="" 
              note="In this video, I present the database architecture of my MERN stack Real Estate Web Application. I will walk you through the essential collections, including property listings, user accounts, inquiries, and transaction histories. You'll discover how these collections interact to provide a seamless user experience for buyers, sellers, and agents alike. This presentation highlights the relationships between the collections and the design decisions that optimize the app's performance, making it an insightful resource for developers and aspiring web developers interested in building scalable applications." 
              demoContent={demoContent}
          />
      </section>

      <section className='border border-black rounded-lg p-2' data-aos="fade-up" id="demo">
          <DemoLaptop 
              title="My Laptop Demo" 
              demoContent={demoContent2} 
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
