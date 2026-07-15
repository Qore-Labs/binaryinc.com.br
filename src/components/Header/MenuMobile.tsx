import Link from "next/link";

import { MenuItems } from "@/utils/config/site";
import { Icons } from "../UI/Icons";

export default function MenuMobile() {
  return (
    <>
      <button>
        <Icons.Default.Menu width={24} height={24} />
      </button>

      <main>
        <header>
          <button>close</button>
        </header>
        <nav className="mx-auto">
          <ul className="flex gap-8 fixed">
            {MenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={{ pathname: item.href }}
                  className="text-base font-medium text-(--black) hover:text-(--green) transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-(--green) after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
                  aria-label={`Acesse - ${item.name}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={{ hash: "contato" }}
            aria-label="Fale com a gente!"
            className="bg-linear-210 from-(--green) to-[#E2FFF8]/89 text-(--dark-blue) text-sm w-44.75 h-10 rounded-full flex items-center justify-center outline outline-white font-sans font-semibold transition-all hover:outline-(--green)"
          >
            Fale com a gente!
          </Link>
        </nav>
      </main>
    </>
  );
}
