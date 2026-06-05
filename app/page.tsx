import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import Container from "@/components/UI/Container";
import { CardsContent } from "@/utils/contents/cards";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { HeroContactForm } from "@/components/ContactForm/HeroContactForm";

export default function Home() {
  return (
    <main className="w-full">
      <section className="mt-6 mb-12 bg-[url('/home/bg-hero-bitmap.png')]">
        <Container className="px-32 flex items-center justify-between gap-20">
          <Hero />

          <section className="w-full mt-24 flex flex-col items-start justify-center">
            <h2 className="text-3xl font-alt font-semibold text-(--dark-blue) tracking-tight">
              Tecnologia que traduz <br />{" "}
              <span className="text-(--green) font-extrabold text-6xl">
                Grandes Ideias
              </span>{" "}
              <br /> em{" "}
              <span className="text-(--green) font-extrabold text-6xl">
                Impacto Real.
              </span>
            </h2>
            <p className="text-lg text-(--gray) mt-4 mb-9 text-start">
              Aqui unimos a tecnologia a sensibilidade humana <br /> para
              construir soluções que simplificam o agora e <br /> antecipam o
              futuro
            </p>
            <Link
              href={{ hash: "contato" }}
              className="bg-(--dark-blue-02) ml-8 hover:bg-(--dark-blue) transition-color text-white text-sm font-semibold w-91 h-12 rounded-full flex items-center justify-center transition-all"
            >
              Vamos construir algo JUNTOS!
            </Link>
          </section>
        </Container>
      </section>

      <section className="w-full relative mb-20">
        <Container className="px-14">
          <div className="w-full flex items-center-safe justify-between h-101.25 bg-linear-270 from-(--dark-blue) to-[#3634AC] rounded-2xl px-14 py-8">
            <section className="flex flex-col items-start justify-start gap-5">
              <h3 className="font-alt text-3xl text-(--green) tracking-tight">
                Sobre Nós | A Essência
              </h3>
              <h2 className="font-alt text-5xl font-extrabold text-white leading-16">
                Mais que software, <br />
                Criamos Pontes
              </h2>
              <p className="text-white text-start">
                Acreditamos que a inovação só faz sentido quando serve às <br />
                pessoas. A <strong>BinaryInc</strong> nasceu para ser a parceira
                estratégica de <br />
                quem não aceita o comum. Somos arquitetos de possibilidades,
                <br />
                focados em transformar o complexo em liberdade e o potencial{" "}
                <br />
                ilimitado em valor tangível.
              </p>
            </section>

            <Image
              src={"/home/celular.png"}
              alt="Celular mostrando conquistas do mês"
              width={386}
              height={352}
            />
          </div>
        </Container>
      </section>

      <section className="bg-linear-180 from-[#E7FDF8] to-transparent pt-20 pb-8">
        <Container className="flex items-start justify-center gap-14">
          <section>
            <h3 className="text-5xl font-bold tracking-tight leading-14 mb-8 text-(--dark-blue)">
              Soluções desenhadas <br /> para o seu Ecossistema
            </h3>

            <p className="text-(--gray) text-lg mb-5">
              <strong className="font-semibold">B2B - </strong> Eficiência da IA
              impulsionando o seu crescimento. <br /> Desenvolvemos ecossistemas
              robustos que otimizam <br /> processos e potencializam resultados,
              com a solidez e a <br /> transparência que o mercado exige
            </p>

            <Image
              src={"/home/B2B.jpg"}
              alt="B2B"
              className="rounded"
              width={520}
              height={600}
            />
          </section>

          <section>
            <Image
              src={"/home/B2C.jpg"}
              alt="B2C"
              className="rounded mt-5"
              width={520}
              height={600}
            />

            <p className="text-(--gray) text-lg mt-5">
              <strong>B2C - </strong> Experiências que facilitam a vida. Criamos
              interfaces <br /> intuitivas que eliminam o ruído, permitindo que
              a <br /> tecnologia seja uma aliada silenciosa e poderosa no seu{" "}
              <br /> dia a dia
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

          <section className="mt-9 flex items-start justify-center gap-7 w-full">
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

      <section className="py-9">
        <Container>
          <div className="w-full flex items-center-safe justify-between h-116.25 bg-linear-270 from-(--dark-blue) to-[#3634AC] rounded-2xl">
            <section className="flex flex-col items-center-safe justify-center pl-24">
              <h3 className="font-alt text-3xl text-white font-bold mb-4">
                Pronto para transformar sua operação?
              </h3>
              <h4 className="text-(--green) text-lg mb-16">
                Junte-se às empresas que já otimizaram seus processos com a{" "}
                <strong className="font-semibold">BinaryInc.</strong>
              </h4>
              <ContactForm />
              <span className="text-white/70 mt-4 text-sm">
                Sem spam • Nosso time de vendas entrará em contato!
              </span>
            </section>

            <HeroContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
