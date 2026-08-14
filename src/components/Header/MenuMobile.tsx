"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

import { MenuItems } from "@/utils/config/site";
import { Icons } from "../UI/Icons";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useMenuMobile } from "@/lib/zustand/useMenuMobile";

// no-op subscribe: this "external store" never changes after mount,
// we just need different values for server vs. client snapshots
function subscribe() {
  return () => {};
}

function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true, // client snapshot
    () => false // server snapshot (SSR)
  );
}

function Overlay() {
  const { isOpen, setClose } = useMenuMobile((state) => state);
  const pathname = usePathname();
  const isClient = useIsClient();

  if (!isClient) return null;

  return createPortal(
    <main
      className={classNames(
        "fixed top-0 transition-all shadow-2xl drop-shadow-2xl w-3/4 h-dvh bg-white z-50 flex flex-col items-center justify-start gap-8",
        { "right-[-75%]": !isOpen, "right-0": isOpen }
      )}
    >
      <header className="w-full h-20 flex items-center justify-start px-6">
        <button onClick={() => setClose()} aria-label="Fechar menu mobile">
          <Icons.Default.Close width={24} height={24} />
        </button>
      </header>
      <nav className="w-full h-full pb-12 flex flex-col items-start justify-start gap-8 px-6">
        <ul className="flex gap-8 flex-col items-start justify-start">
          {MenuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={{ pathname: item.href }}
                className={classNames(
                  "text-base font-medium text-(--black) hover:text-(--green) transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-(--green) after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform",
                  { "text-(--green) after:scale-x-100": pathname === item.href }
                )}
                aria-label={`Acesse - ${item.name}`}
                onClick={() => setClose()}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={{ hash: "contato" }}
          aria-label="Fale com a gente!"
          className="mx-auto mt-7 bg-linear-210 from-(--green) to-[#E2FFF8]/89 text-(--dark-blue) text-sm w-full h-10 rounded-full flex items-center justify-center outline outline-white font-sans font-semibold transition-all hover:outline-(--green)"
        >
          Fale com a gente!
        </Link>
      </nav>
    </main>,
    document.body
  );
}

export default function MenuMobile() {
  const { setOpen } = useMenuMobile((state) => state);
  return (
    <>
      <button onClick={() => setOpen()} aria-label="Abrir menu mobile">
        <Icons.Default.Menu width={24} height={24} />
      </button>

      <Overlay />
    </>
  );
}
