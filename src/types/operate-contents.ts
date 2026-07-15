import { ElementType } from "react";

export interface IOperateCardContent {
  _id: string;
  title?: string;
  description?: string;
  icon?: ElementType;
  isHighlighted?: boolean;
}
