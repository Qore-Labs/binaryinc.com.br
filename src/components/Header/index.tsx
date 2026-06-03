import Link from "next/link";
import Container from "../UI/Container";
import { Icons } from "../UI/Icons";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center bg-zinc-50 drop-shadow-sm">
      <Container className="flex items-center justify-between">
        <picture about="BinaryInc" className="relative">
          <Icons.Logo width={119} height={35} aria-hidden="true" />
          <h1 className="opacity-0 absolute pointer-events-none top-0 left-0">
            BinaryInc
          </h1>
        </picture>

        <Menu />

        <Link
          href={{ hash: "contato" }}
          aria-label="Fale com a gente!"
          className="bg-linear-210 from-(--green) to-[#E2FFF8]/89 text-(--dark-blue) text-sm w-44.75 h-10 rounded-full flex items-center justify-center outline outline-white font-sans font-semibold transition-all hover:outline-(--green)"
        >
          Fale com a gente!
        </Link>
      </Container>
    </header>
  );
};

export default Header;
