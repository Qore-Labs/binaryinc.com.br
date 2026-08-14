import { ICasesContent } from "@/types/cases";
import { v4 as uuidv4 } from "uuid";

export const CasesContent: ICasesContent[] = [
  {
    _id: uuidv4(),
    tags: ["SaaS"],
    title: "Box Station — Gerenciador de Tarefas Integrado",
    description: [
      {
        title: "O desafio",
        text: "Baixa visibilidade sobre métricas críticas de demandas, resultando em ruídos na comunicação, desperdício de recursos e decisões baseadas em intuição.",
        order: 1,
      },
      {
        title: "A solução",
        text: "Desenvolvimento de um dashboard robusto completo  e integração de setores através de chat tempo real.",
        order: 2,
      },
      {
        title: "25% de aumento",
        text: "na produtividade das tarefas no primeiro semestre.",
        order: 3,
        isHighlighted: true,
      },
    ],
    image: "/cases/box-station-art.jpg",
    link: {
      label: "Veja mais",
      hasIcon: true,
      url: "https://station.boxbrazil.tv.br/",
    },
  },
  {
    _id: uuidv4(),
    tags: ["SaaS", "UX/UI"],
    title:
      "Personalitte Connect – Plataforma de Gerência de Consultorias para Financiamento",
    description: [
      {
        title: "O desafio",
        text: "Inefficient energy distribution leading to 15% waste in urban areas.",
        order: 1,
      },
      {
        title: "A solução",
        text: "Real-time sensor network and dashboard for predictive load balancing.",
        order: 2,
      },
      {
        title: "20% reuction",
        text: "in carbon footprint for municipal clients.",
        order: 3,
        isHighlighted: true,
      },
    ],
    image: "/cases/box-station-art.jpg",
    link: {
      label: "Veja mais",
      hasIcon: true,
      url: "https://station.boxbrazil.tv.br/",
    },
  },
];
