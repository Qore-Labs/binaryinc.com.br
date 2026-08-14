import { Case } from "@/components/Case";
import ContactForm from "@/components/ContactForm";
import HeroContactFormAnimated from "@/components/ContactForm/HeroContactForm";
import Container from "@/components/UI/Container";
import { SITE_CONFIG } from "@/utils/config/site";
import { CasesContent } from "@/utils/contents/cases";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Cases",
  appleWebApp: {
    title: `Cases | ${SITE_CONFIG.name}`,
  },
};

export default function Cases() {
  const PageNotEnabled = true; // Change this to false when the page is ready

  if (PageNotEnabled) {
    notFound();
  }

  return (
    <main className="w-full">
      <Container className="flex flex-col items-center-safe justify-center-safe gap-4 py-14">
        <div className="bg-[#4CFDCD] h-6.5 w-auto px-4 rounded-full select-none text-sm uppercase text-center font-semibold flex items-center-safe text-(--dark-blue) relative before:relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-(--dark-blue)">
          <span className="relative z-10 ml-2">Nossos projetos</span>
        </div>

        <h2 className="text-center text-5xl font-hanken-grotesk font-extrabold text-(--dark-blue) max-lg:text-3xl mt-4">
          Transformando Ideias em{" "}
          <span className="text-(--green)">Impacto Real</span>
        </h2>

        <p className="text-center text-lg text-(--gray-04) max-lg:text-base m-6">
          Ajudamos empresas visionárias a escalarem seus negócios através de
          <br />
          engenharia de alta precisão e design centrado no humano. Conheça como
          <br />
          resolvemos desafios complexos.
        </p>
      </Container>

      <section className="w-full flex flex-col items-center-safe justify-center-safe gap-16 pb-16">
        {CasesContent.map((item, index) => (
          <Case key={item._id} item={item} isEven={index % 2 === 0} />
        ))}
      </section>

      <section className="py-9">
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
