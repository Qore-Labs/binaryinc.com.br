import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h5 className="mb-5 text-(--dark-blue) text-xl font-bold text-start">
      {children}
    </h5>
  );
};
