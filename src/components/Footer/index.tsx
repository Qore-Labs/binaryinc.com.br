import Link from "next/link";
import Container from "../UI/Container";
import { Icons } from "../UI/Icons";
import { MenuItems, SITE_CONFIG } from "@/src/utils/config/site";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-(--footer)">
      <Container>
        <section className="w-full h-full flex items-center justify-between mb-9">
          <figure
            className="flex items-center-safe justify-start"
            title="BinaryInc | Tencnologia que Conecta."
          >
            <Icons.Logo width={113} height={32} alternative />
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
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="w-full flex items-center-safe justify-end gap-6">
          {SITE_CONFIG.socialMedia?.map((social) => {
            const Icon = Icons.Social[social.name as keyof typeof Icons.Social];
            if (!Icon) return null;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                <Icon width={18} height={18} />
              </a>
            );
          })}
        </section>
      </Container>
      <Container>
        <span className="w-full h-px bg-(--gray-02) block my-5"></span>

        <section className="w-full flex items-center-safe justify-between">
          <p className="text-center text-white text-base">
            &copy; {new Date().getFullYear()} - {SITE_CONFIG.name}. Todos os
            direitos reservados.
          </p>

          <p className="text-center text-white text-xs flex items-center gap-2">
            <Icons.LGPDShield width={13} height={16} />
            Conformidade LGPD/GDPR
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
