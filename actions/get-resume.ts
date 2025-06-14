import {Resume} from "@/types/type";

export const getResume = async (): Promise<Resume> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/resume`, { method: "GET",    cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch resume");

  const data = await res.json(); 

  return data;
};
