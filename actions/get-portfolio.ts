import { Portfolio } from "@/types/type";

export type PaginatedPortfolioResponse = {
  data: Portfolio[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  error?: string; // optional error field
};

export const getPortfolios = async (
  page: number = 1
): Promise<PaginatedPortfolioResponse> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_ADMIN_URL}/api/portfolio?page=${page}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return {
        data: [],
        page: 1,
        perPage: 0,
        total: 0,
        totalPages: 0,
        error: "Failed to load portfolios",
      };
    }

    return await res.json();
  } catch (error) {
    return {
      data: [],
      page: 1,
      perPage: 0,
      total: 0,
      totalPages: 0,
      error: (error as Error).message || "Unexpected error occurred",
    };
  }
};
