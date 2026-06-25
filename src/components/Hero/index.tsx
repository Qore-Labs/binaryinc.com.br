"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface HeroArtProps {
  isMobile: boolean;
}

export default function HeroArt({ isMobile }: HeroArtProps) {
  const containerRef = useRef<HTMLPictureElement>(null);
  const rectRef = useRef<HTMLImageElement>(null);
  const manRef = useRef<HTMLImageElement>(null);
  const ellipseRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.2,
        },
      });

      tl.from(rectRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 24,
      })
        .from(
          manRef.current,
          {
            opacity: 0,
            y: 36,
            scale: 0.96,
          },
          "-=0.85"
        )
        .from(
          ellipseRef.current,
          {
            opacity: 0,
            scale: 0.4,
            x: 24,
            rotate: -20,
            duration: 0.9,
          },
          "-=0.65"
        );

      gsap.to(ellipseRef.current, {
        y: -10,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  return (
    <picture
      ref={containerRef}
      className="relative max-w-108.75 w-full h-auto flex items-center justify-between"
    >
      <Image
        ref={rectRef}
        src="/home/rectangle-hero.png"
        alt="Retângulo de fundo da hero art"
        width={isMobile ? 350 : 435}
        height={isMobile ? 350 : 435}
        loading="eager"
        fetchPriority="high"
        className="absolute bottom-0 left-0 shrink-0"
      />

      <Image
        ref={manRef}
        src="/home/man-hero.png"
        alt="Um homem sorrindo para o celular"
        width={isMobile ? 350 : 399}
        height={isMobile ? 466 : 531}
        loading="eager"
        fetchPriority="high"
        className="relative bottom-0 -right-9"
      />

      <Image
        ref={ellipseRef}
        src="/home/elipse-hero.png"
        alt="Elipse da hero art"
        width={105}
        height={105}
        loading="eager"
        className="absolute bottom-4 -right-16 max-lg:-right-8"
      />
    </picture>
  );
}
