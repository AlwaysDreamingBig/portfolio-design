import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function SecondSection({Title1, Title2, Title3, Description1, Description2, Description3, list1, list2, list3}) {
  const items = [
    {
        bigTitle: "",
        tag: "",
        text: "",
        title: Title1,
        description: Description1,
        researchTitle: "",
        researchText: "",
        list: list1,
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      bigTitle: "",
      tag: "",
      text: "",
      title: Title2,
      description: Description2,
      list: list2,
      researchTitle: "",
      researchText: "",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
    {
      bigTitle: "",
      tag: "",
      text: "",
      title: Title3,
      description: Description3,
      list: list3,
      researchTitle: "",
      researchText: "",
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];

    return (
        (<BentoGrid className="mx-auto md:grid-cols-3 ">
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
              icon={item.icon}
              researchTitle={item.researchTitle}
              researchText={item.researchText}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
          ))}
        </BentoGrid>)
    );
}
const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

