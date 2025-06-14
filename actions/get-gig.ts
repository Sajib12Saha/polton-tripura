import { Gig} from "@/types/type";

export const getGig = async (): Promise<Gig> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/gig`, { method: "GET",    cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch gig");

  const data = await res.json(); 

  return data;
};
