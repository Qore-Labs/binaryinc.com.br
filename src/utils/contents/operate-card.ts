import { Icons } from "@/components/UI/Icons";
import { IOperateCardContent } from "@/types/operate-contents";
import { v4 as uuidv4 } from "uuid";

export const OperateCardContent: IOperateCardContent[] = [
  {
    _id: uuidv4(),
    icon: Icons.Operate.Sparkle,
    title: "Inovação com Alma",
    description:
      "Inovamos com os olhos no futuro e os pés na ética. Nossa tecnologia serve às pessoas através de um design humano e responsável.",
  },
  {
    _id: uuidv4(),
    icon: Icons.Operate.Partner,
    title: "Parceria Estratégica",
    description:
      "Somos seu aliado real. Operamos com transparência radical e seriedade, entendendo sua visão para colocá-la em movimento.",
    isHighlighted: true,
  },
  {
    _id: uuidv4(),
    icon: Icons.Operate.Network,
    title: "Soluções de Ponta a Ponta",
    description:
      "Sinergia completa entre B2B e B2C. O extraordinário é um trabalho coletivo que realizamos com ferramentas de última geração.",
  },
];
