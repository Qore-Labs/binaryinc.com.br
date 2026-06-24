import { IMenuItems, ISiteConfig } from "@/types/config";

export const SITE_CONFIG: ISiteConfig = {
  name: "BinaryInc",
  description: "Tecnologia que traduz grandes ideias em impacto real.",
  baseUrl: "https://www.binaryinc.com.br",
  authors: {
    name: "BinaryInc Team",
    url: "https://www.binaryinc.com.br",
  },
  keywords: [
    "desenvolvimento de software",
    "tecnologia",
    "sistemas web",
    "aplicativos mobile",
    "BinaryInc",
  ],
  socialMedia: [
    { name: "Instagram", url: "https://www.instagram.com/binaryinc.tech/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/binaryinc/" },
  ],
};

export const MenuItems: IMenuItems[] = [
  { name: "Home", href: "/" },
  { name: "Quem somos", href: "/about" },
  { name: "Cases", href: "/cases" },
];
