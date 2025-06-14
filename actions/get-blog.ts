import { BlogType } from "@/types/type";


export const getBlog = async (id:string):Promise<BlogType> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return await res.json();
};
