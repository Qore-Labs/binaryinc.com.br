import { ICasesContent } from "@/types/cases";
import classNames from "classnames";
import Image from "next/image";
import { Icons } from "../UI/Icons";

export const Case = ({
  item,
  isEven,
}: {
  item: ICasesContent;
  isEven: boolean;
}) => {
  return (
    <section
      className={classNames(
        "w-full h-auto flex items-center-safe justify-center-safe gap-8 px-10 py-16",
        {
          "bg-[#7D818D]/70 flex-row-reverse": !isEven,
          "bg-transparent flex-row": isEven,
        }
      )}
    >
      <div
        className={classNames(
          "max-w-146 h-139 w-full rounded-xl border border-[#7D818D]/20 p-8",
          { "bg-[#B4B4B4]/24": isEven, "bg-[#7D818D]": !isEven }
        )}
      >
        <ul className="flex flex-wrap items-center-safe justify-start gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="text-sm font-semibold w-auto tracking-wide bg-[#696873] text-[#4CFDCD] px-3 h-5.5 flex items-center-safe justify-center-safe rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>

        <p
          className={classNames("mt-6 text-3xl font-alt font-bold", {
            "text-[#47464F]": isEven,
            "text-[#FFFFFF]": !isEven,
          })}
        >
          {item.title}
        </p>

        {!Array.isArray(item.description) && (
          <p
            className={classNames("mt-4 text-base text-start", {
              "text-[#47464F]": isEven,
              "text-[#FFFFFF]/70": !isEven,
            })}
          >
            {item.description}
          </p>
        )}

        {Array.isArray(item.description) &&
          item.description.map((desc, index) => (
            <div
              key={index}
              className={classNames("mt-6", {
                "bg-[#B4B4B4]/26 border-l-4 border-[#006B54]":
                  desc.isHighlighted && isEven,
                "bg-[#47464F]/30 border-l-4 border-[#4CFDCD]":
                  desc.isHighlighted && !isEven,
                "p-4": desc.isHighlighted,
              })}
            >
              <span
                className={classNames("font-semibold font-base", {
                  "text-[#7D818D]/70": isEven,
                  "text-[#4CFDCD]": !isEven,
                  "text-2xl normal-case": desc.isHighlighted,
                  uppercase: !desc.isHighlighted,
                })}
              >
                {desc.title}
              </span>
              <p
                className={classNames("font-base", {
                  "text-[#47464F]": isEven,
                  "text-[#FFFFFF]/70": !isEven,
                })}
              >
                {desc.text}
              </p>
            </div>
          ))}

        {item.link && (
          <a
            href={item.link.url as string}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
              "font-semibold text-sm text-start flex items-center-safe justify-start gap-2 mt-5",
              {
                "text-[#7D818D]/70": isEven,
                "text-[#FFFFFF]": !isEven,
              }
            )}
          >
            <span>{item.link.label}</span>
            {item.link.hasIcon && (
              <Icons.Default.ArrowLink
                width={16}
                height={16}
                fill={isEven ? "#7D818DB2" : "#FFFFFF"}
              />
            )}
          </a>
        )}
      </div>

      <Image
        src={item.image}
        alt={item.title}
        width={584}
        height={556}
        className="object-cover rounded-xl overflow-hidden"
      />
    </section>
  );
};
