import Image from "next/image";

export default function Hero() {
  return (
    <picture className="relative max-w-108.75 w-full h-auto flex items-center justify-between">
      <Image
        src={"/home/rectangle-hero.png"}
        alt="Retângulo de fundo da hero art"
        width={435}
        height={435}
        className="absolute bottom-0 left-0 shrink-0"
      />
      <Image
        src={"/home/man-hero.png"}
        alt="Um homem sorrindo para o celular"
        width={400}
        height={532}
        className="relative bottom-0 -right-9"
      />
      <Image
        src={"/home/elipse-hero.png"}
        alt="Elipse da hero art"
        width={105}
        height={105}
        className="absolute bottom-4 -right-16"
      />
    </picture>
  );
}
