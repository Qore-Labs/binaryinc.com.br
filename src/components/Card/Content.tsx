import Image from "next/image";

interface ContentProps {
  image?: string;
  text?: string;
}

export const Content = ({ image, text }: ContentProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {image && <Image src={image} alt={text || ""} width={349} height={172} />}
      {text && <p className="text-lg text-(--gray) text-start h-20">{text}</p>}
    </div>
  );
};
