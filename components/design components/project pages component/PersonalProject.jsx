import React from 'react'
import { FirstSection } from './FirstSection'
import { SecondSection } from './SecondSection'
import { ThirdSection } from './ThirdSection'
import { FourthSection } from './FourthSection'
import { FifthSection } from './FifthSection'
import { SixthSection } from './SixthSection'
import DemoMobile from './DemoMobile'
import DemoLaptop from './DemoLaptop'
import Improvement from './Improvement'
import MangorianBento from './Summary'
import {SIEMENS} from '../../../constants/projects constants'


const demoContent = (
    <video controls className="w-full h-full">
      <source src="your-video-url.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  export default function PersonalProject() {

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
        <section className='border border-black rounded-lg p-2'>
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

        <section className='border border-black rounded-lg p-2'>
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

        <section className='md:px-48 px-10 py-20 bg-black/40 h-[70vh] mb-10 text-7xl'>
            <p>
                THE BIG TEXT DUNNO WHAT I WILL SAY BUT OK I WILL SAY IT ANYWAY
            </p>
        </section>

        <section className='border border-black rounded-lg p-2'>
            <FifthSection 
              Title1={fifthSection.researchBoxParam.title}
              text={fifthSection.researchBoxParam.description}
              Title2={fifthSection.findingsBoxParam.title}
              list2={fifthSection.findingsBoxParam.list}
            />
        </section>

        <section className='border border-black rounded-lg p-2'>
            <h1 className='text-center text-4xl mb-10'>
                {
                  <div>
                    <p className=''> {sixthSection.headingBoxParam.title} </p>
                    <p className='text-2xl italic text-gray-600 mt-4'> {sixthSection.headingBoxParam.tag} </p>
                  </div>
                }
            </h1>

            <SixthSection 
              data={sixthSection.illustrationBoxes}
            />
        </section>

        <section className='border border-black rounded-lg p-2'>
            <DemoMobile 
                title="My Awesome Project" 
                website="https://example.com" 
                note="This is a demo for the mobile app." 
                demoContent={demoContent}
            />
        </section>

        <section className='border border-black rounded-lg p-2'>
            <DemoLaptop 
                title="My Laptop Demo" 
                demoContent={demoContent} 
            />
        </section>

        <section className='border border-black rounded-lg p-2'>
            <Improvement improvements={improvements} />
        </section>

        <section className='border border-black rounded-lg p-2'>
            <MangorianBento 
                summary={summarySection} 
            />
        </section>
    </div>
  )
}
