import Link from "next/link";

import Container from "@/components/UI/Container";
import { Icons } from "@/components/UI/Icons";

import { MenuItems, SITE_CONFIG } from "@/utils/config/site";

import { ISocialMedia } from "@/types/config";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-(--footer)">
      <Container className="max-lg:px-3.5">
        <section className="w-full h-full flex items-center justify-between mb-9 max-lg:flex-col max-lg:gap-4">
          <figure
            className="flex items-center-safe justify-start"
            title="BinaryInc | Tencnologia que Conecta."
          >
            <Icons.Logo
              width={113}
              height={32}
              alternative
              aria-hidden="true"
            />
            <span className="text-white text-base mx-3">|</span>
            <figcaption className="text-white text-base">
              Tecnologia que Conecta.
            </figcaption>
          </figure>

          <nav className="flex items-center-safe justify-end">
            <ul className="flex gap-8 items-center-safe">
              {MenuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={{ pathname: item.href }}
                    className="text-white text-base hover:text-(--green) transition-colors"
                    aria-label={`Acesse - ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="w-full flex items-center-safe justify-end gap-6">
          {SITE_CONFIG.socialMedia?.map((social: ISocialMedia) => {
            const Icon = Icons.Social[social.name as keyof typeof Icons.Social];
            if (!Icon) return null;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acesse nosso ${social.name}`}
                title={social.name}
              >
                <Icon width={18} height={18} aria-hidden="true" />
              </a>
            );
          })}
        </section>
      </Container>
      <Container className="max-lg:px-3.5">
        <span className="w-full h-px bg-(--gray-02) block my-5"></span>

        <section className="w-full flex items-center-safe justify-between max-lg:flex-col max-lg:gap-2">
          <p className="text-center text-white text-base max-lg:text-sm">
            &copy; {new Date().getFullYear()} - {SITE_CONFIG.name}. Todos os
            direitos reservados.
          </p>

          <p className="text-center text-(--gray-02) text-xs flex items-center gap-2">
            <Icons.LGPDShield width={13} height={16} />
            Conformidade LGPD/GDPR
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
