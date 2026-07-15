import { ReactNode } from "react";

export const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-(--gray-06) text-base font-normal text-start font-alt">
      {children}
    </p>
  );
};
