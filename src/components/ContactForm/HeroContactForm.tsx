"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroContactFormAnimated() {
  const containerRef = useRef<HTMLPictureElement>(null);
  const ovalRef = useRef<HTMLImageElement>(null);
  const manRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
      });

      tl.from(manRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power2.out",
      }).from(
        ovalRef.current,
        {
          opacity: 0,
          x: -20,
          duration: 0.7,
          ease: "power1.out",
        },
        "-=0.25"
      );
    },
    { scope: containerRef }
  );

  return (
    <picture ref={containerRef} className="relative w-full h-auto max-w-96">
      <Image
        ref={ovalRef}
        src="/home/oval-man-standing.png"
        alt="oval icon behind the man"
        width={290}
        height={290}
        className="absolute top-10 -left-10 max-lg:left-0"
      />

      <Image
        ref={manRef}
        src="/home/man-standing.png"
        alt="a man"
        width={384}
        height={559}
        className="relative bottom-14.5 right-15 max-lg:right-0 max-lg:bottom-0"
      />
    </picture>
  );
}
