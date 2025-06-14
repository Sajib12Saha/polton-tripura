import { Service } from "@/types/type";

type serviceResponseType = {
  data:Service[]
}

export const getServices = async ():Promise<serviceResponseType> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/services`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load services");
  return await res.json();
};
