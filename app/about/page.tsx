import Container from "@/components/UI/Container";
import { SITE_CONFIG } from "@/utils/config/site";
import { OperateCardContent } from "@/utils/contents/operate-card";
import { Metadata } from "next";
import Image from "next/image";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Sobre",
  appleWebApp: {
    title: `Cases | ${SITE_CONFIG.name}`,
  },
};

export default function About() {
  return (
    <main className="w-full">
      <section className="relative mb-20 py-16 overflow-hidden w-full bg-(--gray-03)">
        <Image
          src="/global/bg-bitmap.png"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none z-0 object-cover"
          aria-hidden="true"
        />

        <Container className="flex flex-col items-center-safe justify-center-safe">
          <h2 className="text-6xl leading-normal text-center font-extrabold font-alt text-(--green)">
            Quem <span className="text-(--dark-blue) uppercase">SOMOS</span>
          </h2>
          <p className="text-2xl text-(--gray-04) text-center font-alt font-medium">
            A Tecnologia como Linguagem, não como Fim.
          </p>

          <section className="mt-16 flex items-center justify-between gap-7 w-full">
            <p className="text-lg text-(--gray-04)">
              Na <strong>BinaryInc</strong>, encurtamos a distância entre uma
              ideia <br /> brilhante e o impacto real. <br />
              Nascemos de uma verdade simples:{" "}
              <strong>
                o valor só é real se ele <br /> transforma.
              </strong>
              <br />
              Não nos contentamos com o funcional; buscamos o <br /> essencial.
              Criamos ferramentas que silenciam o ruído e <br /> otimizam o
              tempo, permitindo que empresas cresçam e <br /> indivíduos
              prosperem. Simplificamos o complexo para que <br /> você tenha
              liberdade para criar o novo.
              <br />
              <br />
              Inovamos com os olhos no futuro e os pés na ética. <br /> Nossa
              tecnologia não serve apenas à eficiência, ela serve às <br />
              pessoas. Sob a solidez do nosso azul profundo e a vibração <br />
              do nosso verde, a BinaryInc se posiciona como um porto <br />
              seguro para o progresso.
              <br />
              <br />
              <strong>
                Um lugar onde a inovação é responsável, o design é humano <br />
                e o resultado é, invariavelmente, grandioso.
              </strong>
            </p>

            <Image
              src="/about/man-hero-about.png"
              alt="Homem sorrindo"
              width={489}
              height={499}
            />
          </section>
        </Container>
      </section>

      <section className="relative pt-8 pb-24">
        <Container className="flex flex-col items-center-safe justify-center-safe">
          <h3 className="text-center w-3xs relative text-base font-alt flex items-center-safe justify-center-safe uppercase text-(--green) font-normal mb-12 before:absolute before:content-[''] before:w-full before:h-px before:bg-(--green)">
            <span className="bg-white px-2 z-10">Nossa essência</span>
          </h3>
          <h4 className="font-alt font-extrabold text-(--dark-blue) text-5xl text-center">
            Não vemos linhas de código, vemos pontes.
          </h4>
          <h5 className="font-alt font-semibold text-(--gray-04) text-3xl mt-6 text-center">
            Pontes entre o que você sonha e o que o mundo precisa.
          </h5>
          <p className="text-lg text-(--gray-04) text-center mt-12 leading-loose">
            Nossa tecnologia é visceral, construída com o rigor da precisão
            binária e a sensibilidade do <br />
            toque humano. Encurtamos a distância entre uma ideia brilhante e o
            impacto real.
            <br />
            Simplificamos o complexo para que você tenha a liberdade de criar o
            novo.
          </p>
        </Container>
      </section>

      <section className="relative bg-(--gray-05) py-24">
        <Container className="flex flex-col items-center-safe justify-center-safe">
          <h3 className="mb-4 text-3xl font-bold font-hanken-grotesk text-(--black-02)">
            Como Atuamos
          </h3>
          <p className="text-(--gray-06) text-base font-alt font-normal">
            Nossos pilares fundamentais para o sucesso coletivo.
          </p>

          <div className="mt-16 flex items-center-safe justify-center-safe gap-8">
            {OperateCardContent.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card._id}
                  className={classNames(
                    "bg-white border border-(--gray-05)/20 w-90.5 h-87.25 rounded-lg p-10 drop-shadow-xl",
                    {
                      "bg-linear-320 from-[#161546] to-[#3634AC]":
                        card.isHighlighted,
                    }
                  )}
                >
                  {Icon && (
                    <picture
                      className={classNames(
                        "w-14 h-14 flex items-center-safe p-3.5 justify-center-safe rounded-lg bg-(--green-02)/10 mb-8",
                        {
                          "bg-white": card.isHighlighted,
                        }
                      )}
                    >
                      <Icon />
                    </picture>
                  )}
                  {card.title && (
                    <h4
                      className={classNames(
                        "text-2xl font-semibold font-hanken-grotesk text-start text-(--black-02) mb-4",
                        {
                          "text-white": card.isHighlighted,
                        }
                      )}
                    >
                      {card.title}
                    </h4>
                  )}
                  {card.description && (
                    <p
                      className={classNames(
                        "text-(--gray-06) text-base font-alt font-normal",
                        {
                          "text-white": card.isHighlighted,
                        }
                      )}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
