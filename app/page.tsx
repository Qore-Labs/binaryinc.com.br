import Link from "next/link";
import Image from "next/image";

import Container from "@/components/UI/Container";
import { CardsContent } from "@/utils/contents/cards";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { ValidateDevice } from "@/utils/device/is-mobile";
import HeroArt from "@/components/Hero";
import AboutUsSection from "@/components/Animated/AboutUsSection";
import AnimatedImage from "@/components/Animated/AnimatedImage";
import HeroContactFormAnimated from "@/components/ContactForm/HeroContactForm";

export default async function Home() {
  const isMobile = await ValidateDevice();

  return (
    <main className="w-full">
      <section className="relative mt-6 mb-20 overflow-hidden">
        <Image
          src="/home/bg-hero-bitmap.png"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none z-0 object-cover"
          aria-hidden="true"
        />
        <Container className="relative z-10 px-32 flex items-center justify-between gap-20 max-lg:flex-col max-lg:gap-4 max-lg:px-10">
          <HeroArt isMobile={isMobile} />

          <section className="w-full mt-24 flex flex-col items-start justify-center max-lg:mt-0">
            <h2 className="text-3xl font-alt font-semibold text-(--dark-blue) tracking-tight">
              Tecnologia que traduz {!isMobile && <br />}{" "}
              <span className="text-(--green) font-extrabold text-6xl max-lg:text-3xl">
                Grandes Ideias
              </span>{" "}
              {!isMobile && <br />} em{" "}
              <span className="text-(--green) font-extrabold text-6xl max-lg:text-3xl">
                Impacto Real.
              </span>
            </h2>
            <p className="text-lg text-(--gray) mt-4 mb-9 text-start">
              Aqui unimos a tecnologia a sensibilidade humana{" "}
              {!isMobile && <br />} para construir soluções que simplificam o
              agora e {!isMobile && <br />} antecipam o futuro
            </p>
            <Link
              href={{ hash: "contato" }}
              className="bg-(--dark-blue-02) ml-8 hover:bg-(--dark-blue) transition-color text-white text-sm font-semibold w-91 h-12 rounded-full flex items-center justify-center transition-all max-lg:ml-0 max-lg:w-full"
            >
              Vamos construir algo JUNTOS!
            </Link>
          </section>
        </Container>
      </section>

      <AboutUsSection isMobile={isMobile} />

      <section className="bg-linear-180 from-[#E7FDF8] to-transparent pt-20 pb-8">
        <Container className="flex items-start justify-center gap-14 max-lg:flex-col">
          <section>
            <h3 className="text-5xl font-bold tracking-tight leading-14 mb-8 text-(--dark-blue) max-lg:text-4xl max-lg:leading-10">
              Soluções desenhadas {!isMobile && <br />} para o seu Ecossistema
            </h3>

            <p className="text-(--gray) text-lg mb-5">
              <strong className="font-semibold">B2B - </strong> Eficiência da IA
              impulsionando o seu crescimento. {!isMobile && <br />}{" "}
              Desenvolvemos ecossistemas robustos que otimizam{" "}
              {!isMobile && <br />} processos e potencializam resultados, com a
              solidez e a {!isMobile && <br />} transparência que o mercado
              exige
            </p>

            <AnimatedImage
              src={"/home/B2B.jpg"}
              alt="B2B"
              className="rounded"
              width={520}
              height={600}
            />
          </section>

          <section className="max-lg:flex max-lg:flex-col-reverse">
            <AnimatedImage
              src={"/home/B2C.jpg"}
              alt="B2C"
              className="rounded mt-5"
              width={520}
              height={600}
            />

            <p className="text-(--gray) text-lg mt-5">
              <strong>B2C - </strong> Experiências que facilitam a vida. Criamos
              interfaces {!isMobile && <br />} intuitivas que eliminam o ruído,
              permitindo que a {!isMobile && <br />} tecnologia seja uma aliada
              silenciosa e poderosa no seu {!isMobile && <br />} dia a dia
            </p>
          </section>
        </Container>
      </section>

      <section className="bg-(--gray-03) py-20">
        <Container className="flex flex-col items-center-safe justify-center-safe">
          <h3 className="text-(--dark-blue-02) text-4xl font-bold mb-5">
            Nosso Diferencial
          </h3>
          <h4 className="text-xl text-(--gray)">Por que a BinaryInc?</h4>

          <section className="mt-9 flex items-start justify-center gap-7 w-full max-lg:flex-col">
            {CardsContent.map((card) => (
              <Card.Root key={card.title}>
                <Card.Title>{card.title}</Card.Title>
                <Card.Content image={card.image} text={card.text} />
                <Card.Button
                  hasIcon={card.button.hasIcon}
                  label={card.button.label}
                />
              </Card.Root>
            ))}
          </section>
        </Container>
      </section>

      <section className="py-9" id="contato">
        <Container className="max-lg:px-4">
          <div className="w-full flex items-center-safe justify-between h-116.25 bg-linear-270 from-(--dark-blue) to-[#3634AC] rounded-2xl max-lg:h-auto max-lg:flex-col">
            <section className="flex flex-col items-center-safe justify-center pl-24 max-lg:p-6">
              <h3 className="font-alt text-3xl text-white font-bold mb-4 max-lg:text-2xl">
                Pronto para transformar sua operação?
              </h3>
              <h4 className="text-(--green) text-lg mb-16 max-lg:mb-10">
                Junte-se às empresas que já otimizaram seus processos com a{" "}
                <strong className="font-semibold">BinaryInc.</strong>
              </h4>
              <ContactForm />
              <span className="text-white/70 mt-4 text-sm max-lg:text-center max-lg:text-xs">
                Sem spam • Nosso time de vendas entrará em contato!
              </span>
            </section>

            <HeroContactFormAnimated />
          </div>
        </Container>
      </section>
    </main>
  );
}
