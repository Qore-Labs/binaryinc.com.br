import { SITE_CONFIG } from "@/src/utils/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cases",
  appleWebApp: {
    title: `Cases | ${SITE_CONFIG.name}`,
  },
};

export default function Cases() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center sm:items-center">
        <h1 className="text-6xl font-bold text-center sm:text-left">Cases</h1>
        <span className="text-center font-medium text-zinc-500 text-xs">
          Hello, world! - comming soon...
        </span>
      </main>
    </div>
  );
}
