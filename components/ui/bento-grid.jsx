import { cn } from "@/lib/utils";
import TypingText from "../design components/utils/TypingTextEffect";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid grid-cols-1 gap-4 max-w-8xl mx-auto sm:p-4 p-1",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  bigTitle,
  tag,
  text,
  title,
  description,
  icon,
  overviewTitle,
  overviewText,
  problemList,
  problemTitle,
  researchTitle,
  researchText,
  list
}) => {

  const paragraphsText = text.split('||');
  const paragraphsRedearch = researchText.split('||');

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-2xl dark:shadow-none sm:p-4 dark:bg-black dark:border-white/[0.2] border border-gray-800 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {bigTitle ? (
        <div className="flex flex-col items-center justify-center text-center h-full space-y-6 bg-gray-400 rounded-lg">
          <div className="font-bold font-nerkoOne text-black dark:text-neutral-200 text-7xl">
            {bigTitle}
          </div>
          {tag && (
            <div className="font-nerkoOne font-medium text-blue-800 dark:text-neutral-500 text-xl">
              {
                <TypingText
                  texts={[tag]}
                  speed={100}
                  loop={true} // Set to true if you want looping behavior
                  loopCount={1} // The text will loop 3 times
                />
              }
            </div>
          )}
        </div>
      ) : text ? (
        <div className="text-justify font-sans font-light text-white dark:text-neutral-300 p-4 text-base">
          {
            <div className="space-y-4">
              {paragraphsText.map((para, index) => (
                <p key={index} className="leading-loose">{para}</p>
              ))}
            </div>
          }
        </div>
      ) : overviewTitle ? (
        <div className="text-justify font-sans font-light text-white dark:text-neutral-300">
          <div className="font-sans font-bold text-blue-500 dark:text-neutral-200 mb-8 mt-2 text-4xl">
            {overviewTitle}
          </div>

          <div className="font-sans font-light text-white text-lg dark:text-neutral-300 md:grid grid-cols-2 gap-10">
                <div className="text-justify font-sans font-light text-white dark:text-neutral-300 leading-loose">
                  {overviewText[0].split("||").map((para, index) => (
                    <p key={index} className="leading-loose">{para}</p>
                  ))}
                </div>

                <div className="text-justify font-sans font-light text-white dark:text-neutral-300 leading-loose">
                  {overviewText[1].split("||").map((para, index) => (
                    <p key={index} className="leading-loose">{para}</p>
                  ))}
                </div>
              </div>
        </div>
      ) : researchTitle ? (
        <div className="text-justify font-sans font-light text-white dark:text-neutral-300">
          <div className="font-sans font-bold text-blue-500 dark:text-neutral-200 mb-2 mt-2 text-3xl">
            {researchTitle}
          </div>

          <div className="text-justify font-sans font-light text-white dark:text-neutral-300 text-base">
            {
              <div className="space-y-4 xl:px-20 lg:px-10 px-2">
                {paragraphsRedearch.map((para, index) => (
                  <p key={index} className="leading-loose">{para}</p>
                ))}
              </div>
            }
          </div>
        </div>
      ) : problemTitle ? (
        <div className="text-justify font-sans font-light text-white dark:text-neutral-300 group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-normal text-blue-300 dark:text-neutral-200 mb-10 mt-2 text-2xl">
            {problemTitle}
          </div>

          <div className="text-justify font-sans font-light text-white dark:text-neutral-300">
            <ul className="list-decimal list-inside mt-2 space-y-10 text-white dark:text-neutral-300 font-light text-base ml-10 mr-10">
              {problemList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-bold dark:text-neutral-200 mb-2 mt-2 text-blue-500 text-lg">
              {title}
            </div>
            <div className="font-sans font-light text-base dark:text-neutral-300 mt-6 text-blue-300">
              {description}
            </div>
            {list && (
              <ul className="list-disc list-inside mt-6 space-y-4 text-white dark:text-neutral-300 font-light text-base ml-10">
                {list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

