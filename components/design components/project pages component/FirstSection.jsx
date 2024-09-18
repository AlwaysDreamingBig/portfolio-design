import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function FirstSection({BigTitle, Tag, Text}) {

  const items = [
    {
      bigTitle: BigTitle,
      tag: Tag,
      text: "",
      title: "",
      description: "",
      list: [],
      researchTitle: "",
      researchText: "",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      bigTitle: "",
      tag: "",
      text: Text,
      title: "",
      description: "",
      list: [],
      researchTitle: "",
      researchText: "",
      header: <Skeleton />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    (<BentoGrid className="mx-auto md:grid-cols-2 md:auto-rows-[28rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          tag={item.tag}
          text={item.text}
          list={item.list}
          bigTitle={item.bigTitle}
          description={item.description}
          overviewText={item.overviewText}
          overviewTitle={item.overviewTitle}
          problemList={item.problemList}
          problemTitle={item.problemTitle}
          researchTitle={item.researchTitle}
          researchText={item.researchText}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}

const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);


