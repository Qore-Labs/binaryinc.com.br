"use client";

import Image, { type ImageProps } from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedImageProps extends ImageProps {
  direction?: "left" | "right" | "up";
  delay?: number;
}

export default function AnimatedImage({
  direction = "up",
  delay = 0,
  className = "",
  ...props
}: AnimatedImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const x = direction === "left" ? -70 : direction === "right" ? 70 : 0;
      const y = direction === "up" ? 60 : 0;

      gsap.from(wrapperRef.current, {
        opacity: 0,
        x,
        y,
        scale: 0.96,
        duration: 1.1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="overflow-hidden rounded">
      <Image {...props} className={className} alt={props.alt} />
    </div>
  );
}
