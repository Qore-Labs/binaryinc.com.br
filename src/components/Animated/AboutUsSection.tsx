"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "../UI/Container";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  isMobile: boolean;
}

export default function AboutUsSection({ isMobile }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      tl.from(cardRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.96,
      })
        .from(
          eyebrowRef.current,
          {
            opacity: 0,
            y: 24,
          },
          "-=0.55"
        )
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 32,
          },
          "-=0.75"
        )
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 28,
          },
          "-=0.65"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            x: isMobile ? 0 : 70,
            y: isMobile ? 40 : 0,
            rotate: isMobile ? 0 : 4,
            scale: 0.92,
          },
          "-=0.85"
        );

      gsap.to(imageRef.current, {
        y: isMobile ? -8 : -14,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play pause resume pause",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full relative mb-20">
      <Container className="px-14 max-lg:px-4">
        <div
          ref={cardRef}
          className="w-full flex items-center-safe justify-between h-101.25 max-lg:h-auto bg-linear-270 from-(--dark-blue) to-[#3634AC] rounded-2xl px-14 py-8 max-lg:px-8 max-lg:flex-col max-lg:gap-8 overflow-hidden"
        >
          <section className="flex flex-col items-start justify-start gap-5">
            <h3
              ref={eyebrowRef}
              className="font-alt text-3xl text-(--green) tracking-tight max-lg:text-2xl"
            >
              Sobre Nós | A Essência
            </h3>

            <h2
              ref={titleRef}
              className="font-alt text-5xl font-extrabold text-white leading-16 max-lg:text-4xl max-lg:leading-10"
            >
              Mais que software, {!isMobile && <br />}
              Criamos Pontes
            </h2>

            <p ref={textRef} className="text-white text-start">
              Acreditamos que a inovação só faz sentido quando serve às{" "}
              {!isMobile && <br />}
              pessoas. A <strong>BinaryInc</strong> nasceu para ser a parceira
              estratégica de {!isMobile && <br />}
              quem não aceita o comum. Somos arquitetos de possibilidades,
              {!isMobile && <br />}
              focados em transformar o complexo em liberdade e o potencial{" "}
              {!isMobile && <br />}
              ilimitado em valor tangível.
            </p>
          </section>

          <Image
            ref={imageRef}
            src="/home/celular.png"
            alt="Celular mostrando conquistas do mês"
            width={isMobile ? 286 : 386}
            height={isMobile ? 261 : 352}
            className="will-change-transform"
          />
        </div>
      </Container>
    </section>
  );
}
