type CardButton = {
  label: string;
  hasIcon: boolean;
};

export interface ICardContent {
  title: string;
  image: string;
  button: CardButton;
  text: string;
}
