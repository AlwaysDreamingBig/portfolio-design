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

export function ThirdSection({Overview, Text1, Text2}) {

  const items = [
    {
        bigTitle: "",
        tag: "",
        text: "",
        title: "",
        description: "",
        list: 
            [],
        overviewTitle: Overview,
        overviewText: 
                    [
                      Text1,
                      Text2
                    ],
        researchTitle: "",
        researchText: "",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
    return (
        (<BentoGrid className="mx-auto md:grid-cols-1 max-w-6xl lg:min-auto-rows-[28rem]">
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

