"use client";

import Link from "next/link";

import { MenuItems } from "@/utils/config/site";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto">
      <ul className="flex gap-8">
        {MenuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={{ pathname: item.href }}
              className={classNames(
                "text-base font-medium text-(--black) hover:text-(--green) transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-(--green) after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform",
                { "text-(--green) after:scale-x-100": pathname === item.href }
              )}
              aria-label={`Acesse - ${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
