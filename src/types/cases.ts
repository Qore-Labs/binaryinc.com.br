import { UrlObject } from "url";

interface ILinkCases {
  label: string;
  hasIcon?: boolean;
  url: UrlObject["pathname"];
}

interface ICustomDescription {
  title: string;
  text: string;
  order?: number;
  isHighlighted?: boolean;
}

export interface ICasesContent {
  _id: string;
  tags: string[];
  title: string;
  description: string | ICustomDescription[];
  image: string;
  link?: ILinkCases;
}
