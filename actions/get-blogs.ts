import { BlogType } from "@/types/type";

export type PaginatedBlogResponse = {
  data: BlogType[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  error?: string; // optional error field
};

export const getBlogs = async (page: number = 1):Promise<PaginatedBlogResponse> => {
  const res = await fetch(`${process.env.NEXT_ADMIN_URL}/api/blogs?page=${page}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return await res.json();
};
