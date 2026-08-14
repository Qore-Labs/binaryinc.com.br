import Container from "@/components/UI/Container";
import { SITE_CONFIG } from "@/utils/config/site";
import { OperateCardContent } from "@/utils/contents/operate-card";
import { Metadata } from "next";
import Image from "next/image";
import classNames from "classnames";
import { Icons } from "@/components/UI/Icons";
import Link from "next/link";
import { ValidateDevice } from "@/utils/device/is-mobile";

export const metadata: Metadata = {
  title: "Sobre",
  appleWebApp: {
    title: `Cases | ${SITE_CONFIG.name}`,
  },
};

export default async function About() {
  const isMobile = await ValidateDevice();

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
          <h2 className="text-6xl leading-normal text-center font-extrabold font-alt text-(--green) max-lg:text-5xl">
            Quem <span className="text-(--dark-blue) uppercase">SOMOS</span>
          </h2>
          <p className="text-2xl text-(--gray-04) text-center font-alt font-medium max-lg:text-lg">
            A Tecnologia como Linguagem, {isMobile && <br />} não como Fim.
          </p>

          <section className="mt-16 flex items-center justify-between gap-7 w-full max-lg:flex-col-reverse">
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
          <h4 className="font-alt font-extrabold text-(--dark-blue) text-5xl text-center max-lg:text-3xl">
            Não vemos linhas de código, vemos pontes.
          </h4>
          <h5 className="font-alt font-semibold text-(--gray-04) text-3xl mt-6 text-center max-lg:text-2xl">
            Pontes entre o que você sonha e o que o mundo precisa.
          </h5>
          <p className="text-lg text-(--gray-04) text-center mt-12 leading-loose">
            Nossa tecnologia é visceral, construída com o rigor da precisão
            binária e a sensibilidade do {!isMobile && <br />}
            toque humano. Encurtamos a distância entre uma ideia brilhante e o
            impacto real.
            {!isMobile && <br />}
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

          <div className="mt-16 flex items-center-safe justify-center-safe gap-8 max-lg:flex-col">
            {OperateCardContent.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card._id}
                  className={classNames(
                    "bg-white border border-(--gray-05)/20 w-90.5 h-87.25 rounded-lg p-10 drop-shadow-xl max-lg:w-full max-lg:h-auto max-lg:p-6 flex flex-col items-start-safe justify-start-safe",
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

      <section className="relative bg-linear-to-l from-[#0D0C2A] via-[#161546] to-[#3634AC] pt-7 gap-12 overflow-clip max-lg:py-20">
        <Container className="flex items-center-safe justify-center-safe max-lg:flex-col max-lg:gap-12">
          <Image
            src={"/about/girl.png"}
            width={576}
            height={614}
            alt="Garota com notebook"
          />

          <section className="flex flex-col items-center-safe justify-center-safe gap-9">
            <picture className="w-17.5 h-17.5 flex items-center-safe justify-center-safe rounded-full bg-white/5">
              <Icons.About.Rocket width={30} height={30} />
            </picture>

            <div className="flex flex-col items-start-safe justify-center-safe">
              <h3 className="text-center text-[40px] leading-9 font-hanken-grotesk font-extrabold text-white max-lg:text-2xl">
                Tecnologia que conecta.
              </h3>
              <h3 className="text-center text-[54px] font-hanken-grotesk font-bold text-(--green) max-lg:text-3xl">
                Valor que transforma.
              </h3>
              <h4 className="text-center text-3xl font-hanken-grotesk font-semibold text-white max-lg:text-xl">
                Vamos construir o futuro juntos?
              </h4>
            </div>
            <p className="font-normal text-base text-(--gray-02) text-center">
              Nossa equipe de especialistas está pronta para traduzir{" "}
              {!isMobile && <br />}
              sua visão em resultados grandiosos e responsáveis.
            </p>

            <div className="flex items-center-safe justify-center-safe gap-6 max-lg:flex-col max-lg:gap-3">
              <Link
                href={{ pathname: "/", hash: "contato" }}
                className="w-91 max-lg:w-full max-lg:px-6 h-15 rounded-lg shadow-2xl bg-(--green) text-[#002116] font-bold text-sm flex items-center-safe justify-center-safe hover:bg-(--green-02) transition-all"
              >
                Fale com um de nossos especialistas
              </Link>
              {/* <Link
                href={{ pathname: "/cases" }}
                className="text-white font-alt text-base font-normal relative flex flex-col items-center-safe justify-center-safe after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white/20 after:-bottom-1 after:left-0"
              >
                Ver nossos serviços
              </Link> */}
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
}
