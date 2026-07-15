type OfferCardButton = {
  label: string;
  hasIcon: boolean;
};

export interface IOfferCardContent {
  _id: string;
  title: string;
  image: string;
  button: OfferCardButton;
  text: string;
}
