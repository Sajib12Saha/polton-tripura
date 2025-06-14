
import { Profile } from "@/types/type";

export const getProfile = async (): Promise<Profile> => {
   const abortController = new AbortController();

  
  const res = await fetch(`${process.env.NEXT_ADMIN_URL!}/api/profile`, { method: "GET",    cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch profile");

  const data = await res.json(); 

  return data;
};
