import { Gig, SkillType} from "@/types/type";

export const getSkills = async (): Promise<SkillType[]> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/skill`, { method: "GET",    cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch skills");

  const data = await res.json(); 

  return data;
};
