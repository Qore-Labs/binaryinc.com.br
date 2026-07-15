import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h5 className="text-(--black-02) text-2xl font-semibold text-start font-hanken-grotesk">
      {children}
    </h5>
  );
};
