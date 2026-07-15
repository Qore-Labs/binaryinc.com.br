import { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-87.5 flex flex-col items-start justify-start">
      {children}
    </div>
  );
};
