"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem, link } from "../ui/3d-card";

export function ThreeDCardWork({company, position, description, img, logo, pageLink, redirectLink}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white">
          {position}
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-base font-bold text-neutral-600 dark:text-white">
          {company}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={pageLink}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs bg-black font-normal dark:text-white hover:opacity-80">
              <Image
                src={logo}
                height="1000"
                width="1000"
                className="h-10 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
          </CardItem>

          <CardItem
            translateZ={20}
            href={redirectLink}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-80">
            <a href={redirectLink}>
              Case Study →
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>)
  );
}
