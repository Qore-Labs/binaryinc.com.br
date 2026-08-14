import { IOfferCardContent } from "@/types/offer-contents";
import { v4 as uuidv4 } from "uuid";

export const OfferCardsContent: IOfferCardContent[] = [
  {
    _id: uuidv4(),
    title: "Inovação com Ética",
    image: "/home/inovacao-com-etica.jpg",
    text: "Avançamos na vanguarda tecnológica, mas sempre com os pés firmes na responsabilidade",
    button: {
      hasIcon: true,
      label: "Saiba mais",
    },
  },
  {
    _id: uuidv4(),
    title: "People First",
    image: "/home/people-first.jpg",
    text: "Cada linha de código é escrita pensando em quem vai usá-la.",
    button: {
      hasIcon: true,
      label: "Saiba mais",
    },
  },
  {
    _id: uuidv4(),
    title: "Parceria de Verdade",
    image: "/home/parceria-de-verdade.jpg",
    text: "Mais do que projetos, construímos relações onde confiança e compromisso nos fazem evoluir juntos.",
    button: {
      hasIcon: true,
      label: "Saiba mais",
    },
  },
];
