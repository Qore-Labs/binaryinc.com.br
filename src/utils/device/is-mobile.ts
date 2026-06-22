import { headers } from "next/headers";

export async function ValidateDevice() {
  const userAgent = (await headers()).get("user-agent") || "";
  const IS_MOBILE = /mobile/i.test(userAgent);
  return IS_MOBILE;
}
