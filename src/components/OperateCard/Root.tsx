import { ReactNode } from "react";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-90.5 flex flex-col items-start justify-center gap-4">
      {children}
    </div>
  );
};
