"use client";

import { OfferCardsContent } from "@/utils/contents/offer-cards";
import { OfferCard } from "../OfferCard";
import { useMemo, useState } from "react";

export default function ServiceCardSection() {
  const [selectedCard, setSelectedCard] = useState<string | undefined>();
  const [activeCard, setActiveCard] = useState<string | undefined>();
  const [prevSelectedCard, setPrevSelectedCard] = useState(selectedCard);

  if (selectedCard !== prevSelectedCard) {
    setPrevSelectedCard(selectedCard);
    if (selectedCard) {
      setActiveCard(selectedCard);
    }
  }

  const activeCardData = useMemo(
    () => OfferCardsContent.find((card) => card._id === activeCard),
    [activeCard]
  );

  return (
    <section className="mt-9 flex items-start justify-center gap-7 w-full max-lg:flex-col">
      {OfferCardsContent.map((card) => (
        <OfferCard.Root key={card._id}>
          <OfferCard.Title>{card.title}</OfferCard.Title>
          <OfferCard.Content image={card.image} text={card.text} />
          <OfferCard.Button
            hasIcon={card.button.hasIcon}
            label={card.button.label}
            onClick={() => setSelectedCard(card._id)}
          />
        </OfferCard.Root>
      ))}

      <OfferCard.Modal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(undefined)}
      >
        <div className="flex flex-col items-start justify-start gap-4">
          {activeCardData && (
            <>
              <h2 className="text-xl font-bold">{activeCardData?.title}</h2>
              <p className="text-gray-600">{activeCardData?.text}</p>
            </>
          )}
        </div>
      </OfferCard.Modal>
    </section>
  );
}
