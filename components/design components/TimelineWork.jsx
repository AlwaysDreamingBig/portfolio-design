import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ThreeDCardWork } from "./ThreeDCard";
import { projects } from "@/assets/constants";

export function TimelineWork() {
  const data = [
    {
      title: "2023 - present",
      content: (
        <div>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-2 mt-8 px-10">
            I led a three-member team in <span className="font-bold sm:text-black">designing a new feature</span> for the 4G MAG8000 transmitter, successfully delivering the project
            within the timeline.
          </p>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 px-10">
            Eight months later, I was urgently reassigned to <span className="font-bold sm:text-black">upgrade the long-standing</span> (since 2010) 3G MAG8000
            transmitter system, <span className="font-bold sm:text-black">addressing significant client issues</span> to prevent potential partnership breakdowns.
          </p>
          <div className="p-4">
              <ThreeDCardWork 
                company={projects[0].company}
                position={projects[0].position}
                description={projects[0].description}
                img={projects[0].backgroundImage}
                logo={projects[0].logoSM}
                pageLink={projects[0].companyLink} 
                redirectLink={projects[0].link}
              />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-2 mt-8 px-10">
            I worked closely with the support, development, and test teams to <span className="font-bold sm:text-black">analyze faulty electric bus logs, providing detailed
            reports to address client concerns, identify issues,</span> and escalate them to development for resolution.
          </p>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 px-10">
            Initially serving as an
            assistant, I was <span className="font-bold sm:text-black">promoted within four months</span> to manage sites in Grenoble, Paris, and La Rochelle.
          </p>
          <div className="">
            <ThreeDCardWork 
              company={projects[2].company}
              position={projects[2].position}
              description={projects[2].description}
              img={projects[2].backgroundImage}
              logo={projects[2].logoImage}
              pageLink={projects[2].companyLink}
              redirectLink={projects[2].link}
            />
            </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-2 mt-8 px-10">
            I worked on a noise mitigation model on MATLAB and implemented the function on an <span className="font-bold sm:text-black">embedded MCU</span>, including an
            automated input parameters system for users.
          </p>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 px-10">
            I <span className="font-bold sm:text-black">independently handled the function development</span>, showcasing my ability
            to work autonomously and integrate complex systems
          </p>
          <div className="">
            <ThreeDCardWork 
              company={projects[4].company}
              position={projects[4].position}
              description={projects[4].description}
              img={projects[4].backgroundImage}
              logo={projects[4].logoSM}
              pageLink={projects[4].companyLink} 
              redirectLink={projects[4].link}
            />
            </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p
            className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-2 mt-8 px-10">
            Back in 2020 I worked on the <span className="font-bold sm:text-black">design and integration of AI Chatbot</span> for company using Machine & Deep Learnung.
          </p>
          <div className="mb-8">
            <div
              className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm px-16">
              ✅ Machine Learning
            </div>
            <div
              className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm px-16">
              ✅ Deep Learning
            </div>
            <div
              className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm px-16">
              ✅ Development from scratch
            </div>
          </div>
          <div className="">
            <ThreeDCardWork 
              company={projects[3].company}
              position={projects[3].position}
              description={projects[3].description}
              img={projects[3].backgroundImage}
              logo={projects[3].logoImage}
              pageLink={projects[3].companyLink} 
              redirectLink={projects[3].link}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
