import Link from "next/link";

import { MenuItems } from "@/utils/config/site";
import { Icons } from "../UI/Icons";

export default function MenuMobile() {
  return (
    <nav className="mx-auto">
      <button>
        <Icons.Menu width={24} height={24} />
      </button>

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
    </nav>
  );
}
