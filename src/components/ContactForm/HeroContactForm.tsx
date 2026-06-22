import Image from "next/image";

export const HeroContactForm = () => {
  return (
    <picture className="relative w-full h-auto max-w-96">
      <Image
        src={"/home/oval-man-standing.png"}
        alt="oval icon behind the man"
        width={290}
        height={290}
        className="absolute top-10 -left-10 max-lg:left-0"
      />

      <Image
        src={"/home/man-standing.png"}
        alt="a man"
        width={384}
        height={559}
        className="relative bottom-14.5 right-15 max-lg:right-0 max-lg:bottom-0"
      />
    </picture>
  );
};
