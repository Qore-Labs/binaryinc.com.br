import { ValidateDevice } from "@/utils/device/is-mobile";
import Image from "next/image";

export default async function Hero() {
  const isMobile = await ValidateDevice();

  return (
    <picture className="relative max-w-108.75 w-full h-auto flex items-center justify-between">
      <Image
        src={"/home/rectangle-hero.png"}
        alt="Retângulo de fundo da hero art"
        width={isMobile ? 350 : 435}
        height={isMobile ? 350 : 435}
        className="absolute bottom-0 left-0 shrink-0"
      />
      <Image
        src={"/home/man-hero.png"}
        alt="Um homem sorrindo para o celular"
        width={isMobile ? 350 : 399}
        height={isMobile ? 466 : 531}
        className="relative bottom-0 -right-9"
      />
      <Image
        src={"/home/elipse-hero.png"}
        alt="Elipse da hero art"
        width={105}
        height={105}
        className="absolute bottom-4 -right-16 max-lg:-right-8"
      />
    </picture>
  );
}
